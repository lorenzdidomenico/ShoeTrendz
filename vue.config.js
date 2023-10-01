const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3001", // L'URL del server json-server
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      modules: [
        "node_modules", // Aggiungi 'node_modules' al percorso dei moduli
      ],
    },
  },
});

module.exports = {
  // ... altre configurazioni ...
};
