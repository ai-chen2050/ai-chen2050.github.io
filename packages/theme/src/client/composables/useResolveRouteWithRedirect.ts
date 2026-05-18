import { isFunction, isString } from "@vuepress/shared";
import { useRouter } from "vue-router";
import type { Router, RouteLocationRaw } from "vue-router";

/**
 * Resolve a route with redirection
 */
export const useResolveRouteWithRedirect = (
  ...args: Parameters<Router["resolve"]>
): ReturnType<Router["resolve"]> => {
  const router = useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!lastMatched?.redirect) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect)
    ? redirect(route, router.currentRoute.value)
    : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect)
    ? { path: resolvedRedirect }
    : resolvedRedirect;
  const base = {
    hash: route.hash,
    query: route.query,
    ...("path" in resolvedRedirectObj && resolvedRedirectObj.path
      ? {}
      : { params: route.params })
  };
  return useResolveRouteWithRedirect({
    ...base,
    ...resolvedRedirectObj
  } as RouteLocationRaw);
};
