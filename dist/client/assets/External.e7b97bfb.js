import { _ as _export_sfc } from "./index.1b06d063.js";
import { o as openBlock, c as createElementBlock, r as resolveComponent, b as createBlock } from "./vendor.0ab654a0.js";
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "Example external component content");
}
var ExampleExternalComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    ExampleExternalComponent
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ExampleExternalComponent = resolveComponent("ExampleExternalComponent");
  return openBlock(), createBlock(_component_ExampleExternalComponent);
}
var External = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { External as default };
