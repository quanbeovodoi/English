import config from '~/config';
import Test from '~/layouts/Test';
import AboutUs from '~/pages/AboutUs';
import Blogs from '~/pages/Blogs';
import Cart from '~/pages/CartPage';
import Contact from '~/pages/Contact';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Quiz from '~/pages/Quiz';
import Shops from '~/pages/Shops';
//public routes
const publicRoutes = [
  { path: config.routes.home, component: Home ,layout:'unset'},
  { path: config.routes.profile, component: Profile,layout:'unset'},
  { path: config.routes.shop, component: Shops ,layout:'unset'},
  { path: config.routes.aboutUs, component: AboutUs,layout:'unset'},
  { path: config.routes.quiz, component: Quiz },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.detailProduct, component: Detail ,layout:'unset'},
  { path: config.routes.test, component: Test },
  { path: config.routes.contactUs, component: Contact ,layout:'unset'},
  { path: config.routes.blog, component: Blogs ,layout:'unset'},
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
