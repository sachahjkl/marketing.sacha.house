import lang from './lang.json';


// export const config: import('sveltekit-i18n').Config = {
// 	fallbackLocale: defaultLocale,
// 	translations: {
// 		...lang
// 	},
// 	loaders: [
// 		{
// 			locale: 'en',
// 			key: 'menu',
// 			loader: async () => (await import('./en/menu.json')).default
// 		},
// 		{
// 			locale: 'fr',
// 			key: 'menu',
// 			loader: async () => (await import('./fr/menu.json')).default
// 		},
// 		{
// 			locale: 'en',
// 			key: 'index',
// 			routes: ['/', ''],
// 			loader: async () => (await import('./en/index.json')).default
// 		},
// 		{
// 			locale: 'fr',
// 			key: 'index',
// 			routes: ['/', ''],
// 			loader: async () => (await import('./fr/index.json')).default
// 		},
// 		{
// 			locale: 'en',
// 			key: 'strategy',
// 			routes: ['/strategy'],
// 			loader: async () => (await import('./en/strategy.json')).default
// 		},
// 		{
// 			locale: 'fr',
// 			key: 'strategy',
// 			routes: ['/strategy'],
// 			loader: async () => (await import('./fr/strategy.json')).default
// 		},
// 		{
// 			locale: 'en',
// 			key: 'about',
// 			routes: ['/about'],
// 			loader: async () => (await import('./en/about.json')).default
// 		},
// 		{
// 			locale: 'fr',
// 			key: 'about',
// 			routes: ['/about'],
// 			loader: async () => (await import('./fr/about.json')).default
// 		}
// 	]
// };

// export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'fr'

register(lang.en.code, () => import('./locales/en.json'))
register(lang.fr.code, () => import('./locales/fr.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
})