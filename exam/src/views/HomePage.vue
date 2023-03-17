<template>
    <div class="container">
      <div class="profile">
        <img class="avatar" :src="user.avatar_url" :alt="user.name" />
        <h1>{{ user.name }}</h1>
        <p>{{ user.bio }}</p>
        <p class="info"><span class="label">Location:</span> {{ user.location }}</p>
        <p class="info"><span class="label">Followers:</span> {{ user.followers }}</p>
        <p class="info"><span class="label">Following:</span> {{ user.following }}</p>
        <p class="info"><span class="label">Repositories:</span> {{ user.public_repos }}</p>
        <a class="btn" :href="user.html_url" target="_blank">View on GitHub</a>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    async created() {
      try {
        const response = await fetch(`https://api.github.com/users/wongiro`);
        this.user = await response.json();
      } catch (error) {
        console.error(error);
      }
    }
}
</script>
  
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  
body {
    font-family: "Open Sans", sans-serif;
    background-color: #f7f7f7;
}
  
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: auto;
}
  
 .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    max-width: 700px;
    width: 100%;
}
  
.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 5px solid #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
  
h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
}
  
p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
    text-align: center;
}
  
.info {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 0.5rem;
    text-align: center;
}
  
.label {
    font-weight: 700;
    color: #333;
}
  
.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    border-radius: 2rem 3rem;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 1.5rem;
    transition: background-color 0.3s ease;
}
  
.btn:hover {
    background-color: #000;
}

/* MEDAI QUERY */

@media only screen and (max-width: 768px) {
  .profile {
    padding: 15px;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .info {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-size: 1rem;
  }
  
  .btn {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
  