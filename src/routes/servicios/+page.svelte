<script lang="ts">
  import { mdiLightningBolt, mdiHomeCircle, mdiFactory, mdiSolarPower, 
    mdiShieldLock, mdiLightbulb, mdiWrench, mdiFlashAlert } from '@mdi/js';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import Button from '$lib/components/Button.svelte';

  const services = [
    {
      icon: mdiHomeCircle,
      title: 'Instalaciones Residenciales',
      description: 'Instalación profesional de cables, tomas de corriente, interruptores, iluminación y paneles eléctricos para tu hogar.'
    },
    {
      icon: mdiWrench,
      title: 'Reparaciones Eléctricas',
      description: 'Solución rápida y eficiente de cortocircuitos, cables sueltos, interruptores defectuosos y otros problemas eléctricos.'
    },
    {
      icon: mdiLightningBolt,
      title: 'Mantenimiento Preventivo',
      description: 'Inspecciones periódicas y mantenimiento preventivo para garantizar el funcionamiento seguro de tus sistemas eléctricos.'
    },
    {
      icon: mdiFactory,
      title: 'Instalaciones Comerciales',
      description: 'Sistemas eléctricos personalizados para locales comerciales, oficinas y negocios, adaptados a tus necesidades específicas.'
    },
    {
      icon: mdiFlashAlert,
      title: 'Servicios de Urgencia 24/7',
      description: 'Atención inmediata para emergencias eléctricas a cualquier hora del día o la noche.'
    },
    {
      icon: mdiLightbulb,
      title: 'Iluminación LED',
      description: 'Instalación de sistemas de iluminación modernos y eficientes, incluyendo luces LED y sistemas de control inteligente.'
    },
    {
      icon: mdiShieldLock,
      title: 'Seguridad Eléctrica',
      description: 'Instalación de sistemas de seguridad, alarmas contra incendios y cámaras de vigilancia.'
    },
    {
      icon: mdiSolarPower,
      title: 'Energía Renovable',
      description: 'Instalación de sistemas solares fotovoltaicos y soluciones de energía renovable para tu hogar o negocio.'
    }
  ];
</script>

<svelte:head>
  <title>Servicios Eléctricos Profesionales en CABA - Electricista Matriculado</title>
  <meta name="description" content="Servicios eléctricos profesionales en CABA. Instalaciones, reparaciones, mantenimiento y más. Atención 24/7 con electricistas matriculados." />
  <meta property="og:title" content="Servicios Eléctricos Profesionales en CABA" />
  <meta property="og:description" content="Servicios eléctricos profesionales en CABA. Instalaciones, reparaciones, mantenimiento y más. Atención 24/7." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="%sveltekit.assets%/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Servicios Eléctricos Profesionales en CABA" />
  <meta name="twitter:description" content="Servicios eléctricos profesionales en CABA. Instalaciones, reparaciones, mantenimiento y más. Atención 24/7." />
</svelte:head>

<section class="hero">
  <div class="hero-content">
    <h1>Nuestros Servicios Eléctricos</h1>
    <p>Soluciones eléctricas profesionales para tu hogar y negocio</p>
  </div>
</section>

<section class="services">
  <div class="services-grid">
    {#each services as service}
      <ServiceCard {...service} />
    {/each}
  </div>
</section>

<section class="cta">
  <div class="cta-content">
    <h2>¿Necesitás un presupuesto?</h2>
    <p>Te ofrecemos una evaluación detallada sin cargo ni compromiso</p>
    <div class="cta-buttons">
      <Button href="/contacto">Solicitar Presupuesto</Button>
      <Button href="tel:+541162068732" variant="secondary">Llamar Ahora</Button>
    </div>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 4rem 1rem;
    text-align: center;
    margin: -2rem -1rem 2rem;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.25rem;
    opacity: 0.9;
  }

  .services {
    padding: 2rem 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .cta {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    padding: 4rem 1rem;
    text-align: center;
    margin: 0 -1rem -2rem;
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

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .hero p {
      font-size: 1.1rem;
    }

    .cta-buttons {
      flex-direction: column;
    }
  }
</style>