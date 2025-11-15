<template>
  <main class="space-y-16 pb-16">
    <section class="relative overflow-hidden px-6 py-20 sm:px-10">
      <div class="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div class="space-y-6 text-center lg:text-left">
          <p class="text-sm uppercase tracking-[0.4em] text-brand-primary/80">Saint Helens • Oregon Northwest</p>
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
        <div class="grid flex-1 grid-cols-2 gap-4 text-center text-sm uppercase tracking-widest text-slate-300">
          <div v-for="stat in heroStats" :key="stat.label" class="glow-card rounded-3xl px-6 py-8">
            <p class="text-4xl font-semibold text-white">{{ stat.value }}</p>
            <p class="mt-2 text-xs text-slate-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 sm:px-10">
      <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <article v-for="feature in features" :key="feature.title" class="glow-card rounded-3xl p-6">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
            {{ feature.icon }}
          </div>
          <h3 class="text-xl font-semibold text-white">{{ feature.title }}</h3>
          <p class="mt-3 text-sm text-slate-300">{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="bg-slate-900/40 px-6 py-16 sm:px-10">
      <div class="mx-auto max-w-6xl space-y-10">
        <header class="space-y-4 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Signature Packages</p>
          <h2 class="text-3xl font-semibold text-white">Hand-crafted plans to fit every finish</h2>
          <p class="text-slate-300">Each package is tailored during your consultation, balancing your driving habits, vehicle type, and aftercare goals.</p>
        </header>
        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="service in services" :key="service.tier" class="glow-card flex flex-col rounded-3xl p-6">
            <div class="flex items-center justify-between">
              <span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">{{ service.tier }}</span>
              <span class="text-lg font-semibold text-white">{{ service.price }}</span>
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

    <section class="px-6 sm:px-10">
      <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <article class="glow-card rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Testimonials</p>
          <h3 class="mt-3 text-2xl font-semibold text-white">Clients trust us with their daily drivers and collectibles.</h3>
          <div class="mt-6 space-y-6">
            <figure v-for="testimonial in testimonials" :key="testimonial.name" class="border-l border-brand-primary/40 pl-4">
              <blockquote class="text-sm text-slate-300">"{{ testimonial.quote }}"</blockquote>
              <figcaption class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">{{ testimonial.name }}</figcaption>
            </figure>
          </div>
        </article>
        <article class="glow-card flex flex-col justify-between rounded-3xl p-6">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">Coverage Area</p>
            <h3 class="mt-3 text-2xl font-semibold text-white">Proudly serving Saint Helens, Scappoose, Rainier, and the greater Oregon Northwest.</h3>
            <p class="mt-3 text-sm text-slate-300">
              Fully mobile setup with purified water, onboard power, and covered work zones keeps results consistent through coastal rain, pine pollen, and chilly mornings.
            </p>
          </div>
          <a href="tel:+15415010698" class="mt-6 btn-primary">Schedule A Route Stop</a>
        </article>
      </div>
    </section>
    <Teleport to="body">
      <div v-if="showPhone" class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4">
        <div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-primary/30 bg-slate-950 p-8 shadow-xl">
          <button
            class="absolute right-4 top-4 text-slate-400 hover:text-white"
            @click="showPhone = false"
            aria-label="Close phone window"
          >
            &times;
          </button>
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Call Or Text</p>
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
const showPhone = ref(false)
const copied = ref(false)

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
  { value: '250+', label: 'Local Vehicles Detailed' },
  { value: '12', label: 'Years Detailing Experience' },
  { value: '4-8 hrs', label: 'On-Site Sessions' },
  { value: '24 hr', label: 'Response Time' },
]

const features = [
  {
    title: 'PNW Prepared',
    description: 'Filtered water, heated extractors, and dry canopies keep details on schedule through every season.',
    icon: '🚗',
  },
  {
    title: 'Transparent Consultations',
    description: 'We inspect paint, trim, and interiors together before recommending a plan.',
    icon: '📋',
  },
  {
    title: 'Aftercare Support',
    description: 'Maintenance reminders and wash tips designed for wet Oregon roads.',
    icon: '💧',
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
    price: '$650+',
    description: 'One to two-step correction with ceramic or graphene coating.',
    perks: ['Machine correction stages', 'Wheel and glass coating options', '2-6 year protection', 'Aftercare kit + support'],
  },
]

const testimonials = [
  { name: 'Kara M.', quote: 'Ryan keeps our family SUVs spotless even after muddy weekend trips. The shine lasts for months.' },
  { name: 'Nathan R.', quote: 'He corrected the paint on my classic Nova and protected it before the Portland rains moved in.' },
]
</script>
