import { defineComponent, ref, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderTeleport } from 'file://C:/Users/ryand/quantummobiledetailing/quantummobiledetailing/node_modules/vue/server-renderer/index.mjs';
import { C as ClipboardDocumentListIcon, T as TruckIcon, S as SparklesIcon } from './TruckIcon-CpaYUs5V.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const showPhone = ref(false);
    const activePackage = ref(null);
    const copied = ref(false);
    const packages = [
      {
        tier: "Full Service",
        title: "Interior & Exterior Detail",
        price: "$250",
        duration: "4 - 4.5 hrs",
        summary: "Our most popular Saint Helens package for reviving daily drivers inside and out.",
        features: [
          "Two-step wash with no-touch pre-rinse and hand dry",
          "Surface clay treatment removes contaminants",
          "Wheel, tire, and trim deep clean with dressing",
          "Declutter, vacuum, plastics/leather care, glass",
          "Paint sealant for 6-month protection"
        ]
      },
      {
        tier: "Exterior Only",
        title: "Exterior Detail",
        price: "$130",
        duration: "1.5 - 2 hrs",
        summary: "Focused exterior refresh that removes Oregon road film and protects against rain.",
        features: [
          "No-touch wash + meticulous hand wash and towel dry",
          "Surface clay treatment + contaminant removal",
          "Wheel, tire, and trim cleaning with dressing",
          "6-month synthetic sealant for shine and durability"
        ]
      },
      {
        tier: "Interior Only",
        title: "Interior Detail",
        price: "$160",
        duration: "2 - 2.5 hrs",
        summary: "Deep interior cleanse ideal after road trips, pets, or wet-weather commutes.",
        features: [
          "Declutter, trash removal, and full vacuum",
          "Floor mat care, carpet brushing, pedal cleaning",
          "Dash, vents, plastics, leather, headliner spot treatment",
          "Glass cleaning and final scent"
        ]
      },
      {
        tier: "Gloss Boost",
        title: "Paint Enhancement",
        price: "$350",
        duration: "4.5 - 5 hrs",
        summary: "Single-stage polish to brighten dull paint before the next rainy season.",
        features: [
          "Exterior detail with two-step wash + towel dry",
          "Surface clay treatment to remove bonded contaminants",
          "Single-stage finish polish to remove light swirls",
          "Trim revival and 6-month sealant"
        ]
      },
      {
        tier: "Correction",
        title: "Paint Correction (1-Step)",
        price: "$550",
        duration: "6 - 6.5 hrs",
        summary: "Ideal for moderate defects on daily drivers that need a serious refresh.",
        features: [
          "Exterior detail plus cutting and finish polish stages",
          "Removes swirls & minor clear-coat scratches",
          "Includes touch-up of interior surfaces",
          "Ready for sealant or coating add-ons"
        ]
      },
      {
        tier: "Correction",
        title: "Paint Correction (2-Step)",
        price: "$750",
        duration: "7.5 - 8.5 hrs",
        summary: "For darker finishes or vehicles requiring heavier correction before coating.",
        features: [
          "Exterior detail + deep cut, cutting, and finish polish",
          "Corrects deep swirls and prepares for coating",
          "Panel wipe and inspection before protection",
          "Includes paint sealant or coating prep"
        ]
      }
    ];
    const ceramicPackage = {
      tier: "Coating",
      title: "Ceramic Coating",
      price: "$1000",
      duration: "8.5 - 10 hrs",
      summary: "Three-year ceramic coating applied after correction to lock in gloss.",
      features: [
        "Exterior detail plus two-step correction",
        "3-year ceramic coating on paint",
        "Wheel + glass coating add-ons",
        "Aftercare kit and cure monitoring guidance"
      ]
    };
    const addOns = [
      { title: "Headlight Restoration", description: "Wet-sand, polish, and UV seal for fogged lamps.", price: "$100" },
      {
        title: "Engine Bay Cleaning",
        description: "Degrease plastics, dress hoses, and leave the bay show-ready before you pop the hood.",
        price: "$100"
      },
      { title: "Seat Shampoo", description: "Hot-water extraction lifts spills and refreshes cloth seating surfaces.", price: "$80" },
      { title: "Pet Hair Package", description: "Specialized extraction after hikes and river trips.", price: "$80" },
      { title: "Fleet Maintenance", description: "Custom pricing for local businesses or boat tow rigs.", price: "Contact" }
    ];
    const detailSections = [
      {
        title: "Interior Detailing Includes",
        icon: ClipboardDocumentListIcon,
        items: [
          { title: "Declutter & Remove Trash", description: "Clear personal items and garbage for a fresh start." },
          { title: "Floor Mat Care", description: "Remove, clean, and restore mats to like-new condition." },
          { title: "Interior Dusting", description: "Dash, vents, seats, and floors receive gentle dust removal." },
          { title: "Door & Trunk Jamb Cleaning", description: "Clean and protect the edges and seals." },
          { title: "Headliner Spot Cleaning", description: "Careful fabric treatment to lift isolated marks." },
          { title: "Full Interior Vacuum", description: "Seats, floors, and trunk thoroughly vacuumed." },
          { title: "Plastics & Leather Care", description: "Clean and protect every surface with the right chemistry." },
          { title: "Fabric & Seat Protection", description: "Deep clean textiles and apply protective barriers." },
          { title: "Pedal Cleaning", description: "Brush and wipe pedal assemblies for a crisp feel." },
          { title: "Carpet Care", description: "Agitate and treat carpets to extract grime and odors." },
          { title: "Glass Cleaning", description: "Crystal-clear windows, mirrors, and screens." },
          { title: "Final Touch", description: "Vacuum touch-up plus a fragrance-free air refresh." }
        ]
      },
      {
        title: "Exterior Detailing Includes",
        icon: TruckIcon,
        items: [
          { title: "Two-Step Wash", description: "No-touch pre-rinse followed by a meticulous hand wash." },
          { title: "Towel Dry", description: "Lint-free drying leaves a spotless finish." },
          { title: "Surface Clay Treatment", description: "Removes embedded contaminants and minor defects." },
          {
            title: "Paint Sealant Protection",
            description: "Six-month synthetic sealant that locks in shine and durability."
          }
        ]
      },
      {
        title: "Paint Services Include",
        icon: SparklesIcon,
        items: [
          {
            title: "Paint Enhancement",
            description: "Exterior Detail plus a 1-step finish polish to remove swirls and revive gloss."
          },
          {
            title: "Paint Correction (1-Step)",
            description: "Exterior Detail plus cutting and finish polishes to clear swirls and light scratches."
          },
          {
            title: "Paint Correction (2-Step)",
            description: "Exterior Detail plus deep cut, cutting, and finish polishes for near-perfect clarity."
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 px-6 py-16 sm:px-10" }, _attrs))}><section class="mx-auto max-w-5xl space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Services</p><h1 class="text-4xl font-semibold text-white">Tailored detailing programs for every finish.</h1><p class="text-lg text-slate-300"> Choose from curated packages or build a bespoke plan with our specialists. Pricing reflects most coupes and sedans\xE2\u20AC\u201Dfinal quotes follow inspection. </p></section><section class="mx-auto max-w-6xl space-y-6"><div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(packages, (servicePackage) => {
        _push(`<article class="glow-card flex h-full flex-col rounded-3xl p-6"><div class="flex items-start justify-between gap-4"><span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">${ssrInterpolate(servicePackage.tier)}</span><div class="text-right"><p class="text-[10px] uppercase tracking-[0.3em] text-slate-500">Starts at</p><p class="text-2xl font-semibold text-white">${ssrInterpolate(servicePackage.price)}+</p></div></div><p class="text-xs uppercase tracking-[0.3em] text-slate-400">Time: ${ssrInterpolate(servicePackage.duration)}</p><h2 class="mt-4 text-2xl font-semibold text-white">${ssrInterpolate(servicePackage.title)}</h2><p class="mt-2 text-sm text-slate-300">${ssrInterpolate(servicePackage.summary)}</p><ul class="mt-4 space-y-2 text-sm text-slate-200"><!--[-->`);
        ssrRenderList(servicePackage.features, (item) => {
          _push(`<li>- ${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul><button type="button" class="mt-6 btn-outline text-center"> Call About ${ssrInterpolate(servicePackage.title)}</button></article>`);
      });
      _push(`<!--]--></div><div class="grid gap-6 lg:grid-cols-3"><article class="glow-card flex h-full flex-col rounded-3xl p-6"><div class="flex items-start justify-between gap-4"><span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">${ssrInterpolate(ceramicPackage.tier)}</span><div class="text-right"><p class="text-[10px] uppercase tracking-[0.3em] text-slate-500">Starts at</p><p class="text-2xl font-semibold text-white">${ssrInterpolate(ceramicPackage.price)}+</p></div></div><p class="text-xs uppercase tracking-[0.3em] text-slate-400">Time: ${ssrInterpolate(ceramicPackage.duration)}</p><h2 class="mt-4 text-2xl font-semibold text-white">${ssrInterpolate(ceramicPackage.title)}</h2><p class="mt-2 text-sm text-slate-300">${ssrInterpolate(ceramicPackage.summary)}</p><ul class="mt-4 space-y-2 text-sm text-slate-200"><!--[-->`);
      ssrRenderList(ceramicPackage.features, (item) => {
        _push(`<li>- ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><button type="button" class="mt-6 btn-outline text-center"> Call About ${ssrInterpolate(ceramicPackage.title)}</button></article><article class="glow-card flex h-full flex-col rounded-3xl p-6 lg:col-span-2"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Add-ons</p><div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(addOns, (addon) => {
        _push(`<div class="rounded-2xl border border-white/10 p-4"><h3 class="text-lg font-semibold text-white">${ssrInterpolate(addon.title)}</h3><p class="text-sm text-slate-300">${ssrInterpolate(addon.description)}</p><p class="mt-3 text-sm font-semibold text-brand-primary">${ssrInterpolate(addon.price)}</p></div>`);
      });
      _push(`<!--]--></div></article></div></section><section class="mx-auto max-w-6xl"><article class="glow-card rounded-3xl p-6"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Process Breakdown</p><div class="mt-6 grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(detailSections, (section) => {
        _push(`<div class="rounded-2xl border border-white/10 p-4"><div class="flex items-center gap-3">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(section.icon), {
          class: "h-6 w-6 text-brand-primary",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`<h3 class="text-lg font-semibold text-white">${ssrInterpolate(section.title)}</h3></div><ul class="mt-4 space-y-3 text-sm text-slate-300"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<li class="border-l border-brand-primary/40 pl-3"><p class="font-semibold text-white">${ssrInterpolate(item.title)}</p><p class="text-xs text-slate-400">${ssrInterpolate(item.description)}</p></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></article></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(showPhone)) {
          _push2(`<div class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"><div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-primary/30 bg-slate-950 p-8 shadow-xl"><button class="absolute right-4 top-4 text-slate-400 hover:text-white" aria-label="Close phone window"> \xD7 </button><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Call Or Text</p><p class="mt-4 text-center text-3xl font-bold drip-text">(541) 501-0698</p><p class="mt-2 text-center text-sm text-slate-400"> Mention &quot;${ssrInterpolate(unref(activePackage))}&quot; so we can prep the right tools. </p><div class="mt-6 flex flex-col gap-3"><button type="button" class="btn-primary justify-center">Copy Number</button><a href="tel:+15415010698" class="btn-outline justify-center">Call Now</a></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-CQtkBT1j.mjs.map
