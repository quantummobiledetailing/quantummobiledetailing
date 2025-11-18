<template>
  <main class="space-y-16 px-6 py-16 sm:px-10">
    <section class="mx-auto max-w-5xl space-y-4 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Gallery</p>
      <h1 class="text-4xl font-semibold text-white">Recent transformations across Saint Helens & the Oregon Northwest.</h1>
      <p class="text-lg text-slate-300">Swipe through favorite projects that show correction depth, coating clarity, and interior resets after rainy commutes or coastal adventures.</p>
    </section>

    <section class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="shot in shots" :key="shot.title" class="glow-card overflow-hidden rounded-3xl">
        <div class="h-48 w-full bg-cover bg-center" :style="{ backgroundImage: `url(${shot.image})` }"></div>
        <div class="p-5">
          <h3 class="text-lg font-semibold text-white">{{ shot.title }}</h3>
        </div>
      </article>
    </section>

    <section class="mx-auto max-w-5xl rounded-3xl border border-brand-primary/40 bg-slate-900/40 p-8 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Follow Along</p>
      <h2 class="mt-3 text-3xl font-semibold text-white">See more Northwest builds on Instagram @QuantumDetailing</h2>
      <p class="mt-2 text-sm text-slate-300">Ready for your vehicle to make the next before-and-after? We come to you anywhere in Columbia County.</p>
      <a href="tel:+15415010698" class="mt-6 btn-primary">Call For Your Transformation</a>
    </section>
  </main>
</template>

<script setup lang="ts">
const galleryModules = import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const extractOrder = (filePath: string): number => {
  const filename = filePath.split('/').pop() ?? ''
  const match = filename.match(/^\d+/)
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER
}

const shots = Object.entries(galleryModules)
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
</script>
