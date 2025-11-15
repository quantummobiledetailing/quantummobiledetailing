import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const heroStats = [
      { value: "250+", label: "Local Vehicles Detailed" },
      { value: "12", label: "Years Detailing Experience" },
      { value: "4-8 hrs", label: "On-Site Sessions" },
      { value: "24 hr", label: "Response Time" }
    ];
    const features = [
      {
        title: "PNW Prepared",
        description: "Filtered water, heated extractors, and dry canopies keep details on schedule through every season.",
        icon: "01"
      },
      {
        title: "Transparent Consultations",
        description: "We inspect paint, trim, and interiors together before recommending a plan.",
        icon: "02"
      },
      {
        title: "Aftercare Support",
        description: "Maintenance reminders and wash tips designed for wet Oregon roads.",
        icon: "03"
      }
    ];
    const services = [
      {
        tier: "Interior & Exterior",
        title: "Complete Detail",
        price: "$250",
        description: "Four-hour service covering every inch from paint to upholstery.",
        perks: ["Foam bath + hand wash", "Wheels, tires, barrels cleaned", "Full cabin vacuum & wipe-down", "Dash, panels, glass protected"]
      },
      {
        tier: "Exterior",
        title: "Paint Enhancement",
        price: "$350",
        description: "Great for reviving gloss after wet winters or pine pollen.",
        perks: ["Decon wash + clay treatment", "Single-stage polish", "Trim revival", "6-month sealant"]
      },
      {
        tier: "Correction & Coating",
        title: "Ceramic Upgrade",
        price: "From $550",
        description: "One to two-step correction with ceramic or graphene coating.",
        perks: ["Machine correction stages", "Wheel and glass coating options", "2-6 year protection", "Aftercare kit + support"]
      }
    ];
    const testimonials = [
      { name: "Kara M.", quote: "Ryan keeps our family SUVs spotless even after muddy weekend trips. The shine lasts for months." },
      { name: "Nathan R.", quote: "He corrected the paint on my classic Nova and protected it before the Portland rains moved in." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 pb-16" }, _attrs))}><section class="relative overflow-hidden px-6 py-20 sm:px-10"><div class="absolute inset-0 -z-10 opacity-60"><div class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand-primary/50 to-transparent blur-3xl"></div></div><div class="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center"><div class="space-y-6 text-center lg:text-left"><p class="text-sm uppercase tracking-[0.4em] text-brand-primary/80">Saint Helens • Oregon Northwest</p><h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl"> Mobile detailing tuned for rainy seasons and PNW roads </h1><p class="text-lg text-slate-300"> We bring filtered water, soft lighting, and climate-ready canopies so Columbia County drivers can enjoy a showroom finish without leaving home. </p><div class="flex flex-wrap justify-center gap-4 lg:justify-start">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/booking",
        class: "rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reserve A Detail `);
          } else {
            return [
              createTextVNode(" Reserve A Detail ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:border-brand-primary hover:text-brand-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Services `);
          } else {
            return [
              createTextVNode(" View Services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid flex-1 grid-cols-2 gap-4 text-center text-sm uppercase tracking-widest text-slate-300"><!--[-->`);
      ssrRenderList(heroStats, (stat) => {
        _push(`<div class="glow-card rounded-3xl px-6 py-8"><p class="text-4xl font-semibold text-white">${ssrInterpolate(stat.value)}</p><p class="mt-2 text-xs text-slate-400">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="px-6 sm:px-10"><div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<article class="glow-card rounded-3xl p-6"><div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">${ssrInterpolate(feature.icon)}</div><h3 class="text-xl font-semibold text-white">${ssrInterpolate(feature.title)}</h3><p class="mt-3 text-sm text-slate-300">${ssrInterpolate(feature.description)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="bg-slate-900/40 px-6 py-16 sm:px-10"><div class="mx-auto max-w-6xl space-y-10"><header class="space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Signature Packages</p><h2 class="text-3xl font-semibold text-white">Hand-crafted plans to fit every finish</h2><p class="text-slate-300">Each package is tailored during your consultation, balancing your driving habits, vehicle type, and aftercare goals.</p></header><div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<article class="glow-card flex flex-col rounded-3xl p-6"><div class="flex items-center justify-between"><span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">${ssrInterpolate(service.tier)}</span><span class="text-lg font-semibold text-white">${ssrInterpolate(service.price)}</span></div><h3 class="mt-4 text-2xl font-semibold text-white">${ssrInterpolate(service.title)}</h3><p class="mt-2 text-sm text-slate-300">${ssrInterpolate(service.description)}</p><ul class="mt-4 space-y-2 text-sm text-slate-200"><!--[-->`);
        ssrRenderList(service.perks, (perk) => {
          _push(`<li>- ${ssrInterpolate(perk)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/booking",
          class: "mt-6 inline-flex justify-center rounded-full border border-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary hover:bg-brand-primary hover:text-slate-950"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Book Package `);
            } else {
              return [
                createTextVNode(" Book Package ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section><section class="px-6 sm:px-10"><div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"><article class="glow-card rounded-3xl p-6"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Testimonials</p><h3 class="mt-3 text-2xl font-semibold text-white">Clients trust us with their daily drivers and collectibles.</h3><div class="mt-6 space-y-6"><!--[-->`);
      ssrRenderList(testimonials, (testimonial) => {
        _push(`<figure class="border-l border-brand-primary/40 pl-4"><blockquote class="text-sm text-slate-300">&quot;${ssrInterpolate(testimonial.quote)}&quot;</blockquote><figcaption class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">${ssrInterpolate(testimonial.name)}</figcaption></figure>`);
      });
      _push(`<!--]--></div></article><article class="glow-card flex flex-col justify-between rounded-3xl p-6"><div><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Coverage Area</p><h3 class="mt-3 text-2xl font-semibold text-white">Proudly serving Saint Helens, Scappoose, Rainier, and the greater Oregon Northwest.</h3><p class="mt-3 text-sm text-slate-300"> Fully mobile setup with purified water, onboard power, and covered work zones keeps results consistent through coastal rain, pine pollen, and chilly mornings. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/booking",
        class: "mt-6 inline-flex justify-center rounded-full bg-brand-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Schedule A Route Stop `);
          } else {
            return [
              createTextVNode(" Schedule A Route Stop ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Dq7K_X-A.js.map
