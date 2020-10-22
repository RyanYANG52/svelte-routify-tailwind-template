import { createRollupConfigs } from './scripts/base.config.js';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';

import { injectManifest } from 'rollup-plugin-workbox';
const workboxConfig = require('./workbox-config.js');

const { createPreprocessors } = require("./svelte.config.js")

const production = !process.env.ROLLUP_WATCH;
process.env.NODE_ENV = production ? 'production' : 'development';
const buildDir = 'dist/build';

export const config = {
	staticDir: 'static',
	distDir: 'dist',
	buildDir: buildDir,
	serve: !production,
	production,
	rollupWrapper: (rollup) => {
		rollup.input = 'src/main.ts';
		rollup.output.sourcemap = !production;
		rollup.plugins = [
			...rollup.plugins,
			typescript({ sourceMap: !production }),
			replace({
				process: JSON.stringify({
					env: {
						SW: process.env.SW == 'true',
					},
				}),
			}),
		];
		return rollup;
	},
	svelteWrapper: (svelte) => {
		svelte.css = (css) => css.write(`${buildDir}/bundle.css`, !production);
		svelte.preprocess = createPreprocessors({sourceMap: !production})
	},
	swWrapper: (worker) => {
		if (process.env.SW) {
			worker.output.sourcemap = !production;
			worker.plugins = [
				{
					name: 'watch-app',
					buildStart() {
						this.addWatchFile(buildDir);
					},
				},
				...worker.plugins,
				injectManifest(workboxConfig),
			];
			return worker;
		} else {
			return true;
		}
	},
};

const configs = createRollupConfigs(config).filter((c) => typeof c === 'object');

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
