<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { mdiMapMarker, mdiLightningBolt, mdiShieldCheck, mdiClockFast } from '@mdi/js';
  import ServiceCard from '$lib/components/ServiceCard.svelte';

  const features = [
    {
      icon: mdiLightningBolt,
      title: 'Servicio Premium',
      description: 'Electricista especializado para las exigencias de Palermo.'
    },
    {
      icon: mdiShieldCheck,
      title: 'Expertos en Locales',
      description: 'Especialistas en instalaciones comerciales y gastronómicas.'
    },
    {
      icon: mdiClockFast,
      title: 'Respuesta Rápida',
      description: 'Atención inmediata en todo Palermo, las 24 horas.'
    },
    {
      icon: mdiMapMarker,
      title: 'Cobertura Completa',
      description: 'Servicio en Palermo Hollywood, Soho y Viejo.'
    }
  ];
</script>

<svelte:head>
  <title>Electricista en Palermo - Servicio Premium 24/7</title>
  <meta name="description" content="Electricista matriculado en Palermo, CABA. Especialistas en instalaciones comerciales y residenciales. Servicio premium con atención inmediata." />
  <meta property="og:title" content="Electricista en Palermo - Servicio Premium 24/7" />
  <meta property="og:description" content="Electricista matriculado en Palermo, CABA. Especialistas en instalaciones comerciales y residenciales." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="%sveltekit.assets%/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Electricista en Palermo" />
  <meta name="twitter:description" content="Electricista matriculado en Palermo, CABA. Especialistas en instalaciones comerciales y residenciales." />
</svelte:head>

<section class="hero">
  <div class="hero-content">
    <h1>Electricista en Palermo</h1>
    <p>Servicio eléctrico premium para hogares y comercios</p>
    <div class="hero-buttons">
      <Button href="/contacto">Solicitar Presupuesto</Button>
      <Button href="tel:+541162068732" variant="secondary">Llamar Ahora</Button>
    </div>
  </div>
</section>

<section class="features">
  <h2>Servicios Especializados en Palermo</h2>
  <div class="features-grid">
    {#each features as feature}
      <ServiceCard {...feature} />
    {/each}
  </div>
</section>

<section class="about">
  <div class="about-content">
    <h2>Expertos Electricistas en Palermo</h2>
    <p>Ofrecemos soluciones eléctricas profesionales adaptadas a las necesidades específicas de Palermo:</p>
    <ul>
      <li>Instalaciones para locales gastronómicos en Palermo Hollywood</li>
      <li>Sistemas eléctricos para boutiques y comercios de Palermo Soho</li>
      <li>Mantenimiento de edificios residenciales modernos</li>
      <li>Soluciones de iluminación decorativa y funcional</li>
    </ul>
    <p>Entendemos las exigencias particulares del barrio y brindamos un servicio acorde a su estilo y necesidades.</p>
  </div>
</section>

<section class="cta">
  <div class="cta-content">
    <h2>¿Necesitás un electricista en Palermo?</h2>
    <p>Contactanos para una atención inmediata y profesional.</p>
    <Button href="/contacto">Contactanos Ya</Button>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-position: center;
    color: white;
    margin: -2rem 0 2rem;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .features {
    padding: 4rem 0;
  }

  .features h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .about {
    background-color: var(--surface-color);
    padding: 4rem 1rem;
    margin: 2rem -1rem;
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .about h2 {
    margin-bottom: 1.5rem;
  }

  .about p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .about ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  .about li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  .cta {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    padding: 4rem 1rem;
    text-align: center;
    margin: 2rem -1rem -2rem;
  }

  .cta-content {
    max-width: 600px;
    margin: 0 auto;
  }

  .cta h2 {
    margin-bottom: 1rem;
  }

  .cta p {
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    .hero-content {
      padding: 4rem 1rem;
    }

    .hero-buttons {
      flex-direction: column;
    }
  }
</style>