import { createRollupConfigs } from './scripts/base.config.js';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;
process.env.NODE_ENV = production ? 'production' : 'development';
const buildDir = `dist/build`;

export const config = {
	staticDir: 'static',
	distDir: 'dist',
	buildDir: buildDir,
	serve: !production,
	production,
	rollupWrapper: (rollup) => {
		rollup.input = `src/main.ts`;
		rollup.output.sourcemap = !production;
		rollup.plugins = [
			...rollup.plugins,
			typescript({ sourceMap: !production }),
			replace({
				process: JSON.stringify({
					env: {
						PROD: production,
					},
				}),
			}),
		];
		return rollup;
	},
	svelteWrapper: (svelte) => {
		(svelte.css = (css) => css.write(`${buildDir}/bundle.css`, !production)),
			(svelte.preprocess = [
				autoPreprocess({
					postcss: true,
					sourceMap: !production,
					defaults: { style: 'postcss', script: 'typescript' },
				}),
			]);
	},
	swWrapper: (worker) => worker,
};

const configs = createRollupConfigs(config);

export default configs;

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/