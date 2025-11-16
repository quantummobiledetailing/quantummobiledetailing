<template>
  <main class="space-y-16 px-6 py-16 sm:px-10">
    <section class="mx-auto max-w-5xl space-y-4 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Services</p>
      <h1 class="text-4xl font-semibold text-white">Tailored detailing programs for every finish.</h1>
      <p class="text-lg text-slate-300">
        Choose from curated packages or build a bespoke plan with our specialists. Pricing reflects most coupes and sedansâ€”final quotes follow inspection.
      </p>
    </section>

    <section class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
      <article v-for="servicePackage in packages" :key="servicePackage.title" class="glow-card flex flex-col rounded-3xl p-6">
        <div class="flex items-baseline justify-between">
          <span class="text-xs uppercase tracking-[0.3em] text-brand-primary/70">{{ servicePackage.tier }}</span>
          <span class="text-2xl font-semibold text-white">{{ servicePackage.price }}</span>
        </div>
        <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Time: {{ servicePackage.duration }}</p>
        <h2 class="mt-4 text-2xl font-semibold text-white">{{ servicePackage.title }}</h2>
        <p class="mt-2 text-sm text-slate-300">{{ servicePackage.summary }}</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-200">
          <li v-for="item in servicePackage.features" :key="item">- {{ item }}</li>
        </ul>
        <button type="button" class="mt-6 btn-outline text-center" @click="openPhone(servicePackage.title)">
          Call About {{ servicePackage.title }}
        </button>
      </article>
    </section>

    <section class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
      <article class="glow-card rounded-3xl p-6">
        <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Add-ons</p>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <div v-for="addon in addOns" :key="addon.title" class="rounded-2xl border border-white/10 p-4">
            <h3 class="text-lg font-semibold text-white">{{ addon.title }}</h3>
            <p class="text-sm text-slate-300">{{ addon.description }}</p>
            <p class="mt-3 text-sm font-semibold text-brand-primary">{{ addon.price }}</p>
          </div>
        </div>
      </article>
      <article class="glow-card rounded-3xl p-6">
        <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Process Breakdown</p>
        <ol class="mt-4 space-y-4 text-sm text-slate-300">
          <li><span class="font-semibold text-white">01.</span> Pre-rinse with softened water and citrus foam dwell.</li>
          <li><span class="font-semibold text-white">02.</span> Two-bucket contact wash, wheel decon, and iron removal.</li>
          <li><span class="font-semibold text-white">03.</span> Paint inspection, tape masking, and machine polishing.</li>
          <li><span class="font-semibold text-white">04.</span> Ceramic/graphene protection applied in controlled sections.</li>
          <li><span class="font-semibold text-white">05.</span> Interior detail, steam sanitation, and fragrance-free finish.</li>
        </ol>
      </article>
    </section>
    <Teleport to="body">
      <div v-if="showPhone" class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4">
        <div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-primary/30 bg-slate-950 p-8 shadow-xl">
          <button class="absolute right-4 top-4 text-slate-400 hover:text-white" aria-label="Close phone window" @click="showPhone = false">
            &times;
          </button>
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Call Or Text</p>
          <p class="mt-4 text-center text-3xl font-bold drip-text">(541) 501-0698</p>
          <p class="mt-2 text-center text-sm text-slate-400">
            Mention "{{ activePackage }}" so we can prep the right tools.
          </p>
          <div class="mt-6 flex flex-col gap-3">
            <button type="button" class="btn-primary justify-center" @click="copyPhone">Copy Number</button>
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
const activePackage = ref<string | null>(null)
const copied = ref(false)

const openPhone = (title: string) => {
  activePackage.value = title
  showPhone.value = true
}

const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText('(541) 501-0698')
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}

const packages = [
  {
    tier: 'Full Service',
    title: 'Interior & Exterior Detail',
    price: '$250',
    duration: '4 â€“ 4.5 hrs',
    summary: 'Our most popular Saint Helens package for reviving daily drivers inside and out.',
    features: [
      'Two-step wash with no-touch pre-rinse and hand dry',
      'Surface clay treatment removes contaminants',
      'Wheel, tire, and trim deep clean with dressing',
      'Declutter, vacuum, plastics/leather care, glass',
      'Paint sealant for 6-month protection',
    ],
  },
  {
    tier: 'Exterior Only',
    title: 'Exterior Detail',
    price: '$130',
    duration: '1.5 â€“ 2 hrs',
    summary: 'Focused exterior refresh that removes Oregon road film and protects against rain.',
    features: [
      'No-touch wash + meticulous hand wash and towel dry',
      'Surface clay treatment + contaminant removal',
      'Wheel, tire, and trim cleaning with dressing',
      '6-month synthetic sealant for shine and durability',
    ],
  },
  {
    tier: 'Interior Only',
    title: 'Interior Detail',
    price: '$160',
    duration: '2 â€“ 2.5 hrs',
    summary: 'Deep interior cleanse ideal after road trips, pets, or wet-weather commutes.',
    features: [
      'Declutter, trash removal, and full vacuum',
      'Floor mat care, carpet brushing, pedal cleaning',
      'Dash, vents, plastics, leather, headliner spot treatment',
      'Glass cleaning and final scent',
    ],
  },
  {
    tier: 'Gloss Boost',
    title: 'Paint Enhancement',
    price: '$350',
    duration: '4.5 â€“ 5 hrs',
    summary: 'Single-stage polish to brighten dull paint before the next rainy season.',
    features: [
      'Exterior detail with two-step wash + towel dry',
      'Surface clay treatment to remove bonded contaminants',
      'Single-stage finish polish to remove light swirls',
      'Trim revival and 6-month sealant',
    ],
  },
  {
    tier: 'Correction',
    title: 'Paint Correction (1-Step)',
    price: '$550',
    duration: '6 â€“ 6.5 hrs',
    summary: 'Ideal for moderate defects on daily drivers that need a serious refresh.',
    features: [
      'Exterior detail plus cutting and finish polish stages',
      'Removes swirls & minor clear-coat scratches',
      'Includes touch-up of interior surfaces',
      'Ready for sealant or coating add-ons',
    ],
  },
  {
    tier: 'Correction',
    title: 'Paint Correction (2-Step)',
    price: '$750',
    duration: '7.5 â€“ 8.5 hrs',
    summary: 'For darker finishes or vehicles requiring heavier correction before coating.',
    features: [
      'Exterior detail + deep cut, cutting, and finish polish',
      'Corrects deep swirls and prepares for coating',
      'Panel wipe and inspection before protection',
      'Includes paint sealant or coating prep',
    ],
  },
  {
    tier: 'Coating',
    title: 'Ceramic Coating',
    price: '$1000',
    duration: '8.5 - 10 hrs',
    summary: 'Three-year ceramic coating applied after correction to lock in gloss.',
    features: [
      'Exterior detail plus two-step correction',
      '3-year ceramic coating on paint',
      'Wheel + glass coating add-ons',
      'Aftercare kit and cure monitoring guidance',
    ],
  },
]

const addOns = [
  { title: 'Headlight Restoration', description: 'Wet-sand, polish, and UV seal for fogged lamps.', price: '$120' },
  { title: 'Fabric Guard', description: 'Hydrophobic coating keeps Oregon rain out of cloth seats.', price: '$95' },
  { title: 'Pet Hair Package', description: 'Specialized extraction after hikes and river trips.', price: '$80' },
  { title: 'Fleet Maintenance', description: 'Custom pricing for local businesses or boat tow rigs.', price: 'Contact' },
]
</script>









