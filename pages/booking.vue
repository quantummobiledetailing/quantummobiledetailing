<template>
  <main class="space-y-16 px-6 py-16 sm:px-10">
    <section class="mx-auto max-w-4xl space-y-4 text-center reveal" data-reveal>
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Booking Offline</p>
      <h1 class="text-4xl font-semibold text-white">Online booking is temporarily paused.</h1>
      <p class="text-lg text-slate-300">
        Please call or text <a class="text-brand-primary" href="tel:+15415010698">(541) 501-0698</a> or email
        <a class="text-brand-primary" href="mailto:quantummobiledetailingllc@gmail.com">quantummobiledetailingllc@gmail.com</a> to reserve your slot.
      </p>
    </section>

    <section class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 reveal" data-reveal>
      <article class="glow-card card-hover rounded-3xl p-6 text-center text-slate-200 reveal" data-reveal>
        <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Need Detailing?</p>
        <h2 class="mt-3 text-2xl font-semibold text-white">We're taking bookings manually.</h2>
        <p class="mt-4 text-sm text-slate-300">
          Share your make, model, and goals and we’ll reply with availability plus a quote. Expect a same-day response.
        </p>
        <div class="mt-6 space-y-3 text-sm font-semibold text-brand-accent">
          <a href="tel:+15415010698" class="btn-primary w-full justify-center">Call/Text (541) 501-0698</a>
          <a href="mailto:quantummobiledetailingllc@gmail.com" class="btn-outline w-full justify-center">Email quantum mobile detailing</a>
        </div>
      </article>
      <div class="space-y-6">
        <article class="glow-card card-hover rounded-3xl p-6 reveal" data-reveal data-reveal-delay="80">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Response Time</p>
          <h2 class="mt-3 text-2xl font-semibold text-white">Same-day confirmations</h2>
          <p class="mt-2 text-sm text-slate-300">
            We reply within 24 hours with availability, prep instructions, and a link to pay your deposit. Urgent needs? Text us at (541) 501-0698.
          </p>
        </article>
        <article class="glow-card card-hover rounded-3xl p-6 reveal" data-reveal data-reveal-delay="140">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Service Area</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-200">
            <li>- Saint Helens & Columbia City core</li>
            <li>- Scappoose, Rainier, and Vernonia</li>
            <li>- Portland north & Longview by request</li>
          </ul>
        </article>
        <article class="glow-card card-hover rounded-3xl p-6 reveal" data-reveal data-reveal-delay="200">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Preparation</p>
          <p class="mt-3 text-sm text-slate-300">
            Remove personal belongings, provide a driveway or covered space, and ensure access to the vehicle. We bring filtered water and power.
          </p>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-6xl space-y-6 reveal" data-reveal>
      <header class="text-center">
        <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Packages</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">Choose a service from the Quantum flyer</h2>
        <p class="mt-2 text-sm text-slate-300">Transparent starting prices and estimated time on site help you plan around work, school, or weekend drives.</p>
      </header>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(pkg, index) in bookingPackages"
          :key="pkg.title"
          class="glow-card card-hover rounded-3xl p-5 text-sm text-slate-200 reveal"
          data-reveal
          :data-reveal-delay="index * 70"
        >
          <div class="flex items-baseline justify-between">
            <p class="text-base font-semibold text-white">{{ pkg.title }}</p>
            <span class="text-lg font-semibold text-brand-primary">{{ pkg.price }}</span>
          </div>
          <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Time: {{ pkg.duration }}</p>
          <p class="mt-3 text-slate-300">{{ pkg.description }}</p>
        </article>
      </div>
      <p class="text-center text-sm text-slate-400">Need help choosing? Call/text <a class="text-brand-primary" href="tel:+15415010698">(541) 501-0698</a> or email <a class="text-brand-primary" href="mailto:quantummobiledetailingllc@gmail.com">quantummobiledetailingllc@gmail.com</a>.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
const bookingPackages = [
  { title: 'Interior & Exterior Detail', price: '$250', duration: '4 – 4.5 hrs', description: 'Complete inside/out mobile service including wash, clay, interior wipe-down, and glass.' },
  { title: 'Exterior Detail Only', price: '$130', duration: '1.5 – 2 hrs', description: 'Great between storms—foam bath, paint decontamination, wheels, and sealant.' },
  { title: 'Interior Detail Only', price: '$160', duration: '2 – 2.5 hrs', description: 'Steam sanitation, hot water extraction, leather treatment, and streak-free glass.' },
  { title: 'Paint Enhancement', price: '$350', duration: '4.5 – 5 hrs', description: 'Single-stage polish brightens dull paint before applying a protective sealant.' },
  { title: 'Paint Correction (1-Step)', price: '$550', duration: '6 – 6.5 hrs', description: 'Removes moderate swirls and oxidation in one pass—perfect for daily drivers.' },
  { title: 'Paint Correction (2-Step)', price: '$750', duration: '7.5 – 8.5 hrs', description: 'Compound + finish for deeper defects before ceramic coating add-ons.' },
  { title: 'Ceramic Coating', price: '+$1150', duration: '7 – 7.5 hrs', description: 'Long-term coating applied after correction for easier maintenance and gloss.' },
]

useRevealOnScroll()
</script>
