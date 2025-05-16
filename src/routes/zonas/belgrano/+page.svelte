<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { mdiMapMarker, mdiLightningBolt, mdiShieldCheck, mdiClockFast } from '@mdi/js';
  import ServiceCard from '$lib/components/ServiceCard.svelte';

  const features = [
    {
      icon: mdiLightningBolt,
      title: 'Servicio Local',
      description: 'Electricista con base en Belgrano, llegamos en minutos a tu domicilio.'
    },
    {
      icon: mdiShieldCheck,
      title: 'Expertos en Edificios',
      description: 'Especialistas en instalaciones eléctricas de edificios residenciales característicos de Belgrano.'
    },
    {
      icon: mdiClockFast,
      title: 'Atención Inmediata',
      description: 'Servicio de urgencia 24/7 para todo el barrio de Belgrano y alrededores.'
    },
    {
      icon: mdiMapMarker,
      title: 'Cobertura Total',
      description: 'Atendemos Belgrano R, Belgrano C y zonas aledañas.'
    }
  ];
</script>

<svelte:head>
  <title>Electricista en Belgrano - Servicio Profesional 24/7</title>
  <meta name="description" content="Electricista matriculado en Belgrano, CABA. Atención inmediata, servicio local y expertos en edificios residenciales. ¡Presupuesto sin cargo!" />
  <meta property="og:title" content="Electricista en Belgrano - Servicio Profesional 24/7" />
  <meta property="og:description" content="Electricista matriculado en Belgrano, CABA. Atención inmediata y servicio local." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="%sveltekit.assets%/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Electricista en Belgrano" />
  <meta name="twitter:description" content="Electricista matriculado en Belgrano, CABA. Atención inmediata y servicio local." />
</svelte:head>

<section class="hero">
  <div class="hero-content">
    <h1>Electricista en Belgrano</h1>
    <p>Servicio profesional y matriculado para todo el barrio</p>
    <div class="hero-buttons">
      <Button href="/contacto">Solicitar Presupuesto</Button>
      <Button href="tel:+541162068732" variant="secondary">Llamar Ahora</Button>
    </div>
  </div>
</section>

<section class="features">
  <h2>Nuestros Servicios en Belgrano</h2>
  <div class="features-grid">
    {#each features as feature}
      <ServiceCard {...feature} />
    {/each}
  </div>
</section>

<section class="about">
  <div class="about-content">
    <h2>Electricista de Confianza en Belgrano</h2>
    <p>Brindamos servicio eléctrico profesional en todo Belgrano, especializándonos en:</p>
    <ul>
      <li>Mantenimiento de edificios residenciales</li>
      <li>Instalaciones eléctricas en locales comerciales de Av. Cabildo</li>
      <li>Soluciones para casas antiguas de Belgrano R</li>
      <li>Atención de urgencias eléctricas 24/7</li>
    </ul>
    <p>Conocemos las características particulares de las construcciones del barrio y ofrecemos soluciones adaptadas a cada necesidad.</p>
  </div>
</section>

<section class="cta">
  <div class="cta-content">
    <h2>¿Necesitás un electricista en Belgrano?</h2>
    <p>Estamos disponibles las 24 horas para resolver cualquier emergencia eléctrica.</p>
    <Button href="/contacto">Contactanos Ya</Button>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
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
    margin-bottom:  2rem;
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