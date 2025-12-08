import { _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderTeleport } from 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { T as TruckIcon, C as ClipboardDocumentListIcon, S as SparklesIcon } from './TruckIcon-CpaYUs5V.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/devalue/index.js';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/unhead/dist/plugins.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = publicAssetsURL("/images/logo-watermark.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showPhone = ref(false);
    const copied = ref(false);
    const heroStats = [
      { value: "50+", label: "Local Vehicles Detailed" },
      { value: "7", label: "Years Detailing Experience" },
      { value: "4-8 hrs", label: "On-Site Sessions" },
      { value: "24 hr", label: "Response Time" }
    ];
    const features = [
      {
        title: "PNW Prepared",
        description: "Pop-up canopies, flexible setups, and on-site hookups let us work rain or shine wherever there's water and power.",
        icon: TruckIcon,
        iconLabel: "Truck icon representing a mobile-ready setup"
      },
      {
        title: "Transparent Consultations",
        description: "Full-vehicle inspections cover paint, wheels, and interiors so every plan is client-specific and negotiable to your goals.",
        icon: ClipboardDocumentListIcon,
        iconLabel: "Clipboard icon symbolizing transparent consultations"
      },
      {
        title: "Aftercare Support",
        description: "Maintenance reminders, wash tips, and a monthly program that cuts detail pricing in half for loyal clients.",
        icon: SparklesIcon,
        iconLabel: "Sparkles icon highlighting ongoing aftercare support"
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
        price: "$650",
        description: "One to two-step correction with ceramic or graphene coating.",
        perks: ["Machine correction stages", "Wheel and glass coating options", "2-6 year protection", "Aftercare kit + support"]
      }
    ];
    const testimonials = [
      { name: "Cody Finch", quote: "The paint enhancement makes my car look amazing. Thank you so much." },
      {
        name: "Eric Farrell",
        quote: "I couldn\u2019t be happier with Ryan\u2019s work! He\u2019s professional, detail-oriented, and clearly takes pride in what he does. If you\u2019re looking for a trustworthy local car detailer, this is the place to go."
      },
      {
        name: "Austen Tanner",
        quote: "Ryan was on time, stayed over four hours on my non-crew cab truck, and had me walk around to point out anything I thought needed attention. Totally impressed and will definitely use this service again."
      },
      {
        name: "Mark Snider",
        quote: "My RAV4 is like brand new! Ryan really knows his stuff and is a pleasure to be around. Thank you!"
      },
      {
        name: "Dan Jocoy",
        quote: "Ryan did the interior of my 2015 Honda Sport and showed up with every tool for a quality job. The cabin looks better than when I bought it."
      },
      {
        name: "Jonathan Hunter",
        quote: "Ryan and his team did an amazing job\u2014my car looks brand new!"
      },
      {
        name: "Trace Ericksen",
        quote: "Excellent work and quality. I was extremely satisfied and will be back for ongoing services. Thanks!"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 pb-16" }, _attrs))}><section class="relative overflow-hidden px-6 py-20 sm:px-10"><div class="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center"><div class="space-y-6 text-center lg:text-left"><div class="flex justify-center"><img${ssrRenderAttr("src", _imports_0)} alt="Quantum Mobile Detailing logo" class="h-64 w-auto max-w-sm sm:max-w-md"></div><p class="text-sm uppercase tracking-[0.4em] text-brand-primary/80">Saint Helens \u2022 Oregon Northwest</p><h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl"> Mobile Detailing with Quantum Level Precision </h1><p class="text-lg text-slate-300"> Offering the ultimate convenience in NW Oregon, we come to you! Interior/exterior detailing and paint correction. We carry premium products such as P&amp;S liquids, The Rag Company towels, and every tool needed to get the job done. Call now and let&#39;s get your baby cleaned! </p><div class="flex flex-wrap justify-center gap-4 lg:justify-start"><button type="button" class="btn-primary">Call Or Text</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Services`);
          } else {
            return [
              createTextVNode("View Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid flex-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(heroStats, (stat) => {
        _push(`<div class="glow-card rounded-3xl px-6 py-6 text-left"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">${ssrInterpolate(stat.label)}</p><p class="mt-3 text-3xl font-semibold text-white sm:text-4xl">${ssrInterpolate(stat.value)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="px-6 sm:px-10"><div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<article class="glow-card rounded-3xl p-6"><div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          class: "h-6 w-6 text-brand-primary",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`<span class="sr-only">${ssrInterpolate(feature.iconLabel)}</span></div><h3 class="text-xl font-semibold text-white">${ssrInterpolate(feature.title)}</h3><p class="mt-3 text-sm text-slate-300">${ssrInterpolate(feature.description)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="bg-slate-900/40 px-6 py-16 sm:px-10"><div class="mx-auto max-w-6xl space-y-10"><header class="space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Signature Packages</p><h2 class="text-3xl font-semibold text-white">Hand-crafted plans to fit every finish</h2><p class="text-slate-300">Each package is tailored during your consultation, balancing your driving habits, vehicle type, and aftercare goals.</p></header><div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<article class="glow-card flex flex-col rounded-3xl p-6"><div class="flex items-center justify-between"><span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">${ssrInterpolate(service.tier)}</span><div class="text-right"><p class="text-[10px] uppercase tracking-[0.3em] text-slate-500">Starts at</p><p class="text-lg font-semibold text-white">${ssrInterpolate(service.price)}+</p></div></div><h3 class="mt-4 text-2xl font-semibold text-white">${ssrInterpolate(service.title)}</h3><p class="mt-2 text-sm text-slate-300">${ssrInterpolate(service.description)}</p><ul class="mt-4 space-y-2 text-sm text-slate-200"><!--[-->`);
        ssrRenderList(service.perks, (perk) => {
          _push(`<li>- ${ssrInterpolate(perk)}</li>`);
        });
        _push(`<!--]--></ul><a href="tel:+15415010698" class="mt-6 inline-flex justify-center rounded-full border border-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent hover:bg-brand-primary hover:text-black"> Call To Book </a></article>`);
      });
      _push(`<!--]--></div></div></section><section class="px-6 sm:px-10"><div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"><article class="glow-card rounded-3xl p-6"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Testimonials</p><h3 class="mt-3 text-2xl font-semibold text-white">Clients trust us with their daily drivers and collectibles.</h3><div class="mt-6 max-h-72 space-y-6 overflow-y-auto pr-2"><!--[-->`);
      ssrRenderList(testimonials, (testimonial) => {
        _push(`<figure class="border-l border-brand-primary/40 pl-4"><blockquote class="text-sm text-slate-300">&quot;${ssrInterpolate(testimonial.quote)}&quot;</blockquote><figcaption class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">${ssrInterpolate(testimonial.name)}</figcaption></figure>`);
      });
      _push(`<!--]--></div></article><article class="glow-card rounded-3xl p-6"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Coverage Area</p><h3 class="mt-3 text-2xl font-semibold text-white">Proudly serving Saint Helens, Scappoose, Rainier, and the greater Oregon Northwest.</h3><p class="mt-3 text-sm text-slate-300"> We bring the tools, set up canopies, and tap into your available water and electrical outlets so detailing stays on schedule through rain, pollen, and chilly mornings. </p><p class="mt-3 text-sm text-slate-300"> Columbia County routes keep travel fees minimal, but we routinely head into Portland, Vancouver, and coastal towns when we negotiate fair trip pricing during your estimate. </p></article></div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(showPhone)) {
          _push2(`<div class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"><div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-primary/30 bg-slate-950 p-8 shadow-xl"><button class="absolute right-4 top-4 text-slate-400 hover:text-white" aria-label="Close phone window"> \xD7 </button><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Call Or Text</p><p class="mt-4 text-center text-3xl font-bold text-white drip-text"> (541) 501-0698 </p><p class="mt-2 text-center text-sm text-slate-400">Tap the number to copy or call from your phone.</p><div class="mt-6 flex flex-col gap-3"><button class="btn-primary justify-center" type="button"> Copy Number </button><a href="tel:+15415010698" class="btn-outline justify-center">Call Now</a></div>`);
          if (unref(copied)) {
            _push2(`<p class="mt-3 text-center text-xs text-green-400">Phone number copied!</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DCrCrMLc.mjs.map
