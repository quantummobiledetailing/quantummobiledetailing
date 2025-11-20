<template>
  <div class="min-h-screen bg-black text-slate-100">
    <header class="sticky top-0 z-20 border-b border-white/10 bg-gradient-to-r from-red-600 via-yellow-300 to-black">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <NuxtLink to="/" class="text-2xl font-semibold tracking-wide">
          <span class="text-yellow-300">Q</span>
          <span class="text-white">uantum Mobile Detailing</span>
        </NuxtLink>
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-black/30 transition hover:border-brand-primary hover:text-brand-primary md:hidden"
            @click="openMobileNav"
            aria-label="Open navigation menu"
            :aria-expanded="mobileNavOpen"
          >
            Menu
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <nav class="hidden flex-nowrap items-center gap-3 text-xs font-semibold text-brand-accent sm:text-sm md:flex" aria-label="Primary">
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
      </div>
    </header>
    <Teleport to="body">
      <div
        v-if="mobileNavOpen"
        class="fixed inset-0 z-40 flex items-start justify-end bg-black/80 backdrop-blur-sm"
        @click.self="closeMobileNav"
      >
        <div class="m-4 w-full max-w-sm rounded-3xl border border-brand-primary/50 bg-slate-950/95 p-6 shadow-2xl">
          <div class="flex items-center justify-between">
            <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Navigate</p>
            <button
              type="button"
              class="rounded-full border border-white/20 p-2 text-slate-300 hover:text-white"
              @click="closeMobileNav"
              aria-label="Close navigation menu"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 space-y-3">
            <NuxtLink
              v-for="item in navLinks"
              :key="item.to"
              :to="item.to"
              class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-lg font-semibold text-white transition hover:border-brand-primary hover:bg-brand-primary/10"
              @click="closeMobileNav"
            >
              <span>{{ item.label }}</span>
              <svg class="h-4 w-4 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="mt-6 rounded-2xl border border-brand-primary/30 bg-brand-primary/10 p-4 text-center text-sm text-slate-300">
            Call or text <a href="tel:+15415010698" class="font-semibold text-white hover:text-brand-primary">(541) 501-0698</a> to book.
          </div>
        </div>
      </div>
    </Teleport>
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

const mobileNavOpen = ref(false)

const openMobileNav = () => {
  mobileNavOpen.value = true
}

const closeMobileNav = () => {
  mobileNavOpen.value = false
}

const currentYear = new Date().getFullYear()
</script>
