import { _ as __nuxt_component_0 } from "./nuxt-link-R_mbkbOo.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ufo/dist/index.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/hookable/dist/index.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unctx/dist/index.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/radix3/dist/index.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/defu/dist/defu.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10" }, _attrs))}><div class="mx-auto flex max-w-4xl flex-col gap-12"><header class="space-y-4 text-center"><p class="text-sm uppercase tracking-[0.4em] text-brand-primary/80">Our Story</p><h1 class="text-4xl font-semibold text-white sm:text-5xl">Obsessed with the perfect finish</h1><p class="text-lg text-slate-300 sm:text-xl"> Quantum Mobile Detailing was founded to give enthusiasts a studio-quality outcome without the studio drop-off. We arrive fully equipped with filtered water, power, and premium products that respect modern finishes. </p></header><section class="grid gap-8 lg:grid-cols-2"><article class="glow-card rounded-3xl p-6"><h2 class="text-2xl font-semibold text-white">Detailers who listen first</h2><p class="mt-3 text-sm text-slate-300"> Every booking starts with a consultation to understand how you drive, store, and maintain your vehicle. That insight guides our tailored approach so you get results that last and advice you can actually use. </p><ul class="mt-6 space-y-3 text-sm text-slate-200"><li>• Licensed &amp; insured professionals</li><li>• Ongoing education in paint correction &amp; coatings</li><li>• Flexible scheduling for fleets and private collections</li></ul></article><article class="glow-card rounded-3xl p-6"><h2 class="text-2xl font-semibold text-white">Sustainable, safer detailing</h2><p class="mt-3 text-sm text-slate-300"> We utilize biodegradable soaps, low-water steam tools, and microfiber-only contact points to eliminate marring. Each technician maintains a color-coded towel system and filtered water supply for spot-free finishes. </p><p class="mt-4 text-sm text-slate-300"> The result is a refined, repeatable process that protects the environment and your vehicle’s surfaces. </p></article></section><section class="glow-card rounded-3xl p-6 text-center"><h2 class="text-2xl font-semibold text-white">Ready for the Quantum experience?</h2><p class="mt-2 text-sm text-slate-300"> Email <a class="text-brand-primary underline" href="mailto:hello@quantummobiledetailing.com"> hello@quantummobiledetailing.com </a> to secure your spot on this week’s route. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "mt-6 inline-flex items-center justify-center rounded-full border border-brand-primary px-8 py-3 text-sm font-medium text-brand-primary transition hover:bg-brand-primary hover:text-slate-950"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Back to Home `);
      } else {
        return [
          createTextVNode(" Back to Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-CVtceyOt.js.map
