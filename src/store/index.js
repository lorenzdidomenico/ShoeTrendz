import { createStore } from "vuex";

export default createStore({
  state: {
    shoes: [
      {
        id: 1,
        product: "Nike Pegasus 40 'Eliud Kipchoge'",
        brand: "Nike",
        description:
          "Versatile, elastica e amata da sempre, torna la calzata di Pegasus, pensata per aiutarti a raggiungere i tuoi obiettivi. Reattività e supporto neutrale sono invariati, ma di questa versione ti piacerà anche il comfort aumentato nelle zone sensibili del piede, come arco plantare e punta. Che si tratti di una maratona, una sessione di velocità prima che termini la giornata o una gita di gruppo improvvisata, puoi sempre fidarti di questo modello da running su strada, giorno dopo giorno, corsa dopo corsa. Questa versione celebra Eliud Kipchoge che sostiene che non ci sono limiti al suo potenziale. E nemmeno al tuo. In un design ispirato alla sua mentalità, questo modello sfoggia tocchi personali di Eliud per ricordarti di non smettere mai di puntare più in alto.",
        selectedModel: 0,
        external_url:
          "https://www.nike.com/it/t/scarpa-da-running-su-strada-pegasus-40-eliud-kipchoge-3rDG6v/FJ0686-100",
        onSale: true,
        inventory: 10,
        price: 139.99,
        image_url:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff2e824-a8e5-482a-aedf-8a7604c0a401/scarpa-da-running-su-strada-pegasus-40-eliud-kipchoge-3rDG6v.png",
        features: [
          "L'area del tallone è pensata per massimizzare lo spazio di atterraggio e migliorare transizione e resistenza.",
          "Il motivo d'ispirazione waffle aggiunge trazione su strada",
          "Gli intagli di flessione aggiuntivi regalano un movimento fluido al piede",
          "Dislivello tallone-punta: 10 mm",
        ],
      },
      {
        id: 2,
        product: "Nike Dunk Low Retro",
        brand: "Nike",
        description:
          "Creata per il parquet, ma ideale per la città, Nike Dunk Low Retro ritorna con strati esterni fantastici e i colori originali della squadra. Questa icona da basket ricorda le atmosfere anni '80 con una tomaia in pelle di prima qualità, per un look perfetto che non passa inosservato. La tecnologia moderna contribuisce ad assicurare un comfort assolutamente attuale.",
        selectedModel: 0,
        external_url: "https://www.nike.com/it/t/scarpa-dunk-low-retro-QgD9Gv",
        onSale: true,
        inventory: 10,
        price: 119.99,
        image_url:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/scarpa-dunk-low-retro-QgD9Gv.png",
        features: [
          "Tomaia in pelle di alta qualità per un look splendido e brillante.",
          "Moderna intersuola in schiuma per un'ammortizzazione leggera e reattiva.",
          "Collare imbottito e a taglio basso per comfort ed eleganza.",
          "Vivaci blocchi di colore ispirati ai colori originali delle squadre universitarie.",
          "Battistrada in gomma, con classico punto di torsione per il basket, per resistenza, trazione e uno stile leggendario.",
          "Collare a taglio basso.",
          "Suola interna in schiuma.",
          "Inserti traforati sulla punta.",
        ],
      },
      {
        id: 3,
        product: "Air Force 1 x Terror Squad",
        brand: "Nike",
        description:
          "Con i classici non si sbaglia mai. Indossa la tradizione con un look total white che non passa mai di moda.",
        selectedModel: 0,
        external_url:
          "https://www.nike.com/it/t/scarpa-air-jordan-1-mid-5W9lRJ/DV0991-101",
        onSale: true,
        inventory: 10,
        price: 139.99,
        image_url:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/scarpa-air-jordan-1-mid-5W9lRJ.png",
        features: [
          "Pelle vera e sintetica offrono una resistenza e uno stile eccezionali.",
          "La linguetta imbottita e la tomaia interna migliorano il comfort e la sicurezza.",
          "L'iconico logo Air Jordan con ali sulla tomaia richiama il brand storico.",
          "L'unità Air incapsulata nel tallone ti offre l'ammortizzazione leggera che già conosci e ami.",
          "Il battistrada in gomma piena offre una trazione standard.",
          "Logo Swoosh cucito.",
          "SLogo Wings sul collare.",
        ],
      },
    ],
    carrello: 0,
    scarpeNelCarrello: [],
    utente: {
      nome: "Mario",
      cognome: "Rossi",
      eta: 78,
      email: "mario78@pippo.it",
    },
  },
  mutations: {
    AGGIUNGI_CARRELLO: function (state, scarpa) {
      state.carrello++;
      state.scarpeNelCarrello.push(scarpa);
    },
    SVUOTA_CARRELLO: function (state) {
      state.carrello = 0;
      state.scarpeNelCarrello = [];
    },
  },
  actions: {},
  modules: {},
  getters: {
    nomeEsteso: function (state) {
      return state.utente.nome + " " + state.utente.cognome;
    },
    getShoeById: (state) => (id) => {
      return state.shoes[id - 1];
    },
    numeroScarpe: function (state) {
      return state.shoes.length;
    },
    scarpeNelCarrello: (state) => {
      return state.scarpeNelCarrello;
    },
  },
});
