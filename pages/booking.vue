<template>
  <main class="space-y-16 px-6 py-16 sm:px-10">
    <section class="mx-auto max-w-4xl space-y-4 text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Book Now</p>
      <h1 class="text-4xl font-semibold text-white">Reserve your mobile detailing experience.</h1>
      <p class="text-lg text-slate-300">
        Complete the form and our concierge will confirm availability within 24 hours. Prefer to chat? Call or text (541) 501-0698.
      </p>
    </section>

    <section class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
      <form class="glow-card rounded-3xl p-6 text-sm text-slate-100" @submit.prevent>
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="space-y-2">
            <span class="text-xs uppercase tracking-[0.3em] text-slate-400">Name</span>
            <input class="w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3" type="text" placeholder="Jane Doe" />
          </label>
          <label class="space-y-2">
            <span class="text-xs uppercase tracking-[0.3em] text-slate-400">Email</span>
            <input class="w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3" type="email" placeholder="you@email.com" />
          </label>
          <label class="space-y-2">
            <span class="text-xs uppercase tracking-[0.3em] text-slate-400">Phone</span>
            <input class="w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3" type="tel" placeholder="(541) 501-0698" />
          </label>
          <label class="space-y-2">
            <span class="text-xs uppercase tracking-[0.3em] text-slate-400">Preferred Date</span>
            <input class="w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3" type="date" />
          </label>
        </div>
        <label class="mt-4 block space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-slate-400">Vehicle + Notes</span>
          <textarea class="min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3" placeholder="Year, make, model, current condition, goals..."></textarea>
        </label>
        <label class="mt-4 block space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-slate-400">Service Type</span>
          <select class="w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3">
            <option>Interior & Exterior Detail</option>
            <option>Exterior Detail Only</option>
            <option>Interior Detail Only</option>
            <option>Paint Enhancement</option>
            <option>Paint Correction (1-Step)</option>
            <option>Paint Correction (2-Step)</option>
            <option>Ceramic Coating</option>
            <option>Custom / Fleet</option>
          </select>
        </label>
        <button type="submit" class="mt-6 w-full rounded-full bg-brand-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
          Submit Request
        </button>
      </form>

      <div class="space-y-6">
        <article class="glow-card rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Response Time</p>
          <h2 class="mt-3 text-2xl font-semibold text-white">Same-day confirmations</h2>
          <p class="mt-2 text-sm text-slate-300">
            We reply within 24 hours with availability, prep instructions, and a link to pay your deposit. Urgent needs? Text us at (541) 501-0698.
          </p>
        </article>
        <article class="glow-card rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Service Area</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-200">
            <li>- Saint Helens & Columbia City core</li>
            <li>- Scappoose, Rainier, and Vernonia</li>
            <li>- Portland north & Longview by request</li>
          </ul>
        </article>
        <article class="glow-card rounded-3xl p-6">
          <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Preparation</p>
          <p class="mt-3 text-sm text-slate-300">
            Remove personal belongings, provide a driveway or covered space, and ensure access to the vehicle. We bring filtered water and power.
          </p>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-6xl space-y-6">
      <header class="text-center">
        <p class="text-xs uppercase tracking-[0.4em] text-brand-primary/80">Packages</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">Choose a service from the Quantum flyer</h2>
        <p class="mt-2 text-sm text-slate-300">Transparent starting prices and estimated time on site help you plan around work, school, or weekend drives.</p>
      </header>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="pkg in bookingPackages" :key="pkg.title" class="glow-card rounded-3xl p-5 text-sm text-slate-200">
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
</script>
