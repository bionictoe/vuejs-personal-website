<template>
    <div class="project">
      {{this.$route.params.project}}
      <p v-html="this.projectDescription">{{this.projectDescription}}</p>
    </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'project',
  data() {
    return {
      projectDescription: '',
    };
  },
  updated() {
    console.log('updated');
    this.fetchData();
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get(`repos/rehnen/${this.$route.params.project}/readme`)
        .then((result) => {
          // const base64 = result.data.content;
          const stringified = atob(result.data.content);
          this.projectDescription = this.makeItMarkdown(stringified);
        })
        .catch(() => {
          this.projectDescription = `
            <h1>This project has no description</h1>
          `;
        });
    },
    makeItMarkdown(str) {
      return marked(str);
    },
  },
};
</script>

<style scoped>

</style>
