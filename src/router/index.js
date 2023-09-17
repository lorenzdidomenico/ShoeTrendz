import { createRouter, createWebHashHistory } from "vue-router";
import ShoesList from "../views/ShoesList.vue";
import ShoesDetails from "../views/ShoesDetails.vue";
import CartView from "../views/CartView.vue";

const routes = [
  {
    path: "/",
    name: "shoes-list",
    component: ShoesList,
  },
  {
    path: "/shoes/:id",
    name: "shoes-details",
    component: ShoesDetails,
    props: true,
  },
  {
    path: "/carrello",
    name: "carrello",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
