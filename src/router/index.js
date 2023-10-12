import { createRouter, createWebHashHistory } from "vue-router";
import ShoesList from "../views/ShoesList.vue";
import ShoesDetails from "../views/ShoesDetails.vue";
import CartView from "../views/CartView.vue";
import ProfileView from "../views/ProfileView.vue";
import CreateProfile from "../views/CreateProfile.vue";
import indexView from "../views/indexView.vue";
import ChechOut from "../views/ChechoutView.vue";
import Pagamento from "../views/PagamentoView.vue";

const routes = [
  {
    path: "/shoes-list",
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
    path: "/",
    name: "indexView",
    component: indexView,
  },
  {
    path: "/chechOut",
    name: "chechOut",
    component: ChechOut,
  },
  {
    path: "/pagamento",
    name: "pagamento",
    component: Pagamento,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
