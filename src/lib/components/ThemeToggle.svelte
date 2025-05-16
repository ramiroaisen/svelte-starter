<script lang="ts">
  import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
  import { theme } from '$lib/stores/theme';
  import Icon from './Icon.svelte';

  function toggleTheme() {
    theme.update(t => t === 'light' ? 'dark' : 'light');
  }
</script>

<button on:click={toggleTheme} class="theme-toggle">
  <Icon path={$theme === 'light' ? mdiWeatherNight : mdiWeatherSunny} />
</button>

<style>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--text-color);
    transition: transform 0.2s ease;
  }

  .theme-toggle:hover {
    transform: scale(1.1);
  }
</style>