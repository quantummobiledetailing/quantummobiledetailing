import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderTeleport, ssrRenderStyle } from "vue/server-renderer";
const __vite_glob_0_0 = "" + __buildAssetsURL("10_Chevrolet_Silverado_Side_Driver.B5TnwsOc.png");
const __vite_glob_0_1 = "" + __buildAssetsURL("11_Chevrolet_Silverado_Scratch_Door.Vj-_gM5S.png");
const __vite_glob_0_2 = "" + __buildAssetsURL("12_Chevrolet_Silverado_Engine_Bay.B8w7krdL.png");
const __vite_glob_0_3 = "" + __buildAssetsURL("13_Chevrolet_Silverado_Gas_Cap.CFMyfuuz.png");
const __vite_glob_0_4 = "" + __buildAssetsURL("14_Chevrolet_Silverado_Driver_Seat.Cyg9QfDW.png");
const __vite_glob_0_5 = "" + __buildAssetsURL("15_Chevrolet_Silverado_Back_Seat.DT9htEfz.png");
const __vite_glob_0_6 = "" + __buildAssetsURL("16_Jeep_Liberty_driver.ByD_XI71.png");
const __vite_glob_0_7 = "" + __buildAssetsURL("17_Jeep_Liberty_trunk_open.DdvzTL_s.png");
const __vite_glob_0_8 = "" + __buildAssetsURL("18_Jeep_Liberty_floor_mat.CsXPH-0s.png");
const __vite_glob_0_9 = "" + __buildAssetsURL("19_Jeep_Liberty_seat_closeup.DSdjZ2Ra.png");
const __vite_glob_0_10 = "" + __buildAssetsURL("1_Subaru_Legacy_Hood.CiZqHJoN.png");
const __vite_glob_0_11 = "" + __buildAssetsURL("20_Jeep_Liberty_back.at9iaaY3.png");
const __vite_glob_0_12 = "" + __buildAssetsURL("21_Jeep_Liberty_passenger.Cmv1RLqx.png");
const __vite_glob_0_13 = "" + __buildAssetsURL("22_Jeep_Liberty_trunk_closed.adrdi3TO.png");
const __vite_glob_0_14 = "" + __buildAssetsURL("23_Subaru_Ascent_Front.DCn0nux9.png");
const __vite_glob_0_15 = "" + __buildAssetsURL("24_Subaru_Ascent_Side.D-2e_yY_.png");
const __vite_glob_0_16 = "" + __buildAssetsURL("25_Subaru_Forester_Back.CM0sH4Ht.png");
const __vite_glob_0_17 = "" + __buildAssetsURL("26_Subaru_Forester_Back_Seat.DecpOmAZ.png");
const __vite_glob_0_18 = "" + __buildAssetsURL("27_Subaru_Forester_Driver.YCnNUDuV.png");
const __vite_glob_0_19 = "" + __buildAssetsURL("28_Subaru_Forester_Driver_back.83LEvxFV.png");
const __vite_glob_0_20 = "" + __buildAssetsURL("29_Subaru_Forester_Trunk.SfQGkJnp.png");
const __vite_glob_0_21 = "" + __buildAssetsURL("2_Subaru_Legacy_Roof.Ct-7l7el.png");
const __vite_glob_0_22 = "" + __buildAssetsURL("30_Subaru_Forester_Dash.CcGpZJmq.png");
const __vite_glob_0_23 = "" + __buildAssetsURL("31_Volvo_SUV_Driver.slbQPS7Q.png");
const __vite_glob_0_24 = "" + __buildAssetsURL("32_Volvo_SUV_Side.Bn1fRQHk.png");
const __vite_glob_0_25 = "" + __buildAssetsURL("33_Volvo_SUV_Trunk.D0LepoZC.png");
const __vite_glob_0_26 = "" + __buildAssetsURL("34_Volvo_SUV_Headlight.DlpN0hEc.png");
const __vite_glob_0_27 = "" + __buildAssetsURL("35_Subaru_STI_Side.BlmuoxpH.png");
const __vite_glob_0_28 = "" + __buildAssetsURL("36_Subaru_STI_Back_Left.efBE2DbS.png");
const __vite_glob_0_29 = "" + __buildAssetsURL("37_Subaru_STI_Back_Right.ChjAXGh0.png");
const __vite_glob_0_30 = "" + __buildAssetsURL("38_Subaru_STI_Passenger.BpYh0BJR.png");
const __vite_glob_0_31 = "" + __buildAssetsURL("39_Subaru_STI_Trunk.CzWnayQb.png");
const __vite_glob_0_32 = "" + __buildAssetsURL("3_Subaru_Legacy_Console.DVQrnrvb.png");
const __vite_glob_0_33 = "" + __buildAssetsURL("40_Hyundai_Palisade_Front.DEf-fgB4.png");
const __vite_glob_0_34 = "" + __buildAssetsURL("41_Hyundai_Palisade_Side_Left.Bm_YmfTT.png");
const __vite_glob_0_35 = "" + __buildAssetsURL("42_Hyundai_Palisade_Side_Right.CTxfLPa7.png");
const __vite_glob_0_36 = "" + __buildAssetsURL("43_Hyundai_Palisade_Rear.CtZ8gbr7.png");
const __vite_glob_0_37 = "" + __buildAssetsURL("44_Hyundai_Palisade_Tire.CZcwFUhk.png");
const __vite_glob_0_38 = "" + __buildAssetsURL("45_GMC_Sierra_Front.gym1nhlN.png");
const __vite_glob_0_39 = "" + __buildAssetsURL("46_GMC_Sierra_Side.DxLPTM_M.png");
const __vite_glob_0_40 = "" + __buildAssetsURL("47_GMC_Sierra_Bed.CO45NHh0.png");
const __vite_glob_0_41 = "" + __buildAssetsURL("48_Ford_F350_Front.CSrH57J_.png");
const __vite_glob_0_42 = "" + __buildAssetsURL("49_Ford_F350_Side._pIBo0S7.png");
const __vite_glob_0_43 = "" + __buildAssetsURL("4_Subaru_Legacy_driver.ChRFtMpA.png");
const __vite_glob_0_44 = "" + __buildAssetsURL("50_Ford_F350_Bed.o-d3Ebqw.png");
const __vite_glob_0_45 = "" + __buildAssetsURL("51_Mazda_CX50_Front.DY3KKZhb.png");
const __vite_glob_0_46 = "" + __buildAssetsURL("52_Mazda_CX50_Side.Dn6Tudwj.png");
const __vite_glob_0_47 = "" + __buildAssetsURL("53_Mazda_CX50_Rear.DLR6TUYY.png");
const __vite_glob_0_48 = "" + __buildAssetsURL("54_Toyota_Yaris_Front.B0wsRFmm.png");
const __vite_glob_0_49 = "" + __buildAssetsURL("55_Toyota_Yaris_Rear.BFDmVUoH.png");
const __vite_glob_0_50 = "" + __buildAssetsURL("56_Dodge_Challenger_Dash.ugAkKOAH.png");
const __vite_glob_0_51 = "" + __buildAssetsURL("57_Dodge_Challenger_Driver.D-qFu_tk.png");
const __vite_glob_0_52 = "" + __buildAssetsURL("58_Dodge_Challenger_Front.CwZqsYFe.png");
const __vite_glob_0_53 = "" + __buildAssetsURL("59_Dodge_Challenger_Side.CjwNxGfn.png");
const __vite_glob_0_54 = "" + __buildAssetsURL("5_Subaru_Legacy_driver_door.D3tkVNTg.png");
const __vite_glob_0_55 = "" + __buildAssetsURL("6_Subaru_Legacy_passenger.BY8Xy1vd.png");
const __vite_glob_0_56 = "" + __buildAssetsURL("7_Subaru_Legacy_back.Bnk8U7F8.png");
const __vite_glob_0_57 = "" + __buildAssetsURL("8_Subaru_Legacy_trunk.CtdTkyT4.png");
const __vite_glob_0_58 = "" + __buildAssetsURL("9_Chevrolet_Silverado_Rear_Side.DuERJyTz.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryModules = /* @__PURE__ */ Object.assign({
      "/assets/gallery/10_Chevrolet_Silverado_Side_Driver.png": __vite_glob_0_0,
      "/assets/gallery/11_Chevrolet_Silverado_Scratch_Door.png": __vite_glob_0_1,
      "/assets/gallery/12_Chevrolet_Silverado_Engine_Bay.png": __vite_glob_0_2,
      "/assets/gallery/13_Chevrolet_Silverado_Gas_Cap.png": __vite_glob_0_3,
      "/assets/gallery/14_Chevrolet_Silverado_Driver_Seat.png": __vite_glob_0_4,
      "/assets/gallery/15_Chevrolet_Silverado_Back_Seat.png": __vite_glob_0_5,
      "/assets/gallery/16_Jeep_Liberty_driver.png": __vite_glob_0_6,
      "/assets/gallery/17_Jeep_Liberty_trunk_open.png": __vite_glob_0_7,
      "/assets/gallery/18_Jeep_Liberty_floor_mat.png": __vite_glob_0_8,
      "/assets/gallery/19_Jeep_Liberty_seat_closeup.png": __vite_glob_0_9,
      "/assets/gallery/1_Subaru_Legacy_Hood.png": __vite_glob_0_10,
      "/assets/gallery/20_Jeep_Liberty_back.png": __vite_glob_0_11,
      "/assets/gallery/21_Jeep_Liberty_passenger.png": __vite_glob_0_12,
      "/assets/gallery/22_Jeep_Liberty_trunk_closed.png": __vite_glob_0_13,
      "/assets/gallery/23_Subaru_Ascent_Front.png": __vite_glob_0_14,
      "/assets/gallery/24_Subaru_Ascent_Side.png": __vite_glob_0_15,
      "/assets/gallery/25_Subaru_Forester_Back.png": __vite_glob_0_16,
      "/assets/gallery/26_Subaru_Forester_Back_Seat.png": __vite_glob_0_17,
      "/assets/gallery/27_Subaru_Forester_Driver.png": __vite_glob_0_18,
      "/assets/gallery/28_Subaru_Forester_Driver_back.png": __vite_glob_0_19,
      "/assets/gallery/29_Subaru_Forester_Trunk.png": __vite_glob_0_20,
      "/assets/gallery/2_Subaru_Legacy_Roof.png": __vite_glob_0_21,
      "/assets/gallery/30_Subaru_Forester_Dash.png": __vite_glob_0_22,
      "/assets/gallery/31_Volvo_SUV_Driver.png": __vite_glob_0_23,
      "/assets/gallery/32_Volvo_SUV_Side.png": __vite_glob_0_24,
      "/assets/gallery/33_Volvo_SUV_Trunk.png": __vite_glob_0_25,
      "/assets/gallery/34_Volvo_SUV_Headlight.png": __vite_glob_0_26,
      "/assets/gallery/35_Subaru_STI_Side.png": __vite_glob_0_27,
      "/assets/gallery/36_Subaru_STI_Back_Left.png": __vite_glob_0_28,
      "/assets/gallery/37_Subaru_STI_Back_Right.png": __vite_glob_0_29,
      "/assets/gallery/38_Subaru_STI_Passenger.png": __vite_glob_0_30,
      "/assets/gallery/39_Subaru_STI_Trunk.png": __vite_glob_0_31,
      "/assets/gallery/3_Subaru_Legacy_Console.png": __vite_glob_0_32,
      "/assets/gallery/40_Hyundai_Palisade_Front.png": __vite_glob_0_33,
      "/assets/gallery/41_Hyundai_Palisade_Side_Left.png": __vite_glob_0_34,
      "/assets/gallery/42_Hyundai_Palisade_Side_Right.png": __vite_glob_0_35,
      "/assets/gallery/43_Hyundai_Palisade_Rear.png": __vite_glob_0_36,
      "/assets/gallery/44_Hyundai_Palisade_Tire.png": __vite_glob_0_37,
      "/assets/gallery/45_GMC_Sierra_Front.png": __vite_glob_0_38,
      "/assets/gallery/46_GMC_Sierra_Side.png": __vite_glob_0_39,
      "/assets/gallery/47_GMC_Sierra_Bed.png": __vite_glob_0_40,
      "/assets/gallery/48_Ford_F350_Front.png": __vite_glob_0_41,
      "/assets/gallery/49_Ford_F350_Side.png": __vite_glob_0_42,
      "/assets/gallery/4_Subaru_Legacy_driver.png": __vite_glob_0_43,
      "/assets/gallery/50_Ford_F350_Bed.png": __vite_glob_0_44,
      "/assets/gallery/51_Mazda_CX50_Front.png": __vite_glob_0_45,
      "/assets/gallery/52_Mazda_CX50_Side.png": __vite_glob_0_46,
      "/assets/gallery/53_Mazda_CX50_Rear.png": __vite_glob_0_47,
      "/assets/gallery/54_Toyota_Yaris_Front.png": __vite_glob_0_48,
      "/assets/gallery/55_Toyota_Yaris_Rear.png": __vite_glob_0_49,
      "/assets/gallery/56_Dodge_Challenger_Dash.png": __vite_glob_0_50,
      "/assets/gallery/57_Dodge_Challenger_Driver.png": __vite_glob_0_51,
      "/assets/gallery/58_Dodge_Challenger_Front.png": __vite_glob_0_52,
      "/assets/gallery/59_Dodge_Challenger_Side.png": __vite_glob_0_53,
      "/assets/gallery/5_Subaru_Legacy_driver_door.png": __vite_glob_0_54,
      "/assets/gallery/6_Subaru_Legacy_passenger.png": __vite_glob_0_55,
      "/assets/gallery/7_Subaru_Legacy_back.png": __vite_glob_0_56,
      "/assets/gallery/8_Subaru_Legacy_trunk.png": __vite_glob_0_57,
      "/assets/gallery/9_Chevrolet_Silverado_Rear_Side.png": __vite_glob_0_58
    });
    const extractOrder = (filePath) => {
      const filename = filePath.split("/").pop() ?? "";
      const match = filename.match(/^\d+/);
      return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
    };
    const shots = Object.entries(galleryModules).sort(([pathA], [pathB]) => extractOrder(pathA) - extractOrder(pathB)).map(([path, src]) => {
      const filename = path.split("/").pop() ?? "Gallery Image";
      const baseName = filename.replace(/\.[^/.]+$/, "");
      const prettyTitle = baseName.replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
      return {
        title: prettyTitle,
        image: src
      };
    });
    const activeShot = ref(null);
    const showPhone = ref(false);
    const copied = ref(false);
    const zoom = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 px-6 py-16 sm:px-10" }, _attrs))}><section class="mx-auto max-w-5xl space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Gallery</p><h1 class="text-4xl font-semibold text-white">Recent transformations across Saint Helens &amp; the Oregon Northwest.</h1><p class="text-lg text-slate-300">Swipe through favorite projects that show correction depth, coating clarity, and interior resets after rainy commutes or coastal adventures.</p></section><section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(shots), (shot) => {
        _push(`<article class="glow-card overflow-hidden rounded-3xl"><button type="button" class="group block w-full text-left"><div class="relative h-48 w-full overflow-hidden"><img${ssrRenderAttr("src", shot.image)}${ssrRenderAttr("alt", shot.title)} class="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy"><div class="pointer-events-none absolute inset-0 bg-slate-950/10"></div></div><div class="p-5"><h3 class="text-lg font-semibold text-white">${ssrInterpolate(shot.title)}</h3></div></button></article>`);
      });
      _push(`<!--]--></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(activeShot)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"><button type="button" class="absolute right-6 top-6 rounded-full border border-white/30 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white"> Close </button><div class="max-h-[85vh] w-full max-w-5xl overflow-auto"><img${ssrRenderAttr("src", unref(activeShot).image)}${ssrRenderAttr("alt", unref(activeShot).title)} class="h-full w-full origin-center rounded-2xl object-contain shadow-2xl transition-transform duration-150" style="${ssrRenderStyle({ transform: `scale(${unref(zoom)})` })}"></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<section class="mx-auto max-w-5xl rounded-3xl border border-brand-primary/40 bg-slate-900/40 p-8 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Follow Along</p><h2 class="mt-3 text-3xl font-semibold text-white">See more Northwest builds on Instagram @QuantumDetailing</h2><p class="mt-2 text-sm text-slate-300">Ready for your vehicle to make the next before-and-after? We come to you anywhere in Columbia County.</p><button type="button" class="mt-6 btn-primary">Call For Your Transformation</button></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(showPhone)) {
          _push2(`<div class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"><div class="drip-panel relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-primary/30 bg-slate-950 p-8 shadow-xl"><div class="flex items-center justify-between"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Call Or Text</p><button type="button" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-slate-200 transition hover:border-brand-primary hover:text-brand-primary" aria-label="Close phone window"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6l-12 12"></path></svg></button></div><p class="mt-4 text-center text-3xl font-bold text-white drip-text"> (541) 501-0698 </p><p class="mt-2 text-center text-sm text-slate-400">Tap the number to copy or call from your phone.</p><div class="mt-6 flex flex-col gap-3"><button class="btn-primary justify-center" type="button"> Copy Number </button><a href="tel:+15415010698" class="btn-outline justify-center">Call Now</a></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=gallery-C0dZ1lFl.js.map
