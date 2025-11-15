<template>
  <main class="min-h-screen bg-slate-950 text-slate-100">
    <section class="relative overflow-hidden px-6 py-20 sm:px-10">
      <div class="absolute inset-0 -z-10 opacity-60">
        <div class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand-primary/40 to-transparent blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-5xl space-y-10 text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-slate-400">Quantum Mobile Detailing</p>
        <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Elevate your vehicle with concierge-level
          <span class="text-brand-primary">mobile detailing</span>
        </h1>
        <p class="text-lg text-slate-300 sm:text-xl">
          We bring studio-grade detailing straight to your driveway. Select a package, book online, and
          relax while our specialists restore a glossy, protected finish.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/about"
            class="rounded-full bg-brand-primary px-8 py-3 text-base font-medium text-slate-900 transition hover:bg-brand-secondary hover:text-white"
          >
            Why Quantum
          </NuxtLink>
          <a
            href="mailto:hello@quantummobiledetailing.com?subject=Detailing%20Inquiry"
            class="rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white transition hover:border-brand-primary hover:text-brand-primary"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>

    <section class="px-6 pb-16 sm:px-10">
      <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <article v-for="feature in features" :key="feature.title" class="glow-card rounded-2xl p-6 backdrop-blur">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
            <span class="text-2xl">{{ feature.icon }}</span>
          </div>
          <h3 class="text-xl font-semibold text-white">{{ feature.title }}</h3>
          <p class="mt-3 text-sm text-slate-300">{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="bg-slate-900/40 px-6 py-16 sm:px-10">
      <div class="mx-auto max-w-5xl space-y-8">
        <div class="flex flex-col gap-4 text-center">
          <p class="text-sm uppercase tracking-[0.4em] text-brand-primary/80">Signature Services</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Handcrafted packages for any finish</h2>
          <p class="text-slate-300">
            From maintenance washes to full ceramic protection, every booking is customized for your
            vehicle, driving habits, and environment.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="service in services" :key="service.tier" class="glow-card flex flex-col rounded-3xl p-6">
            <div class="flex items-baseline gap-2">
              <span class="text-sm uppercase tracking-[0.3em] text-brand-primary/70">{{ service.tier }}</span>
              <span class="text-xs text-slate-500">Package</span>
            </div>
            <h3 class="mt-4 text-2xl font-semibold text-white">{{ service.title }}</h3>
            <p class="mt-2 text-sm text-slate-300">{{ service.description }}</p>
            <ul class="mt-4 list-disc space-y-2 pl-4 text-sm text-slate-200">
              <li v-for="perk in service.perks" :key="perk">
                {{ perk }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/5 px-6 py-10 text-center text-sm text-slate-400 sm:px-10">
      Serving Phoenix, Scottsdale, Mesa, and surrounding areas. Licensed & insured.
    </footer>
  </main>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'On-Demand Luxury Care',
    description: 'Appointments that adapt to your schedule with seamless digital booking and reminders.',
    icon: '⚡',
  },
  {
    title: 'Studio-Grade Protection',
    description: 'pH-neutral, ceramic-safe chemicals and microfiber-only process for flawless finishes.',
    icon: '💧',
  },
  {
    title: 'Concierge Experience',
    description: 'Detail reports, aftercare plans, and follow-ups ensure long-lasting brilliance.',
    icon: '🛰️',
  },
]

const services = [
  {
    tier: 'Essential',
    title: 'Refresh & Protect',
    description: 'Exterior foam bath, wheel detail, interior cleanse, and express sealant.',
    perks: ['Two-bucket hand wash', 'Interior vacuum & wipe-down', 'Spray sealant protection'],
  },
  {
    tier: 'Signature',
    title: 'Interior Revival',
    description: 'Deep clean for vehicles that need stain removal and interior rejuvenation.',
    perks: ['Steam + spot extraction', 'Leather cleanse & condition', 'Ozone deodorizing treatment'],
  },
  {
    tier: 'Elite',
    title: 'Ceramic Elite',
    description: 'Paint correction and multi-year ceramic coating for unmatched gloss and hydrophobics.',
    perks: ['Single-stage correction', 'Graphene ceramic coating', 'Wheel + glass protection'],
  },
]
</script>
