import nookies from 'nookies';

export function getCookie(ctx: any | null | undefined, key: string) {
  return nookies.get(ctx)[key];
}
export function delCookie(ctx: any | null | undefined, key: string) {
  return nookies.destroy(ctx, key);
}
export function setCookie(
  ctx: any | null | undefined,
  key: string,
  value: string,
  options: any,
) {
  return nookies.set(ctx, key, value, options);
}

export const cookie = {
  get: getCookie,
  del: delCookie,
  set: setCookie,
};
