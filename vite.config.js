import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        servicios: resolve(__dirname, "servicios.html"),
      },
    },
  },
};
