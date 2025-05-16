<script lang="ts">
  import { mdiLightningBolt, mdiShieldCheck, mdiClockFast, mdiCashMultiple, mdiAccountHardHat, mdiHandshake, mdiStar } from '@mdi/js';
  import Button from '$lib/components/Button.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import TestimonialCard from '$lib/components/TestimonialCard.svelte';
  import Icon from '$lib/components/Icon.svelte';

  const features = [
    {
      icon: mdiShieldCheck,
      title: 'Garantía Personalizada',
      description: 'Ofrecemos garantía personalizada en todos nuestros servicios, asegurando tu tranquilidad y satisfacción.'
    },
    {
      icon: mdiCashMultiple,
      title: 'Presupuesto Gratis',
      description: 'Evaluamos tu situación y te brindamos un presupuesto detallado sin costo ni compromiso.'
    },
    {
      icon: mdiAccountHardHat,
      title: 'Personal Matriculado',
      description: 'Nuestro equipo está compuesto por profesionales matriculados con amplia experiencia.'
    },
    {
      icon: mdiHandshake,
      title: 'Servicio Empático',
      description: 'Respetamos tu espacio y dejamos todo impecable después de cada trabajo.'
    },
    {
      icon: mdiClockFast,
      title: 'Servicio Rápido',
      description: 'Respondemos con rapidez y puntualidad a todas tus necesidades eléctricas.'
    },
    {
      icon: mdiLightningBolt,
      title: 'Calidad Garantizada',
      description: 'Utilizamos materiales de primera calidad y técnicas avanzadas en cada trabajo.'
    }
  ];

  const testimonials = [
    {
      name: 'Pedro',
      service: 'Mantenimiento de Tableros Eléctricos',
      content: 'Excelente servicio de mantenimiento de tableros. Fueron muy minuciosos y detectaron problemas que ni siquiera sabía que tenía. Ahora me siento mucho más seguro.',
      stars: Array(5).fill(mdiStar)
    },
    {
      name: 'Estefania',
      service: 'Instalación de Iluminación LED',
      content: 'Los chicos llegaron puntualmente y se ocuparon de todo. Noté un ahorro de energía significativo desde que hicimos el cambio.',
      stars: Array(5).fill(mdiStar)
    },
    {
      name: 'Susana',
      service: 'Reparación de Cortocircuitos',
      content: 'No puedo agradecer suficiente por la rápida y buena reparación. En menos de una hora, solucionaron el problema y me dieron consejos útiles.',
      stars: Array(5).fill(mdiStar)
    }
  ];
</script>

<svelte:head>
  <title>Electricista Matriculado en CABA - Servicio Profesional 24/7</title>
  <meta name="description" content="Electricista matriculado en CABA con años de experiencia. Servicio profesional 24/7, presupuesto sin cargo. Soluciones eléctricas confiables y seguras." />
</svelte:head>

<section class="hero">
  <div class="hero-content">
    <h1>Electricista Matriculado en CABA</h1>
    <p>Profesional matriculado con años de experiencia: cuidadoso, rápido y eficiente. Resultados duraderos y de calidad.</p>
    <div class="hero-buttons">
      <Button href="/contacto">Solicitar Presupuesto</Button>
      <Button href="tel:+541162068732" variant="secondary">Llamar Ahora</Button>
    </div>
  </div>
</section>

<section class="features">
  <h2>¿Por qué elegirnos?</h2>
  <div class="features-grid">
    {#each features as feature}
      <ServiceCard {...feature} />
    {/each}
  </div>
</section>

<section class="testimonials">
  <h2>Lo que dicen nuestros clientes</h2>
  <div class="testimonials-grid">
    {#each testimonials as testimonial}
      <div class="testimonial-wrapper">
        <div class="stars">
          {#each testimonial.stars as star}
            <Icon path={star} size="24px" />
          {/each}
        </div>
        <TestimonialCard {...testimonial} />
      </div>
    {/each}
  </div>
</section>

<section class="cta">
  <div class="cta-content">
    <h2>¿Necesitás un electricista urgente?</h2>
    <p>Estamos disponibles las 24 horas para resolver cualquier emergencia eléctrica.</p>
    <Button href="/contacto">Contactanos Ya</Button>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-position: center;
    color: white;
    margin: -2rem 0 2rem;
    min-height: 80vh;
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
    line-height: 1.2;
  }

  .hero p {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  section {
    margin-bottom: 4rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .testimonial-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .stars {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    color: var(--primary-color);
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

  @media (max-width: 768px) {
    .hero-content {
      padding: 4rem 1rem;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .features-grid,
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
</style>