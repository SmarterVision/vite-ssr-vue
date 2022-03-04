import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, b as createBlock, d as resolveDynamicComponent, S as Suspense, e as createTextVNode, f as createRouter$1, g as createWebHistory, h as createSSRApp } from "./vendor.0ab654a0.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("| ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("About");
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_router_link, { to: "/" }, {
      default: withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }),
    _hoisted_2,
    createVNode(_component_router_link, { to: "/about" }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    createVNode(_component_router_view, null, {
      default: withCtx(({ Component }) => [
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(Component)))
          ]),
          _: 2
        }, 1024))
      ]),
      _: 1
    })
  ]);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const pages = { "./pages/About.vue": () => true ? __vitePreload(() => import("./About.86eb9ede.js"), ["assets/About.86eb9ede.js","assets/About.79bf45f2.css","assets/button.a4efa6b0.js","assets/button.b36c2ed1.css","assets/vendor.0ab654a0.js"]) : null, "./pages/External.vue": () => true ? __vitePreload(() => import("./External.e7b97bfb.js"), ["assets/External.e7b97bfb.js","assets/vendor.0ab654a0.js"]) : null, "./pages/Home.vue": () => true ? __vitePreload(() => import("./Home.87d9349d.js"), ["assets/Home.87d9349d.js","assets/Home.36d82237.css","assets/button.a4efa6b0.js","assets/button.b36c2ed1.css","assets/vendor.0ab654a0.js"]) : null, "./pages/Store.vue": () => true ? __vitePreload(() => import("./Store.8b222aaf.js"), ["assets/Store.8b222aaf.js","assets/Store.424e932e.css","assets/vendor.0ab654a0.js"]) : null };
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path]
  };
});
function createRouter() {
  return createRouter$1({
    history: createWebHistory(),
    routes
  });
}
function createApp() {
  const app2 = createSSRApp(App);
  const router2 = createRouter();
  app2.use(router2);
  return { app: app2, router: router2 };
}
const { app, router } = createApp();
router.isReady().then(() => {
  app.mount("#app");
});
export { _export_sfc as _, __vitePreload as a };
