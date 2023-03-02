//
import config from '~/config';

//* page
import Home from '~/pages/Home';
import AboutPage from '~/pages/AboutPage';
import MenuPage from '~/pages/MenuPage';
import ChefsPage from '~/pages/ChefsPage';
// import BlogPage from '~/pages/BlogPage';
import ContactPage from '~/pages/ContactPage';
import AbsoluteLayout from '~/layouts/AbsoluteLayout/AbsoluteLayout';

//* Public Routes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: AbsoluteLayout,
  },
  {
    path: config.routes.about,
    component: AboutPage,
  },
  {
    path: config.routes.menu,
    component: MenuPage,
  },
  {
    path: config.routes.chefs,
    component: ChefsPage,
  },
  // {
  //   path: config.routes.blog,
  //   component: BlogPage,
  // },
  {
    path: config.routes.contact,
    component: ContactPage,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
