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
        inventory: 15,
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
        inventory: 9,
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
        inventory: 0,
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

      {
        id: 4,
        product: "Nike Air Force 1 '07",
        brand: "Nike",
        description:
          "Segna punti importanti con questo classico leggendario. Unione perfetta di comfort per il parquet e stile per il tempo libero, questo modello originale da basket unisce pelle e morbidi strati esterni in pelle scamosciata per uno stile che non passa inosservato. Le unità Nike Air nascoste e la struttura resistente stile anni Ottanta offrono il comfort che conosci e ami.",
        selectedModel: 0,
        external_url:
          "https://www.nike.com/it/t/scarpa-air-force-1-07-HWPVQ7/FQ7779-100",
        inventory: 10,
        price: 119.99,
        image_url:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/deb6601f-9cab-4564-99d6-ee0349f11d19/scarpa-air-force-1-07-HWPVQ7.png",
        features: [
          "Questa scarpa incarna uno stile resistente e inconfondibile, con cuciture robuste, materiali impeccabili e design preformato della suola.",
          "Originariamente progettata per le prestazioni sul parquet, l'ammortizzazione Nike Air offre un comfort ideale.",
          "Il battistrada in gomma con classico punto di torsione assicura trazione e resistenza eccezionali.",
          "Il collare imbottito a taglio basso dona un look essenziale e una calzata confortevole.",
          "Schiuma nell'intersuola",
          "Inserti traforati sulla punta",
        ],
      },

    ],
    cards: [
      {
        id: 1,
        title: "Spedizione",
        image:
          "https://cdn.topnegozi.it/blog/wp-content/uploads/2020/05/migliori-siti-di-spedizione-online-1.png",
        text: "I Member ShoeTrendz usufruiscono automaticamente della spedizione standard gratuita per ogni ordine; è sufficiente che eseguano l'accesso prima dell'acquisto.",
      },
      {
        id: 2,
        title: "Codici promozionali",
        image:
          "https://www.pngall.com/wp-content/uploads/2016/04/50-Off-Discount-PNG.png",
        text: "Acquista i tuoi articoli preferiti a un prezzo inferiore con i codici promozionali ufficiali Nike. Scopri sconti e promozioni e trova gli articoli perfetti per dare il massimo.Solo come Member Nike puoi accedere a offerte esclusive, codici promozionali Nike e usufruire di consegna e resi gratuiti su ogni ordine.",
      },
      {
        id: 3,
        title: "Sostenibilità",
        image:
          "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/dcd325e9-9bd2-4b67-a1bf-5f44efa03fb5/la-sostenibilit%C3%A0-di-nike-move-to-zero.png",
        text: "Hai dei vecchi articoli inutilizzati da troppo tempo, messi in panchina declassati in serie B e relegati al passato? Potrebbero essere i protagonisti del nostro futuro",
      },
    ],
    totaleSenzaSpedizione:0,
    totaleConSpedizione:0,
    carrello: 0,
    scarpeNelCarrello: [],
  },

  mutations: {
    AGGIUNGI_CARRELLO: function (state, scarpa) {
      state.carrello++;
      state.scarpeNelCarrello.push(scarpa);
    },

    RIMUOVI_DAL_CARRELLO: function (state, scarpa) {
      state.carrello--;
      const index = state.scarpeNelCarrello.findIndex(item => item.id === scarpa.id);
      if (index !== -1) {
        state.scarpeNelCarrello.splice(index, 1);
      }
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

