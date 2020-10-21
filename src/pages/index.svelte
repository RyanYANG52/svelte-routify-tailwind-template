<script lang="ts">
	import { metatags } from '@roxi/routify';
	import Header from '../components/Header.svelte';

	metatags.title = 'My Routify app';
	metatags.description = 'Description coming soon...';
</script>

<style>
	a {
		@apply text-teal-500 mx-auto;
	}
</style>


<h1 class="text-center text-6xl m-8 text-teal-500">svelte-routify-tailwind-template</h1>

<div class="flex flex-col items-center">
    <Header name="hello world"/>
	<a href="https://github.com/RyanYANG52/svelte-routify-tailwind-template">github link</a>
</div>
