<template>
    <div class="error-page">
      <h1 class="error-title">404 Error: Page Not Found</h1>
      <p class="error-text">Oops! The page you are looking for doesn't exist. Please check the URL and try again.</p>
      <router-link to="/" class="error-link">Back to my Repositories</router-link>
    </div>
</template>
  

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: sans-serif;
  background-color: #f8f8f8;
}

.error-title {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
}

.error-text {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #555;
}

.error-link {
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 2rem 3rem;
  transition: all 0.2s ease-in-out;
}

.error-link:hover {
  background-color: #555;
}

</style>