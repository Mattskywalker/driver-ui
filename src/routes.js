import Error from "./pages/Error";
import Home from "./pages/Home";
import ListDrivers from "./pages/ListDrivers";

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/list',
    exact: true,
    component: ListDrivers,
  },
  {
    path: '/error',
    exact: true,
    component: Error,
  }
]

export default routes;