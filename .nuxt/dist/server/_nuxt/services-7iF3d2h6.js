import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const packages = [
      {
        tier: "Full Service",
        title: "Interior & Exterior Detail",
        price: "$250",
        duration: "4 – 4.5 hrs",
        summary: "Our most popular Saint Helens package for reviving daily drivers inside and out.",
        features: ["Foam bath, clay, and hand wash", "Wheel + tire deep clean", "Interior vacuum, plastics, and glass", "Dash + seats dressed with UV protection"]
      },
      {
        tier: "Exterior Only",
        title: "Exterior Detail",
        price: "$130",
        duration: "1.5 – 2 hrs",
        summary: "Focused exterior refresh that removes Oregon road film and protects against rain.",
        features: ["Touchless pre-rinse + contact wash", "Bug and sap removal", "Tire dressing & trim rejuvenation", "Spray sealant for short-term protection"]
      },
      {
        tier: "Interior Only",
        title: "Interior Detail",
        price: "$160",
        duration: "2 – 2.5 hrs",
        summary: "Deep interior cleanse ideal after road trips, pets, or wet-weather commutes.",
        features: ["Steam sanitation of touch points", "Seat, carpet, and mat shampoo", "Leather clean + moisturize", "Odor-neutral finishing spray"]
      },
      {
        tier: "Gloss Boost",
        title: "Paint Enhancement",
        price: "$350",
        duration: "4.5 – 5 hrs",
        summary: "Single-stage polish to brighten dull paint before the next rainy season.",
        features: ["Iron decontamination", "Machine polish to remove light swirls", "Trim restoration", "Sealant for up to 6 months of gloss"]
      },
      {
        tier: "Correction",
        title: "Paint Correction (1-Step)",
        price: "$550",
        duration: "6 – 6.5 hrs",
        summary: "Ideal for moderate defects on daily drivers that need a serious refresh.",
        features: ["Paint readings + masking", "Cut/polish combo pass", "Interior express service", "Ceramic sealant upgrade available"]
      },
      {
        tier: "Correction",
        title: "Paint Correction (2-Step)",
        price: "$750",
        duration: "7.5 – 8.5 hrs",
        summary: "For darker finishes or vehicles requiring heavier correction before coating.",
        features: ["Compounding + finishing stages", "Panel wipe + inspection", "Wheel faces cleaned and prepped", "Includes silica sealant"]
      },
      {
        tier: "Coating",
        title: "Ceramic Coating",
        price: "+$1150",
        duration: "7 – 7.5 hrs",
        summary: "Durable ceramic upgrade applied after correction to lock in gloss for years.",
        features: ["2-6 year ceramic or graphene system", "Wheel and glass coating add-ons", "Cure monitoring + aftercare kit", "Annual inspection reminders"]
      }
    ];
    const addOns = [
      { title: "Headlight Restoration", description: "Wet-sand, polish, and UV seal for fogged lamps.", price: "$120" },
      { title: "Fabric Guard", description: "Hydrophobic coating keeps Oregon rain out of cloth seats.", price: "$95" },
      { title: "Pet Hair Package", description: "Specialized extraction after hikes and river trips.", price: "$80" },
      { title: "Fleet Maintenance", description: "Custom pricing for local businesses or boat tow rigs.", price: "Contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 px-6 py-16 sm:px-10" }, _attrs))}><section class="mx-auto max-w-5xl space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Services</p><h1 class="text-4xl font-semibold text-white">Tailored detailing programs for every finish.</h1><p class="text-lg text-slate-300"> Choose from curated packages or build a bespoke plan with our specialists. Pricing reflects most coupes and sedans—final quotes follow inspection. </p></section><section class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(packages, (servicePackage) => {
        _push(`<article class="glow-card flex flex-col rounded-3xl p-6"><div class="flex items-baseline justify-between"><span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">${ssrInterpolate(servicePackage.tier)}</span><span class="text-2xl font-semibold text-white">${ssrInterpolate(servicePackage.price)}</span></div><p class="text-xs uppercase tracking-[0.3em] text-slate-400">Time: ${ssrInterpolate(servicePackage.duration)}</p><h2 class="mt-4 text-2xl font-semibold text-white">${ssrInterpolate(servicePackage.title)}</h2><p class="mt-2 text-sm text-slate-300">${ssrInterpolate(servicePackage.summary)}</p><ul class="mt-4 space-y-2 text-sm text-slate-200"><!--[-->`);
        ssrRenderList(servicePackage.features, (item) => {
          _push(`<li>- ${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/booking",
          class: "mt-6 inline-flex justify-center rounded-full border border-brand-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary hover:bg-brand-primary hover:text-slate-950"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Book ${ssrInterpolate(servicePackage.title)}`);
            } else {
              return [
                createTextVNode(" Book " + toDisplayString(servicePackage.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></section><section class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2"><article class="glow-card rounded-3xl p-6"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Add-ons</p><div class="mt-4 grid gap-4 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(addOns, (addon) => {
        _push(`<div class="rounded-2xl border border-white/10 p-4"><h3 class="text-lg font-semibold text-white">${ssrInterpolate(addon.title)}</h3><p class="text-sm text-slate-300">${ssrInterpolate(addon.description)}</p><p class="mt-3 text-sm font-semibold text-brand-primary">${ssrInterpolate(addon.price)}</p></div>`);
      });
      _push(`<!--]--></div></article><article class="glow-card rounded-3xl p-6"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Process Breakdown</p><ol class="mt-4 space-y-4 text-sm text-slate-300"><li><span class="font-semibold text-white">01.</span> Pre-rinse with softened water and citrus foam dwell.</li><li><span class="font-semibold text-white">02.</span> Two-bucket contact wash, wheel decon, and iron removal.</li><li><span class="font-semibold text-white">03.</span> Paint inspection, tape masking, and machine polishing.</li><li><span class="font-semibold text-white">04.</span> Ceramic/graphene protection applied in controlled sections.</li><li><span class="font-semibold text-white">05.</span> Interior detail, steam sanitation, and fragrance-free finish.</li></ol></article></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=services-7iF3d2h6.js.map
