<script lang="ts">
  import { onMount } from 'svelte';
  
  export let variant: 'primary' | 'secondary' = 'primary';
  export let href: string | undefined = undefined;
  
  let ripples: HTMLSpanElement[] = [];
  let button: HTMLElement;
  
  function createRipple(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    
    const ripple = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`;
    ripple.classList.add('ripple');
    
    ripples = [...ripples, ripple];
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripples = ripples.filter(r => r !== ripple);
      element.removeChild(ripple);
    }, 1000);
  }
</script>

{#if href}
  <a {href} class="btn {variant}" on:click={createRipple} bind:this={button}>
    <slot />
  </a>
{:else}
  <button class="btn {variant}" on:click={createRipple} bind:this={button}>
    <slot />
  </button>
{/if}

<style>
  .btn {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: transform 0.2s ease;
    font-family: var(--font-primary);
  }

  .primary {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }

  .secondary {
    background-color: var(--surface-color);
    color: var(--text-color);
    border: 2px solid var(--primary-color);
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  :global(.ripple) {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    background-color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>