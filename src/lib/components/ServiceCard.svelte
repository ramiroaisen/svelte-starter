<script lang="ts">
  import Icon from './Icon.svelte';
  
  export let title: string;
  export let description: string;
  export let icon: string;
</script>

<div class="service-card">
  <div class="icon-wrapper">
    <Icon path={icon} size="32px" />
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .service-card {
    background-color: var(--surface-color);
    border-radius: var(--border-radius);
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

  h3 {
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  p {
    color: var(--text-color);
    opacity: 0.9;
    line-height: 1.6;
  }
</style>