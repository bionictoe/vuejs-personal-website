<template>
    <div class="about content">
      <h1>In case you were wondering</h1>
      <hello></hello>
    </div>
</template>
<script>

import Hello from './Marcus';

export default {
  name: 'about',
  data() {
    return {
    };
  },
  components: { Hello },
};
</script>

<style scoped>

</style>
