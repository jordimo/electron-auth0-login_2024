import { library } from './library/index.js';
import { Config } from './types.js';
import { mergeAdapters } from './framework.js';

import {
    authAPI,
    authWindow,
    cryptography,
    logger,
    keytarRefreshTokens,
    customRefreshTokens,
    tokens
} from './adapters/index.js';

export function auth0Login (config: Config) {
    let adapter = mergeAdapters(
        authAPI,
        authWindow,
        cryptography,
        logger,
        tokens
    );

    if (config.refreshTokens && 'keytar' in config.refreshTokens) {
        adapter = mergeAdapters(
            adapter,
            keytarRefreshTokens
        );
    }

    if (config.refreshTokens && 'store' in config.refreshTokens) {
        adapter = mergeAdapters(
            adapter,
            customRefreshTokens
        );
    }

    return library(adapter, config);
}
