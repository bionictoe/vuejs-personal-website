import Vue from 'vue';
import Router from 'vue-router';
import Marcus from '@/components/Marcus';
import Projects from '@/components/Projects';
import Project from '@/components/Project';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'is-active',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Marcus',
      component: Marcus,
    },
    {
      path: '/projects/',
      name: 'Projects',
      component: Projects,
      children: [
        {
          path: ':project',
          name: 'project',
          component: Project,
        },
      ],
    },
  ],
});
