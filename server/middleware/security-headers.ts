import { productionCsp } from "../../scripts/security-headers.mjs";

const headers: Record<string, string> = {
  "content-security-policy": productionCsp,
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
};

export default async function securityHeaders(
  _event: unknown,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (!(result instanceof Response)) return result;
  const nextHeaders = new Headers(result.headers);
  for (const [key, value] of Object.entries(headers)) nextHeaders.set(key, value);
  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers: nextHeaders,
  });
}
