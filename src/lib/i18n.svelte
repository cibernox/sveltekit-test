<script context="module">
	import { addMessages, init /*, getLocaleFromNavigator */} from 'svelte-i18n';
    import en from '../../locales/en.json';
	// @ts-ignore
    addMessages(en)

    init({
		fallbackLocale: 'en',
		initialLocale: 'en' //getLocaleFromNavigator(),
	});
</script>