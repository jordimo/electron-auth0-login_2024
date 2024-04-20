import * as Operations from './operations.js';
import { Adapter, Config, Context } from '../types.js';
import { $applyCtx } from '../framework.js';

export function library (adapter: Adapter, config: Config) {
    const applyCtx = $applyCtx(adapter(config) as Context);

    return {
        getToken:   applyCtx(Operations.getToken),
        isLoggedIn: applyCtx(Operations.isLoggedIn),
        login:      applyCtx(Operations.login),
        logout:     applyCtx(Operations.logout)
    };
}
