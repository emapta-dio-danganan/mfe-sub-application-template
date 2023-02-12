export const API = `${window.location.origin}/api`;
export const WEB = `${window.location.origin}`;
export const AUTH_API = process.env.AUTH_API;
export const NODE_API = process.env.APP_ENV=='local' ?  (
    `${window.location.protocol}//${window.location.hostname}:${process.env.PORT}/node`
) : `${window.location.origin}/node/api`;
