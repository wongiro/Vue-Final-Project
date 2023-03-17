<template>
    <div class="container">
      <h1>All Repositories</h1>
      <ul class="repo-list">
        <li v-for="repo in displayedRepos" :key="repo.id">
            <router-link :to="{ name: 'DetailsPage', params: { id: repo.id } }">
          {{ repo.name }}
        </router-link>
        </li>
      </ul>
      <div class="pagination">
        <button class="prev" :disabled="currentPage === 1" @click="currentPage--">Prev</button>
        <button class="next" :disabled="currentPage * perPage >= allRepos.length" @click="currentPage++">Next</button>
      </div>
    </div>
</template>
  
<script>
    export default {
      data() {
        return {
          allRepos: [],
          currentPage: 1,
          perPage: 5
        }
      },
      async created() {
        try {
          const USERNAME = 'wongiro';
          const response = await fetch(`https://api.github.com/users/${ USERNAME }/repos`);
          this.allRepos = await response.json();
        } catch (error) {
          console.error(error);
        }
      },
      computed: {
        displayedRepos() {
          const startIndex = (this.currentPage - 1) * this.perPage;
          const endIndex = startIndex + this.perPage;
          return this.allRepos.slice(startIndex, endIndex);
        }
      },


    }
</script>
  
<style>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}
  
h1 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}
  
.repo-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
  
.repo-list li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
}
  
.repo-list li a {
    color: #333;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}
  
.repo-list li a:hover {
    color: #0077b6;
}
  
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
  
.pagination button.prev{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 1rem 2rem;
    background-color: #0077b6;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.pagination button.next{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 2rem 1rem;
    background-color: #0077b6;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}
  
.pagination button:hover {
    background-color: #023e8a;
}
  
.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Media queries */
@media (max-width: 768px) {
    .container {
      max-width: 90%;
    }
}

@media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }

    .repo-list li {
      flex-direction: column;
      text-align: center;
    }

    .repo-list li a {
      font-size: 1rem;
    }

    .pagination {
      margin-top: 1.5rem;
    }

    .pagination button {
      font-size: 1rem;
      padding: 0.25rem 0.5rem;
      margin: 0 0.25rem;
      border-radius: 0
    }
}
</style>
  