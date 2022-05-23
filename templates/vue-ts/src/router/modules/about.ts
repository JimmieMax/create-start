const About = () => import('@/views/about/index.vue');

export default [
  {
    path: '/about',
    component: About,
    name: 'main',
    meta: {
      text: 'About', icon: 'icon-shouye', position: -1, disableInBreadCrumb: true,
    }
  },
];
