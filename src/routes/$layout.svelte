<script>
	import '../app.css';
	import i18n from '$lib/i18n.svelte'
	import { waitLocale } from 'svelte-i18n'
	export async function load() {
		// awaits for 'en' loaders
		return waitLocale()
	}	
</script>

<slot />
