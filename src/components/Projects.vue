<template>
    <div class="projects">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <ul class="menu-list">
              <li v-for="item in items">
                <router-link :to="'/projects/' + item.name">{{item.name}}</router-link>
              </li>
            </ul>

          </aside>

        </div>
        <div class="column">
            <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.$http.get('users/rehnen/repos')
        .then((result) => {
          this.items = result.data;
        });
    },
  },
};
</script>

<style scoped>

</style>
