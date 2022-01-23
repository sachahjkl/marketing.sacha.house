import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const config: import('sveltekit-i18n').Config = {
	fallbackLocale: 'fr',
	translations: {
		...lang
	},
	loaders: [
		{
			locale: 'en',
			key: 'menu',
			loader: async () => (await import('./en/menu.json')).default
		},
		{
			locale: 'fr',
			key: 'menu',
			loader: async () => (await import('./fr/menu.json')).default
		},
		{
			locale: 'en',
			key: 'index',
			routes: ['/'],
			loader: async () => (await import('./en/index.json')).default
		},
		{
			locale: 'fr',
			key: 'index',
			routes: ['/'],
			loader: async () => (await import('./fr/index.json')).default
		},
		{
			locale: 'en',
			key: 'strategy',
			routes: ['/'],
			loader: async () => (await import('./en/strategy.json')).default
		},
		{
			locale: 'fr',
			key: 'strategy',
			routes: ['/'],
			loader: async () => (await import('./fr/strategy.json')).default
		},
		{
			locale: 'en',
			key: 'about',
			routes: ['/'],
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: 'fr',
			key: 'about',
			routes: ['/'],
			loader: async () => (await import('./fr/about.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);
