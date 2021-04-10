const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: static(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		prerender: {
			enabled: false
		},

		ssr: false,

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
            plugins: [
                myPlugin('locales')
            ]			
		}
	}
};


function myPlugin(localesFolder) {
	const virtualFileId = '@my-virtual-file'
  
	return {
	  name: 'my-plugin', // required, will show up in warnings and errors
	  resolveId(id) {
		  if (id.indexOf(localesFolder) > -1) {
			return '../../locales/en.js'
		  }
	  },
	  load(id) {
		if (id.indexOf(localesFolder) > -1) {
			console.log(id, 'id');
			return `export default {
				plain: "Some text without interpolations",
				interpolated: (c) => \`A text where I interpolate \${c} times\`,
			}`
		}
	  }
	}
  }