<template>
  <main class="space-y-16 px-6 py-16 sm:px-10">
    <section class="mx-auto max-w-5xl space-y-6 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Our Story</p>
      <h1 class="text-4xl font-semibold text-white sm:text-5xl">Crafting a detailing experience built on trust.</h1>
      <p class="text-lg text-slate-300">
        Quantum Mobile Detailing is a Saint Helens, Oregon business born from keeping friends’ rides clean between coastal road trips. Today the same boutique approach serves neighbors across Columbia County and the Northwest river towns.
      </p>
    </section>

    <section class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
      <article class="glow-card rounded-3xl p-6">
        <h2 class="text-2xl font-semibold text-white">People-first philosophy</h2>
        <p class="mt-3 text-sm text-slate-300">
          Every service begins with a listening session. We map how you use, store, and maintain the vehicle to create a plan that balances longevity and budget. Expect honest recommendations, paint readings, and transparent quotes.
        </p>
        <ul class="mt-6 space-y-3 text-sm text-slate-200">
          <li>- Licensed & insured technicians</li>
          <li>- Ongoing training in paint correction & coatings</li>
          <li>- Concierge scheduling for riverfront homes, fleets, and clubs</li>
        </ul>
      </article>

      <article class="glow-card rounded-3xl p-6">
        <h2 class="text-2xl font-semibold text-white">Process driven</h2>
        <p class="mt-3 text-sm text-slate-300">
          From pH-balanced chemicals to microfiber-only contact and meticulous pad management, our systems handle pine pollen, road salt, and rainy season grime without introducing new marring.
        </p>
        <div class="mt-6 grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.4em] text-slate-400">
          <div>
            <p class="text-3xl font-semibold text-white">350+</p>
            <p>Correction Hours</p>
          </div>
          <div>
            <p class="text-3xl font-semibold text-white">5</p>
            <p>Mobile Units</p>
          </div>
        </div>
      </article>
    </section>

    <section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
      <article v-for="pillar in pillars" :key="pillar.title" class="glow-card rounded-3xl p-6">
        <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/70">{{ pillar.category }}</p>
        <h3 class="mt-3 text-xl font-semibold text-white">{{ pillar.title }}</h3>
        <p class="mt-2 text-sm text-slate-300">{{ pillar.copy }}</p>
      </article>
    </section>

    <section class="mx-auto max-w-5xl rounded-3xl border border-brand-primary/40 bg-slate-900/40 p-8 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Join The Route</p>
      <h2 class="mt-3 text-3xl font-semibold text-white">Ready for the Quantum experience?</h2>
      <p class="mt-3 text-sm text-slate-300">
        Email <a class="text-brand-primary underline" href="mailto:quantummobiledetailingllc@gmail.com">quantummobiledetailingllc@gmail.com</a> or call (541) 501-0698 to grab a slot on this week’s schedule.
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <NuxtLink to="/booking" class="rounded-full bg-brand-primary px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
          Book Consultation
        </NuxtLink>
        <NuxtLink to="/services" class="rounded-full border border-brand-primary px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
          Explore Services
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const pillars = [
  {
    category: 'Quality',
    title: 'Studio equipment on wheels',
    copy: 'Self-contained trailers carry filtered water, heated extractors, dual-polishers, and lighting rigs for controlled correction anywhere in the Northwest.',
  },
  {
    category: 'Trust',
    title: 'Transparent reports',
    copy: 'Every appointment ends with condition notes, before/after photos, and wash instructions so you know exactly what was done.',
  },
  {
    category: 'Care',
    title: 'Sustainable & safe',
    copy: 'Biodegradable soaps, water reclamation mats, and towel tracking protect the Columbia River and your finish.',
  },
]
</script>
