<template>
  <main class="space-y-16 pb-16">
    <section class="relative overflow-hidden px-6 py-20 sm:px-10 reveal" data-reveal>
      <div class="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div class="space-y-6 text-center lg:text-left">
          <div class="flex justify-center">
            <img src="/images/logo-watermark.png" alt="Quantum Mobile Detailing logo" class="h-64 w-auto max-w-sm sm:max-w-md" />
          </div>
          <p class="text-sm uppercase tracking-[0.4em] text-brand-primary/80">Saint Helens ƒ?› Oregon Northwest</p>
          <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Mobile Detailing with Quantum Level Precision
          </h1>
          <p class="text-lg text-slate-300">
            Offering the ultimate convenience in NW Oregon, we come to you! Interior/exterior detailing and paint correction. We carry premium products such as P&S liquids, The Rag Company towels, and every tool needed to get the job done. Call now and let's get your baby cleaned!
          </p>
          <div class="flex flex-wrap justify-center gap-4 lg:justify-start">
            <button type="button" @click="showPhone = true" class="btn-primary">Call Or Text</button>
            <NuxtLink to="/services" class="btn-outline">View Services</NuxtLink>
          </div>
        </div>
        <div class="grid flex-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="(stat, index) in heroStats"
            :key="stat.label"
            class="glow-card card-hover rounded-3xl px-6 py-6 text-left reveal"
            data-reveal
            :data-reveal-delay="index * 80"
          >
            <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">{{ stat.label }}</p>
            <p class="mt-3 text-3xl font-semibold text-white sm:text-4xl">{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 sm:px-10 reveal" data-reveal>
      <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="glow-card card-hover rounded-3xl p-6 reveal"
          data-reveal
          :data-reveal-delay="index * 80"
        >
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <component
              :is="feature.icon"
              class="h-6 w-6 text-brand-primary"
              aria-hidden="true"
            />
            <span class="sr-only">{{ feature.iconLabel }}</span>
          </div>
          <h3 class="text-xl font-semibold text-white">{{ feature.title }}</h3>
          <p class="mt-3 text-sm text-slate-300">{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="bg-slate-900/40 px-6 py-16 sm:px-10 reveal" data-reveal>
      <div class="mx-auto max-w-6xl space-y-10">
        <header class="space-y-4 text-center">
          <div class="flex items-center justify-center gap-2 text-brand-primary/80">
            <SparklesIcon class="accent-spark h-4 w-4" aria-hidden="true" />
            <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Signature Packages</p>
          </div>
          <h2 class="text-3xl font-semibold text-white">Hand-crafted plans to fit every finish</h2>
          <p class="text-slate-300">Each package is tailored during your consultation, balancing your driving habits, vehicle type, and aftercare goals.</p>
        </header>
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(service, index) in services"
            :key="service.tier"
            class="glow-card card-hover flex flex-col rounded-3xl p-6 reveal"
            data-reveal
            :data-reveal-delay="index * 80"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">{{ service.tier }}</span>
              <div class="text-right">
                <p class="text-[10px] uppercase tracking-[0.3em] text-slate-500">Starts at</p>
                <p class="text-lg font-semibold text-white">{{ service.price }}+</p>
              </div>
            </div>
            <h3 class="mt-4 text-2xl font-semibold text-white">{{ service.title }}</h3>
            <p class="mt-2 text-sm text-slate-300">{{ service.description }}</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-200">
              <li v-for="perk in service.perks" :key="perk">- {{ perk }}</li>
            </ul>
            <a href="tel:+15415010698" class="mt-6 inline-flex justify-center rounded-full border border-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent hover:bg-brand-primary hover:text-black">
              Call To Book
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="px-6 sm:px-10 reveal" data-reveal>
      <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <article class="glow-card card-hover rounded-3xl p-6 reveal" data-reveal>
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Testimonials</p>
          <h3 class="mt-3 text-2xl font-semibold text-white">Clients trust us with their daily drivers and collectibles.</h3>
          <div class="mt-6 max-h-72 space-y-6 overflow-y-auto pr-2">
            <figure v-for="testimonial in testimonials" :key="testimonial.name" class="border-l border-brand-primary/40 pl-4">
              <blockquote class="text-sm text-slate-300">"{{ testimonial.quote }}"</blockquote>
              <figcaption class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">{{ testimonial.name }}</figcaption>
            </figure>
          </div>
        </article>
        <article class="glow-card card-hover rounded-3xl p-6 reveal" data-reveal data-reveal-delay="120">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Coverage Area</p>
          <h3 class="mt-3 text-2xl font-semibold text-white">Proudly serving Saint Helens, Scappoose, Rainier, and the greater Oregon Northwest.</h3>
          <p class="mt-3 text-sm text-slate-300">
            We bring the tools, set up canopies, and tap into your available water and electrical outlets so detailing stays on schedule through rain, pollen, and chilly mornings.
          </p>
          <p class="mt-3 text-sm text-slate-300">
            Columbia County routes keep travel fees minimal, but we routinely head into Portland, Vancouver, and coastal towns when we negotiate fair trip pricing during your estimate.
          </p>
          <p class="mt-3 text-sm text-slate-300">
            For larger projects and exotic builds, we are happy to travel farther so we can care for supercars and hypercars the right way. Let us know the vehicle and location, and we will make a custom plan that fits the scope.
          </p>
        </article>
      </div>
    </section>
    <Teleport to="body">
      <div v-if="showPhone" class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4">
        <div class="drip-panel relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-primary/30 bg-slate-950 p-8 shadow-xl">
          <div class="flex items-center justify-between">
            <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Call Or Text</p>
            <button
              type="button"
              class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-slate-200 transition hover:border-brand-primary hover:text-brand-primary"
              @click="showPhone = false"
              aria-label="Close phone window"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
          <p class="mt-4 text-center text-3xl font-bold text-white drip-text">
            (541) 501-0698
          </p>
          <p class="mt-2 text-center text-sm text-slate-400">Tap the number to copy or call from your phone.</p>
          <div class="mt-6 flex flex-col gap-3">
            <button class="btn-primary justify-center" type="button" @click="copyPhone">
              Copy Number
            </button>
            <a href="tel:+15415010698" class="btn-outline justify-center">Call Now</a>
          </div>
          <p v-if="copied" class="mt-3 text-center text-xs text-green-400">Phone number copied!</p>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import ClipboardDocumentListIcon from '~/components/icons/ClipboardDocumentListIcon.vue'
import SparklesIcon from '~/components/icons/SparklesIcon.vue'
import TruckIcon from '~/components/icons/TruckIcon.vue'

const showPhone = ref(false)
const copied = ref(false)

useRevealOnScroll()

const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText('(541) 501-0698')
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (err) {
    copied.value = false
  }
}
const heroStats = [
  { value: '50+', label: 'Local Vehicles Detailed' },
  { value: '7', label: 'Years Detailing Experience' },
  { value: '4-8 hrs', label: 'On-Site Sessions' },
  { value: '24 hr', label: 'Response Time' },
]

const features = [
  {
    title: 'PNW Prepared',
    description: 'Pop-up canopies, flexible setups, and on-site hookups let us work rain or shine wherever there\'s water and power.',
    icon: TruckIcon,
    iconLabel: 'Truck icon representing a mobile-ready setup',
  },
  {
    title: 'Transparent Consultations',
    description: 'Full-vehicle inspections cover paint, wheels, and interiors so every plan is client-specific and negotiable to your goals.',
    icon: ClipboardDocumentListIcon,
    iconLabel: 'Clipboard icon symbolizing transparent consultations',
  },
  {
    title: 'Aftercare Support',
    description: 'Maintenance reminders, wash tips, and a monthly program that cuts detail pricing in half for loyal clients.',
    icon: SparklesIcon,
    iconLabel: 'Sparkles icon highlighting ongoing aftercare support',
  },
]

const services = [
  {
    tier: 'Interior & Exterior',
    title: 'Complete Detail',
    price: '$250',
    description: 'Four-hour service covering every inch from paint to upholstery.',
    perks: ['Foam bath + hand wash', 'Wheels, tires, barrels cleaned', 'Full cabin vacuum & wipe-down', 'Dash, panels, glass protected'],
  },
  {
    tier: 'Exterior',
    title: 'Paint Enhancement',
    price: '$350',
    description: 'Great for reviving gloss after wet winters or pine pollen.',
    perks: ['Decon wash + clay treatment', 'Single-stage polish', 'Trim revival', '6-month sealant'],
  },
  {
    tier: 'Correction & Coating',
    title: 'Ceramic Upgrade',
    price: '$650',
    description: 'One to two-step correction with ceramic or graphene coating.',
    perks: ['Machine correction stages', 'Wheel and glass coating options', '2-6 year protection', 'Aftercare kit + support'],
  },
]

const testimonials = [
  { name: 'Cody Finch', quote: 'The paint enhancement makes my car look amazing. Thank you so much.' },
  {
    name: 'Eric Farrell',
    quote: 'I couldnƒ?Tt be happier with Ryanƒ?Ts work! Heƒ?Ts professional, detail-oriented, and clearly takes pride in what he does. If youƒ?Tre looking for a trustworthy local car detailer, this is the place to go.',
  },
  {
    name: 'Austen Tanner',
    quote: 'Ryan was on time, stayed over four hours on my non-crew cab truck, and had me walk around to point out anything I thought needed attention. Totally impressed and will definitely use this service again.',
  },
  {
    name: 'Mark Snider',
    quote: 'My RAV4 is like brand new! Ryan really knows his stuff and is a pleasure to be around. Thank you!',
  },
  {
    name: 'Dan Jocoy',
    quote: 'Ryan did the interior of my 2015 Honda Sport and showed up with every tool for a quality job. The cabin looks better than when I bought it.',
  },
  {
    name: 'Jonathan Hunter',
    quote: 'Ryan and his team did an amazing jobƒ?"my car looks brand new!',
  },
  {
    name: 'Trace Ericksen',
    quote: 'Excellent work and quality. I was extremely satisfied and will be back for ongoing services. Thanks!',
  },
]
</script>
