import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { io } from "socket.io-client";
import VueSocketIOExt from "vue-socket.io-extended";

export const socket = io(process.env.VUE_APP_SOCKET_IO_URL || "localhost:443", {
  transports: ["websocket"],
  autoConnect: false
});

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
