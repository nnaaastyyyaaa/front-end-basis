import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getSnapshot() {
  const path = window.location.hash.replace(/^#/, "");
  return path === "" ? "/" : path;
}

export function useRoute() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
