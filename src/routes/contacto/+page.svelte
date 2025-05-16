<script lang="ts">
  import { mdiPhone, mdiWhatsapp, mdiEmail, mdiMapMarker } from '@mdi/js';
  import Icon from '$lib/components/Icon.svelte';
  import Button from '$lib/components/Button.svelte';

  const contactMethods = [
    {
      icon: mdiPhone,
      title: 'Teléfono',
      description: 'Llamanos las 24 horas',
      action: 'tel:+541162068732',
      actionText: 'Llamar Ahora'
    },
    {
      icon: mdiWhatsapp,
      title: 'WhatsApp',
      description: 'Escribinos por WhatsApp',
      action: 'https://wa.me/541162068732',
      actionText: 'Enviar Mensaje'
    },
    {
      icon: mdiEmail,
      title: 'Email',
      description: 'Contactanos por email',
      action: 'mailto:info@electricistacaba.com',
      actionText: 'Enviar Email'
    },
    {
      icon: mdiMapMarker,
      title: 'Zona de Cobertura',
      description: 'CABA y alrededores',
      action: '/servicios',
      actionText: 'Ver Servicios'
    }
  ];
</script>

<svelte:head>
  <title>Contacto - Electricista Matriculado en CABA</title>
  <meta name="description" content="Contactá a nuestro equipo de electricistas matriculados en CABA. Atención 24/7, presupuesto sin cargo. Respuesta rápida garantizada." />
  <meta property="og:title" content="Contacto - Electricista Matriculado en CABA" />
  <meta property="og:description" content="Contactá a nuestro equipo de electricistas matriculados en CABA. Atención 24/7, presupuesto sin cargo." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="%sveltekit.assets%/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contacto - Electricista Matriculado en CABA" />
  <meta name="twitter:description" content="Contactá a nuestro equipo de electricistas matriculados en CABA. Atención 24/7, presupuesto sin cargo." />
</svelte:head>

<section class="hero">
  <div class="hero-content">
    <h1>Contactanos</h1>
    <p>Estamos disponibles las 24 horas para ayudarte</p>
  </div>
</section>

<section class="contact-methods">
  <div class="methods-grid">
    {#each contactMethods as method}
      <div class="contact-card">
        <div class="icon-wrapper">
          <Icon path={method.icon} size="32px" />
        </div>
        <h3>{method.title}</h3>
        <p>{method.description}</p>
        <Button href={method.action}>{method.actionText}</Button>
      </div>
    {/each}
  </div>
</section>

<section class="coverage">
  <h2>Zonas de Cobertura</h2>
  <div class="zones">
    <div class="zone">
      <h3>Zona Norte</h3>
      <ul>
        <li>Belgrano</li>
        <li>Núñez</li>
        <li>Palermo</li>
        <li>Recoleta</li>
      </ul>
    </div>
    <div class="zone">
      <h3>Zona Centro</h3>
      <ul>
        <li>Almagro</li>
        <li>Balvanera</li>
        <li>Caballito</li>
        <li>Villa Crespo</li>
      </ul>
    </div>
    <div class="zone">
      <h3>Zona Sur</h3>
      <ul>
        <li>Barracas</li>
        <li>La Boca</li>
        <li>San Telmo</li>
        <li>Parque Patricios</li>
      </ul>
    </div>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
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

  .contact-methods {
    padding: 2rem 0;
  }

  .methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .contact-card {
    background-color: var(--surface-color);
    border-radius: var(--border-radius);
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-5px);
  }

  .icon-wrapper {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  .contact-card h3 {
    margin-bottom: 0.5rem;
  }

  .contact-card p {
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  .coverage {
    padding: 4rem 0;
    background-color: var(--surface-color);
    margin: 0 -1rem -2rem;
  }

  .coverage h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .zones {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  .zone h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .zone ul {
    list-style: none;
    padding: 0;
  }

  .zone li {
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .hero p {
      font-size: 1.1rem;
    }

    .zones {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
</style>