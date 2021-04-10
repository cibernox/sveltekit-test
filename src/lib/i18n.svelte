<script context="module">
	import { addMessages, init } from 'precompile-intl-runtime';
    import en from '../../locales/en.js';
	// @ts-ignore
    addMessages('en', en)

    init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});
</script>