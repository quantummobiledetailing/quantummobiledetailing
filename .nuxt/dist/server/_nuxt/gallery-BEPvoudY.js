import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/hookable/dist/index.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unctx/dist/index.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/radix3/dist/index.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/defu/dist/defu.mjs";
import "C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const shots = [
      {
        title: "GT3 Ceramic Elite",
        description: "Two-step correction followed by graphene coating before a Portland track weekend.",
        image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4d?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Model S Interior Reset",
        description: "Steam sanitation, leather hydration, and matte screen treatment after a rainy Highway 30 commute.",
        image: "https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Classic Bronco Revival",
        description: "Single-stage polish preserved original paint before a coastal camping trip.",
        image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Fleet Maintenance",
        description: "Monthly washes keep this local concierge shuttle fresh for guests.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Headlight Restoration",
        description: "Wet-sand and UV coat drastically improved clarity on this forest road SUV.",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Wheel Coating",
        description: "Wheels coated to fight Columbia River Gorge brake dust.",
        image: "https://images.unsplash.com/photo-1447639703758-f525f36456bf?auto=format&fit=crop&w=800&q=80"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 px-6 py-16 sm:px-10" }, _attrs))}><section class="mx-auto max-w-5xl space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Gallery</p><h1 class="text-4xl font-semibold text-white">Recent transformations across Saint Helens &amp; the Oregon Northwest.</h1><p class="text-lg text-slate-300">Swipe through favorite projects that show correction depth, coating clarity, and interior resets after rainy commutes or coastal adventures.</p></section><section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(shots, (shot) => {
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
export {
  _sfc_main as default
};
//# sourceMappingURL=gallery-BEPvoudY.js.map
