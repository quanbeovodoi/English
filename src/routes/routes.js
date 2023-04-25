import config from '~/config';
import AboutUs from '~/pages/AboutUs';
import Cart from '~/pages/CartPage';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Quiz from '~/pages/Quiz';
import Shops from '~/pages/Shops';
//public routes
const publicRoutes = [
  { path: config.routes.home, component: Home ,layout:'unset'},
  { path: config.routes.profile, component: Profile },
  { path: config.routes.shop, component: Shops },
  { path: config.routes.aboutUs, component: AboutUs },
  { path: config.routes.quiz, component: Quiz },
  { path: config.routes.cart, component: Cart },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
