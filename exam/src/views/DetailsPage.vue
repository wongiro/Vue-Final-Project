<template>
    <div class="container">
      <h1 class="title">{{ repository.name }}</h1>
      <p class="description">{{ repository.description }}</p>
      <div class="details">
        <p class="language">Language: {{ repository.language }}</p>
        <p class="stars">Stars: {{ repository.stargazers_count }}</p>
        <p class="forks">Forks: {{ repository.forks_count }}</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        repository: {}
      }
    },
    async created() {
      try {
        const response = await fetch(`https://api.github.com/repositories/${this.$route.params.id}`);
        this.repository = await response.json();
      } catch (error) {
        console.error(error);
      }
    }
  }
</script>
  
<style>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}
  
.title {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}
  
  .description {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #555;
}
  
.details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}
  
.language,
.stars,
.forks {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
}
  
.stars::before,
.forks::before {
    display: inline-block;
    margin-right: 0.5rem;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}
  
.stars::before {
    content: "\f005";
    color: #ffd700;
}
  
.forks::before {
    content: "\f126";
    color: #888;
}

/* Media queries for responsive layout */

@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
  .title {
    font-size: 1.5rem;
  }
  .description {
    font-size: 1rem;
  }
  .language,
  .stars,
  .forks {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 5px;
  }
  .title {
    font-size: 1.2rem;
  }
  .description {
    font-size: 0.9rem;
  }
  .language,
  .stars,
  .forks {
    font-size: 0.9rem;
  }
}
</style>
  