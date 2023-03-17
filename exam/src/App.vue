<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/repo">Repositories</router-link>
    <router-link to="/details">Repository Details</router-link>
  </div>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  height: 100%;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  gap: 2.5rem;
}

#nav a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  margin: 0 10px;
}

#nav a:hover {
  color: #555;
}

#nav a.router-link-exact-active {
  border: 2px solid #333;
  background-color: #333;
  color: #f8f8f8;
  border-radius: 1rem 2rem;
  padding: 5px;
}
</style>
