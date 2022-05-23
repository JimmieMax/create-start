const Home = () => import('@/views/home/index.vue');

export default [
  {
    path: '/',
    component: Home,
    name: 'main',
    meta: {
      text: '首页', icon: 'icon-shouye', position: -1, disableInBreadCrumb: true,
    }
  },
];
