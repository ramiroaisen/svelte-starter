<script lang="ts">
  export let name: string;
  export let service: string;
  export let content: string;
</script>

<div class="testimonial-card">
  <p class="content">{content}</p>
  <div class="author">
    <div class="avatar">{name[0]}</div>
    <div class="info">
      <h4>{name}</h4>
      <p class="service">{service}</p>
    </div>
  </div>
</div>

<style>
  .testimonial-card {
    background-color: var(--surface-color);
    border-radius: var(--border-radius);
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
    font-style: italic;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .info h4 {
    margin: 0;
    font-size: 1rem;
  }

  .service {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
</style>