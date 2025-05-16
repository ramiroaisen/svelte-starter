<script lang="ts">
  export let path: string;
  export let size = "24px";
</script>

<svg viewBox="0 0 24 24" width={size} height={size}>
  <path d={path} fill="currentColor"/>
</svg>