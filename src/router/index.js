import { createRouter, createWebHashHistory } from "vue-router";
import ShoesList from "../views/ShoesList.vue";
import ShoesDetails from "../views/ShoesDetails.vue";
import CartView from "../views/CartView.vue";
import ProfileView from "../views/ProfileView.vue";
import CreateProfile from "../views/CreateProfile.vue";
import indexView from "../views/indexView.vue";
import ChechOut from "../views/ChechoutView.vue";

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
  {
    path: "/utente",
    name: "utente",
    component: ProfileView,
  },
  {
    path: "/nuovoUtente",
    name: "nuovoUtente",
    component: CreateProfile,
  },
  {
    path: "/index",
    name: "indexView",
    component: indexView,
  },
  {
    path: "/chechOut",
    name: "chechOut",
    component: ChechOut,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
