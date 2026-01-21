<template>
  <main class="space-y-16 px-6 py-16 sm:px-10">
    <section class="mx-auto max-w-5xl space-y-4 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Gallery</p>
      <h1 class="text-4xl font-semibold text-white">Recent transformations across Saint Helens & the Oregon Northwest.</h1>
      <p class="text-lg text-slate-300">Swipe through favorite projects that show correction depth, coating clarity, and interior resets after rainy commutes or coastal adventures.</p>
    </section>

    <section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="shot in shots" :key="shot.title" class="glow-card overflow-hidden rounded-3xl">
        <button
          type="button"
          class="group block w-full text-left"
          @click="openShot(shot)"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              :src="shot.image"
              :alt="shot.title"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div class="pointer-events-none absolute inset-0 bg-slate-950/10"></div>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-semibold text-white">{{ shot.title }}</h3>
          </div>
        </button>
      </article>
    </section>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeShot"
          class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          @click.self="closeShot"
        >
          <button
            type="button"
            class="absolute right-6 top-6 rounded-full border border-white/30 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white"
            @click="closeShot"
          >
            Close
          </button>
          <div
            class="max-h-[85vh] w-full max-w-5xl overflow-auto"
            @wheel.prevent="handleZoom"
          >
            <img
              :src="activeShot.image"
              :alt="activeShot.title"
              class="h-full w-full origin-center rounded-2xl object-contain shadow-2xl transition-transform duration-150"
              :style="{ transform: `scale(${zoom})` }"
            />
          </div>
        </div>
      </Transition>
    </Teleport>

    <section class="mx-auto max-w-5xl rounded-3xl border border-brand-primary/40 bg-slate-900/40 p-8 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Follow Along</p>
      <h2 class="mt-3 text-3xl font-semibold text-white">See more Northwest builds on Instagram @QuantumDetailing</h2>
      <p class="mt-2 text-sm text-slate-300">Ready for your vehicle to make the next before-and-after? We come to you anywhere in Columbia County.</p>
      <button type="button" class="mt-6 btn-primary" @click="showPhone = true">Call For Your Transformation</button>
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
type GalleryShot = {
  title: string
  image: string
}

const galleryModules = import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const extractOrder = (filePath: string): number => {
  const filename = filePath.split('/').pop() ?? ''
  const match = filename.match(/^\d+/)
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER
}

const shots: GalleryShot[] = Object.entries(galleryModules)
  .sort(([pathA], [pathB]) => extractOrder(pathA) - extractOrder(pathB))
  .map(([path, src]) => {
    const filename = path.split('/').pop() ?? 'Gallery Image'
    const baseName = filename.replace(/\.[^/.]+$/, '')
    const prettyTitle = baseName
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    return {
      title: prettyTitle,
      image: src as string,
    }
  })

const activeShot = ref<GalleryShot | null>(null)
const showPhone = ref(false)
const copied = ref(false)
const zoom = ref(1)
const minZoom = 1
const maxZoom = 3
const zoomStep = 0.12

const openShot = (shot: GalleryShot) => {
  activeShot.value = shot
  zoom.value = 1
}

const closeShot = () => {
  activeShot.value = null
  zoom.value = 1
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

const handleZoom = (event: WheelEvent) => {
  if (!activeShot.value) {
    return
  }

  const direction = event.deltaY < 0 ? 1 : -1
  const nextZoom = zoom.value + direction * zoomStep
  zoom.value = Math.min(maxZoom, Math.max(minZoom, Number(nextZoom.toFixed(2))))
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeShot()
    showPhone.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>








