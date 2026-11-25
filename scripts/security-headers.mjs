// @ts-nocheck
/**
 * Content-Security-Policy for WeHR Legal.
 * Dev allows Vite's inline refresh and the HMR websocket.
 * Production does not. frame-ancestors is omitted so the live preview
 * can still embed the site.
 */

export const productionCsp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
].join("; ");

export const developmentCsp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://grok.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "connect-src 'self' ws: wss: https://grok.com https://fonts.googleapis.com https://fonts.gstatic.com",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
].join("; ");

export function securityHeaderMap(dev) {
  return {
    "content-security-policy": dev ? developmentCsp : productionCsp,
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    "permissions-policy": "camera=(), microphone=(), geolocation=()",
  };
}

/** Attach the headers on a Vite dev or preview server. */
export function securityHeadersPlugin() {
  const attach = (server, dev) => {
    const headers = securityHeaderMap(dev);
    server.middlewares.use((_req, res, next) => {
      const writeHead = res.writeHead;
      res.writeHead = function patchedWriteHead(...args) {
        for (const [key, value] of Object.entries(headers)) {
          if (!res.getHeader(key)) res.setHeader(key, value);
        }
        return writeHead.apply(this, args);
      };
      next();
    });
  };

  return {
    name: "wehrlegal:security-headers",
    configureServer(server) {
      attach(server, true);
    },
    configurePreviewServer(server) {
      attach(server, false);
    },
  };
}
