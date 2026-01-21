<template>
  <main class="space-y-16 px-6 py-16 sm:px-10">
    <section class="mx-auto max-w-5xl space-y-6 text-center reveal" data-reveal>
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Our Story</p>
      <h1 class="text-4xl font-semibold text-white sm:text-5xl">Crafting a detailing experience built on trust.</h1>
      <p class="text-lg text-slate-300">
        Quantum Mobile Detailing is a Saint Helens, Oregon business born from keeping friendsƒ?T rides clean between coastal road trips. Today the same boutique approach serves neighbors across Columbia County and the Northwest river towns.
      </p>
    </section>

    <section class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[2.5fr_1.5fr] reveal" data-reveal>
      <article class="glow-card card-hover flex h-full flex-col overflow-hidden rounded-3xl p-0 lg:flex-row lg:items-center reveal" data-reveal>
        <div class="w-full p-6 lg:w-1/2">
          <div class="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <img src="/images/owner.jpg" alt="Ryan, owner of Quantum Mobile Detailing" class="h-full w-full object-cover" />
          </div>
        </div>
        <div class="flex flex-1 flex-col p-6 lg:w-1/2">
          <h2 class="text-2xl font-semibold text-white">People-first philosophy</h2>
          <p class="mt-3 text-sm text-slate-300">
            Every service begins with a listening session and a genuine love for carsƒ?"especially Subarus. The Quantum logo even nods to my WRX STI outline. I turned my DIY obsession for keeping my 2019 STI pristine into a profession, so your vehicle gets the same care.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-slate-200">
            <li>- Ongoing training in paint correction & coatings</li>
            <li>- Concierge scheduling for riverfront homes, fleets, and clubs</li>
            <li>- Owner-operated with a detailerƒ?Ts heart for Subaru culture</li>
          </ul>
        </div>
      </article>

      <article class="glow-card card-hover flex h-full flex-col overflow-hidden rounded-3xl p-0 reveal" data-reveal data-reveal-delay="120">
        <div class="relative h-56 w-full overflow-hidden border-b border-white/10 sm:h-64" aria-label="Process driven detailing in action">
          <img :src="processImage" alt="" class="h-full w-full object-cover" />
        </div>
        <div class="flex flex-1 flex-col p-6">
          <h2 class="text-2xl font-semibold text-white">Process driven</h2>
          <p class="mt-3 text-sm text-slate-300">
            From pH-balanced chemicals to microfiber-only contact and meticulous pad management, our systems handle pine pollen, road salt, and rainy season grime without introducing new marring.
          </p>
          <div class="mt-6 grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.4em] text-slate-400">
            <div>
              <p class="text-3xl font-semibold text-white">50+</p>
              <p>Correction Hours</p>
            </div>
            <div>
              <p class="text-3xl font-semibold text-white">2</p>
              <p>Mobile Units</p>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 reveal" data-reveal>
      <article
        v-for="(pillar, index) in pillars"
        :key="pillar.title"
        class="glow-card card-hover rounded-3xl p-6 reveal"
        data-reveal
        :data-reveal-delay="index * 80"
      >
        <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">{{ pillar.category }}</p>
        <h3 class="mt-3 text-xl font-semibold text-white">{{ pillar.title }}</h3>
        <p class="mt-2 text-sm text-slate-300" v-html="pillar.copy"></p>
      </article>
    </section>

    <section class="mx-auto max-w-5xl rounded-3xl border border-brand-primary/40 bg-slate-900/40 p-8 text-center reveal" data-reveal>
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Join The Route</p>
      <h2 class="mt-3 text-3xl font-semibold text-white">Ready for the Quantum experience?</h2>
      <p class="mt-3 text-sm text-slate-300">
        Email <a class="text-brand-primary underline" href="mailto:quantummobiledetailingllc@gmail.com">quantummobiledetailingllc@gmail.com</a> or call (541) 501-0698 to grab a slot on this weekƒ?Ts schedule.
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <button type="button" class="btn-primary" @click="showPhone = true">Call For Consultation</button>
        <NuxtLink to="/services" class="btn-outline">Explore Services</NuxtLink>
      </div>
    </section>
    <Teleport to="body">
      <div v-if="showPhone" class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4">
        <div class="drip-panel relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-primary/30 bg-slate-950 p-8 shadow-xl">
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
const processImage = new URL('~/assets/images/subaru.jpg', import.meta.url).href

useRevealOnScroll()

const showPhone = ref(false)
const copied = ref(false)

const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText('(541) 501-0698')
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}

const pillars = [
  {
    category: 'Quality',
    title: 'Studio equipment on wheels',
    copy: 'We bring premium P&S liquids, Rag Company microfiber, and calibrated polishers so every correction uses the best chemistry and tools on the market.',
  },
  {
    category: 'Trust',
    title: 'Transparent reports',
    copy: 'Every appointment ends with condition notes, before/after photos, and wash instructions so you know exactly what was done.',
  },
  {
    category: 'Care',
    title: 'Quantum-level clean',
    copy: 'Physics nerd alert: we dial in details down to the <span class="text-brand-primary font-semibold">quantum</span> levelƒ?"meticulous processes, calibrated lighting, and pro-grade chemistry borrowed from my Intel performance lab days.',
  },
]
</script>

