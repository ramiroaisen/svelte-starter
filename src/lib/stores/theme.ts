import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultTheme = browser ? window.localStorage.getItem('theme') ?? 'light' : 'light';

export const theme = writable<'light' | 'dark'>(defaultTheme);

theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  }
});