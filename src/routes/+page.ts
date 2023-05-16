import type countapi from 'countapi-js';

import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        streaming: {
            participants: Promise.resolve<countapi.Result>({
                path: '',
                status: 0,
                value: 1000
            })
        }
    };
}) satisfies PageLoad;