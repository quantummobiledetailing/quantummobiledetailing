import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
const __vite_glob_0_0 = "" + __buildAssetsURL("1_Subaru_Legacy_back.Bnk8U7F8.png");
const __vite_glob_0_1 = "" + __buildAssetsURL("1_Subaru_Legacy_console.DVQrnrvb.png");
const __vite_glob_0_2 = "" + __buildAssetsURL("1_Subaru_Legacy_driver.ChRFtMpA.png");
const __vite_glob_0_3 = "" + __buildAssetsURL("1_Subaru_Legacy_driver_door.D3tkVNTg.png");
const __vite_glob_0_4 = "" + __buildAssetsURL("1_Subaru_Legacy_hood.CiZqHJoN.png");
const __vite_glob_0_5 = "" + __buildAssetsURL("1_Subaru_Legacy_passenger.BY8Xy1vd.png");
const __vite_glob_0_6 = "" + __buildAssetsURL("1_Subaru_Legacy_top.Ct-7l7el.png");
const __vite_glob_0_7 = "" + __buildAssetsURL("1_Subaru_Legacy_trunk.CtdTkyT4.png");
const __vite_glob_0_8 = "" + __buildAssetsURL("2_Jeep_back.at9iaaY3.png");
const __vite_glob_0_9 = "" + __buildAssetsURL("2_Jeep_driver.ByD_XI71.png");
const __vite_glob_0_10 = "" + __buildAssetsURL("2_Jeep_floor_mat.CsXPH-0s.png");
const __vite_glob_0_11 = "" + __buildAssetsURL("2_Jeep_passenger.Cmv1RLqx.png");
const __vite_glob_0_12 = "" + __buildAssetsURL("2_Jeep_seat_closeup.DSdjZ2Ra.png");
const __vite_glob_0_13 = "" + __buildAssetsURL("2_Jeep_trunk.DdvzTL_s.png");
const __vite_glob_0_14 = "" + __buildAssetsURL("2_Jeep_trunk_2.adrdi3TO.png");
const __vite_glob_0_15 = "" + __buildAssetsURL("Ascent_Front.DCn0nux9.png");
const __vite_glob_0_16 = "" + __buildAssetsURL("Ascent_Side.D-2e_yY_.png");
const __vite_glob_0_17 = "" + __buildAssetsURL("Challenger_Driver_Seat.D-qFu_tk.png");
const __vite_glob_0_18 = "" + __buildAssetsURL("Challenger_Driver_Side.CjwNxGfn.png");
const __vite_glob_0_19 = "" + __buildAssetsURL("Challenger_Front.CwZqsYFe.png");
const __vite_glob_0_20 = "" + __buildAssetsURL("Challenger_Steering_Wheel.ugAkKOAH.png");
const __vite_glob_0_21 = "" + __buildAssetsURL("Cody_back.BFDmVUoH.png");
const __vite_glob_0_22 = "" + __buildAssetsURL("Cody_front.B0wsRFmm.png");
const __vite_glob_0_23 = "" + __buildAssetsURL("Ford_Truck_Bed.o-d3Ebqw.png");
const __vite_glob_0_24 = "" + __buildAssetsURL("Ford_Truck_Front.CSrH57J_.png");
const __vite_glob_0_25 = "" + __buildAssetsURL("Ford_Truck_Side._pIBo0S7.png");
const __vite_glob_0_26 = "" + __buildAssetsURL("GMC_Truck_Bed.CO45NHh0.png");
const __vite_glob_0_27 = "" + __buildAssetsURL("GMC_Truck_Front.gym1nhlN.png");
const __vite_glob_0_28 = "" + __buildAssetsURL("GMC_Truck_Side.DxLPTM_M.png");
const __vite_glob_0_29 = "" + __buildAssetsURL("Mazda_back.DLR6TUYY.png");
const __vite_glob_0_30 = "" + __buildAssetsURL("Mazda_front.DY3KKZhb.png");
const __vite_glob_0_31 = "" + __buildAssetsURL("Mazda_side.Dn6Tudwj.png");
const __vite_glob_0_32 = "" + __buildAssetsURL("Palidsade_Back.CtZ8gbr7.png");
const __vite_glob_0_33 = "" + __buildAssetsURL("Palisade_Front.DEf-fgB4.png");
const __vite_glob_0_34 = "" + __buildAssetsURL("Palisade_Side.Bm_YmfTT.png");
const __vite_glob_0_35 = "" + __buildAssetsURL("Palisade_Side_2.CTxfLPa7.png");
const __vite_glob_0_36 = "" + __buildAssetsURL("Palisade_Tire.CZcwFUhk.png");
const __vite_glob_0_37 = "" + __buildAssetsURL("Subaru_Back.efBE2DbS.png");
const __vite_glob_0_38 = "" + __buildAssetsURL("Subaru_Back_2.ChjAXGh0.png");
const __vite_glob_0_39 = "" + __buildAssetsURL("Subaru_Driver_Side.BlmuoxpH.png");
const __vite_glob_0_40 = "" + __buildAssetsURL("Subaru_Passenger.BpYh0BJR.png");
const __vite_glob_0_41 = "" + __buildAssetsURL("Subaru_Trunk.CzWnayQb.png");
const __vite_glob_0_42 = "" + __buildAssetsURL("Volvo_Back.D0LepoZC.png");
const __vite_glob_0_43 = "" + __buildAssetsURL("Volvo_Corner.DlpN0hEc.png");
const __vite_glob_0_44 = "" + __buildAssetsURL("Volvo_Passenger.slbQPS7Q.png");
const __vite_glob_0_45 = "" + __buildAssetsURL("Volvo_Side.Bn1fRQHk.png");
const __vite_glob_0_46 = "" + __buildAssetsURL("forester_back_foot.CM0sH4Ht.png");
const __vite_glob_0_47 = "" + __buildAssetsURL("forester_back_seat.DecpOmAZ.png");
const __vite_glob_0_48 = "" + __buildAssetsURL("forester_driver.YCnNUDuV.png");
const __vite_glob_0_49 = "" + __buildAssetsURL("forester_driver_back.83LEvxFV.png");
const __vite_glob_0_50 = "" + __buildAssetsURL("forester_rear.SfQGkJnp.png");
const __vite_glob_0_51 = "" + __buildAssetsURL("forester_steering_wheel.CcGpZJmq.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryModules = /* @__PURE__ */ Object.assign({
      "/assets/gallery/1_Subaru_Legacy_back.png": __vite_glob_0_0,
      "/assets/gallery/1_Subaru_Legacy_console.png": __vite_glob_0_1,
      "/assets/gallery/1_Subaru_Legacy_driver.png": __vite_glob_0_2,
      "/assets/gallery/1_Subaru_Legacy_driver_door.png": __vite_glob_0_3,
      "/assets/gallery/1_Subaru_Legacy_hood.png": __vite_glob_0_4,
      "/assets/gallery/1_Subaru_Legacy_passenger.png": __vite_glob_0_5,
      "/assets/gallery/1_Subaru_Legacy_top.png": __vite_glob_0_6,
      "/assets/gallery/1_Subaru_Legacy_trunk.png": __vite_glob_0_7,
      "/assets/gallery/2_Jeep_back.png": __vite_glob_0_8,
      "/assets/gallery/2_Jeep_driver.png": __vite_glob_0_9,
      "/assets/gallery/2_Jeep_floor_mat.png": __vite_glob_0_10,
      "/assets/gallery/2_Jeep_passenger.png": __vite_glob_0_11,
      "/assets/gallery/2_Jeep_seat_closeup.png": __vite_glob_0_12,
      "/assets/gallery/2_Jeep_trunk.png": __vite_glob_0_13,
      "/assets/gallery/2_Jeep_trunk_2.png": __vite_glob_0_14,
      "/assets/gallery/Ascent_Front.png": __vite_glob_0_15,
      "/assets/gallery/Ascent_Side.png": __vite_glob_0_16,
      "/assets/gallery/Challenger_Driver_Seat.png": __vite_glob_0_17,
      "/assets/gallery/Challenger_Driver_Side.png": __vite_glob_0_18,
      "/assets/gallery/Challenger_Front.png": __vite_glob_0_19,
      "/assets/gallery/Challenger_Steering_Wheel.png": __vite_glob_0_20,
      "/assets/gallery/Cody_back.png": __vite_glob_0_21,
      "/assets/gallery/Cody_front.png": __vite_glob_0_22,
      "/assets/gallery/Ford_Truck_Bed.png": __vite_glob_0_23,
      "/assets/gallery/Ford_Truck_Front.png": __vite_glob_0_24,
      "/assets/gallery/Ford_Truck_Side.png": __vite_glob_0_25,
      "/assets/gallery/GMC_Truck_Bed.png": __vite_glob_0_26,
      "/assets/gallery/GMC_Truck_Front.png": __vite_glob_0_27,
      "/assets/gallery/GMC_Truck_Side.png": __vite_glob_0_28,
      "/assets/gallery/Mazda_back.png": __vite_glob_0_29,
      "/assets/gallery/Mazda_front.png": __vite_glob_0_30,
      "/assets/gallery/Mazda_side.png": __vite_glob_0_31,
      "/assets/gallery/Palidsade_Back.png": __vite_glob_0_32,
      "/assets/gallery/Palisade_Front.png": __vite_glob_0_33,
      "/assets/gallery/Palisade_Side.png": __vite_glob_0_34,
      "/assets/gallery/Palisade_Side_2.png": __vite_glob_0_35,
      "/assets/gallery/Palisade_Tire.png": __vite_glob_0_36,
      "/assets/gallery/Subaru_Back.png": __vite_glob_0_37,
      "/assets/gallery/Subaru_Back_2.png": __vite_glob_0_38,
      "/assets/gallery/Subaru_Driver_Side.png": __vite_glob_0_39,
      "/assets/gallery/Subaru_Passenger.png": __vite_glob_0_40,
      "/assets/gallery/Subaru_Trunk.png": __vite_glob_0_41,
      "/assets/gallery/Volvo_Back.png": __vite_glob_0_42,
      "/assets/gallery/Volvo_Corner.png": __vite_glob_0_43,
      "/assets/gallery/Volvo_Passenger.png": __vite_glob_0_44,
      "/assets/gallery/Volvo_Side.png": __vite_glob_0_45,
      "/assets/gallery/forester_back_foot.png": __vite_glob_0_46,
      "/assets/gallery/forester_back_seat.png": __vite_glob_0_47,
      "/assets/gallery/forester_driver.png": __vite_glob_0_48,
      "/assets/gallery/forester_driver_back.png": __vite_glob_0_49,
      "/assets/gallery/forester_rear.png": __vite_glob_0_50,
      "/assets/gallery/forester_steering_wheel.png": __vite_glob_0_51
    });
    const shots = Object.entries(galleryModules).map(([path, src]) => {
      const filename = path.split("/").pop() ?? "Gallery Image";
      const baseName = filename.replace(/\.[^/.]+$/, "");
      const prettyTitle = baseName.replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
      return {
        title: prettyTitle,
        description: "Captured on-site across Saint Helens and the Oregon Northwest.",
        image: src
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-16 px-6 py-16 sm:px-10" }, _attrs))}><section class="mx-auto max-w-5xl space-y-4 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Gallery</p><h1 class="text-4xl font-semibold text-white">Recent transformations across Saint Helens &amp; the Oregon Northwest.</h1><p class="text-lg text-slate-300">Swipe through favorite projects that show correction depth, coating clarity, and interior resets after rainy commutes or coastal adventures.</p></section><section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(shots), (shot) => {
        _push(`<article class="glow-card overflow-hidden rounded-3xl"><div class="h-48 w-full bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url(${shot.image})` })}"></div><div class="p-5"><h3 class="text-lg font-semibold text-white">${ssrInterpolate(shot.title)}</h3><p class="mt-2 text-sm text-slate-300">${ssrInterpolate(shot.description)}</p></div></article>`);
      });
      _push(`<!--]--></section><section class="mx-auto max-w-5xl rounded-3xl border border-brand-primary/40 bg-slate-900/40 p-8 text-center"><p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Follow Along</p><h2 class="mt-3 text-3xl font-semibold text-white">See more Northwest builds on Instagram @QuantumDetailing</h2><p class="mt-2 text-sm text-slate-300">Ready for your vehicle to make the next before-and-after? We come to you anywhere in Columbia County.</p><a href="tel:+15415010698" class="mt-6 btn-primary">Call For Your Transformation</a></section></main>`);
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
//# sourceMappingURL=gallery-BJEyDf-6.js.map
