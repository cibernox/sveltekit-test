const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const babel = require('@babel/core');
const intlPrecompiler = require("babel-plugin-precompile-intl");
const fs = require('fs');

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
                myPlugin('./locales')
            ]			
		}
	}
};


function myPlugin(localesFolder) {  
	return {
	  	name: 'my-plugin', // required, will show up in warnings and errors
		// enforce: 'pre',
		// resolveId(id) {
		// 	if (id === 'locales/en') {
		// 		return id + '.js';
		// 	}
		// },
		// load(id) {
		// 	if (id.includes('locales/en')) {
		// 		return fs.readFileSync('./' + id.replace('.js', '.json'), 'utf8');
		// 	}
		// },
		transform(code, id, ssr) {			
			if (id.indexOf('locales/en') > -1) {
				// debugger;
				// return babel.transform('export default ' + code, {
					debugger;
				return babel.transform(code, {
					plugins: [intlPrecompiler]
				}).code
				// .replace('"precompile-intl-runtime"', '"node_modules/precompile-intl-runtime"');
			}
		}
	}
}
