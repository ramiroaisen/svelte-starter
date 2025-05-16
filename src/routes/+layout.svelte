<script lang="ts">
  import '@fontsource/fira-sans';
  import '@fontsource/montserrat';
  import '../styles/global.css';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="app">
  <header>
    <nav>
      <a href="/" class="logo">⚡ ElectriCABA</a>
      <div class="nav-links">
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
        <ThemeToggle />
      </div>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <p>©2025 Electricista Matriculado CABA. Todos los derechos reservados.</p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    background: var(--primary-color);
    color: var(--text-on-primary);
    padding: 1rem;
  }

  nav {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--text-on-primary);
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .nav-links a {
    color: var(--text-on-primary);
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s ease;
  }

  .nav-links a:hover {
    opacity: 0.8;
  }

  main {
    flex: 1;
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  footer {
    background: var(--primary-color);
    color: var(--text-on-primary);
    padding: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .nav-links {
      flex-direction: column;
    }
  }
</style>