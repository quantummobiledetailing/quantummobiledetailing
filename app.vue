<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-20 border-b border-white/10 bg-black/85 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <NuxtLink to="/" class="text-2xl font-semibold tracking-wide">
          <span class="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Quantum</span>
          <span class="text-brand-primary"> Mobile </span>
          <span class="bg-gradient-to-r from-brand-primary via-red-200 to-white bg-clip-text text-transparent">Detailing</span>
        </NuxtLink>
        <nav class="flex flex-wrap gap-4 text-sm font-semibold text-brand-accent">
          <NuxtLink v-for="item in navLinks" :key="item.to" :to="item.to" class="tracking-wide hover:text-brand-primary">
            {{ item.label }}
          </NuxtLink>
        </nav>
        <button class="hidden btn-outline md:inline-flex opacity-50 cursor-not-allowed" title="Online booking coming soon">
          Booking Offline
        </button>
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
]

const currentYear = new Date().getFullYear()
</script>
