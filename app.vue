<template>
  <div class="min-h-screen bg-black text-slate-100">
    <header class="sticky top-0 z-20 border-b border-white/10 bg-gradient-to-r from-red-600 via-yellow-300 to-black">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <NuxtLink to="/" class="text-2xl font-semibold tracking-wide">
          <span class="text-yellow-300">Q</span>
          <span class="text-white">uantum Mobile Detailing</span>
        </NuxtLink>
        <nav class="flex flex-nowrap items-center gap-3 overflow-x-auto text-xs font-semibold text-brand-accent sm:text-sm">
          <NuxtLink
            v-for="item in navLinks"
            :key="item.to"
            :to="item.to"
            class="whitespace-nowrap tracking-wide hover:text-brand-primary"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
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
