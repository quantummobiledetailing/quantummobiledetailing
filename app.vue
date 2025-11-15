<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-20 border-b border-white/5 bg-slate-950/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <NuxtLink to="/" class="text-xl font-semibold text-white">
          Quantum<span class="text-brand-primary">Detailing</span>
        </NuxtLink>
        <nav class="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
          <NuxtLink v-for="item in navLinks" :key="item.to" :to="item.to" class="tracking-wide hover:text-brand-primary">
            {{ item.label }}
          </NuxtLink>
        </nav>
        <NuxtLink
          to="/booking"
          class="hidden rounded-full border border-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary transition hover:bg-brand-primary hover:text-slate-950 md:inline-flex"
        >
          Book Now
        </NuxtLink>
      </div>
    </header>
    <NuxtPage />
    <footer class="border-t border-white/5 px-6 py-8 text-xs uppercase tracking-widest text-slate-400 sm:px-10">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>Serving Saint Helens & the Oregon Northwest • © {{ currentYear }} Quantum Mobile Detailing</p>
        <div class="flex gap-4 text-slate-500">
          <a href="mailto:quantummobiledetailingllc@gmail.com" class="hover:text-brand-primary">quantummobiledetailingllc@gmail.com</a>
          <a href="tel:+15415010698" class="hover:text-brand-primary">(541) 501-0698</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Booking', to: '/booking' },
]

const currentYear = new Date().getFullYear()
</script>
