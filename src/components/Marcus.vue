<template>
  <div class="marcus">
    <div class="column is-4">
      <div class="card is-3">
        <div class="card-image">
          <figure class="image">
            <img src="https://pbs.twimg.com/profile_banners/438260562/1398263933/1500x500" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://pbs.twimg.com/profile_images/458931292956938240/SGi0VIw9_400x400.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-3">Marcus Rehn</p>
              <a href="https://twitter.com/RehnMarcus" class="subtitle is-6">@RehnMarcus</a>
            </div>
          </div>

          <div class="content">
            This is the first draft for my website. The front-end is made with Vue 2.0 and Bulma.
            The backend is just the Github API, minimal effort required from me.
            <br>
            <small>	&copy; Marcus Rehn </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marcus',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.marcus .column.is-4{
  margin: 0 auto;
}
</style>
