import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/devalue/index.js';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue-router/vue-router.node.mjs';

const __vite_glob_0_0 = "" + buildAssetsURL("1_Subaru_Legacy_driver.ChRFtMpA.png");
const __vite_glob_0_1 = "" + buildAssetsURL("1_Subaru_Legacy_hood.CiZqHJoN.png");
const __vite_glob_0_2 = "" + buildAssetsURL("1_Subaru_Legacy_top.Ct-7l7el.png");
const __vite_glob_0_3 = "" + buildAssetsURL("2_Jeep_trunk.DdvzTL_s.png");
const __vite_glob_0_4 = "" + buildAssetsURL("Challenger_Driver_Side.CjwNxGfn.png");
const __vite_glob_0_5 = "" + buildAssetsURL("Ford_Truck_Front.CSrH57J_.png");
const __vite_glob_0_6 = "" + buildAssetsURL("Subaru_Driver_Side.BlmuoxpH.png");
const __vite_glob_0_7 = "" + buildAssetsURL("forester_driver_back.83LEvxFV.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryModules = /* @__PURE__ */ Object.assign({
      "/assets/gallery/1_Subaru_Legacy_driver.png": __vite_glob_0_0,
      "/assets/gallery/1_Subaru_Legacy_hood.png": __vite_glob_0_1,
      "/assets/gallery/1_Subaru_Legacy_top.png": __vite_glob_0_2,
      "/assets/gallery/2_Jeep_trunk.png": __vite_glob_0_3,
      "/assets/gallery/Challenger_Driver_Side.png": __vite_glob_0_4,
      "/assets/gallery/Ford_Truck_Front.png": __vite_glob_0_5,
      "/assets/gallery/Subaru_Driver_Side.png": __vite_glob_0_6,
      "/assets/gallery/forester_driver_back.png": __vite_glob_0_7
    });
    const shots = Object.entries(galleryModules).map(([path, src]) => {
      var _a;
      const filename = (_a = path.split("/").pop()) != null ? _a : "Gallery Image";
      const baseName = filename.replace(/\.[^/.]+$/, "");
      const prettyTitle = baseName.replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
      return {
        title: prettyTitle,
        description: "Captured on-site across Saint Helens and the Oregon Northwest.",
        image: src
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 px-6 py-16 sm:px-10" }, _attrs))}><section class="mx-auto max-w-5xl space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Gallery</p><h1 class="text-4xl font-semibold text-white">Recent transformations across Saint Helens &amp; the Oregon Northwest.</h1><p class="text-lg text-slate-300">Swipe through favorite projects that show correction depth, coating clarity, and interior resets after rainy commutes or coastal adventures.</p></section><section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(shots), (shot) => {
        _push(`<article class="glow-card overflow-hidden rounded-3xl"><div class="h-48 w-full bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url(${shot.image})` })}"></div><div class="p-5"><h3 class="text-lg font-semibold text-white">${ssrInterpolate(shot.title)}</h3><p class="mt-2 text-sm text-slate-300">${ssrInterpolate(shot.description)}</p></div></article>`);
      });
      _push(`<!--]--></section><section class="mx-auto max-w-5xl rounded-3xl border border-brand-primary/40 bg-slate-900/40 p-8 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Follow Along</p><h2 class="mt-3 text-3xl font-semibold text-white">See more Northwest builds on Instagram @QuantumDetailing</h2><p class="mt-2 text-sm text-slate-300">Ready for your vehicle to make the next before-and-after? We come to you anywhere in Columbia County.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/booking",
        class: "mt-6 inline-flex justify-center rounded-full bg-brand-primary px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book Your Transformation `);
          } else {
            return [
              createTextVNode(" Book Your Transformation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery-DJ_Z7UaL.mjs.map
