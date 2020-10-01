import Vue from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faPause,
  faPlay,
  faForward,
  faBackward
} from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

Vue.config.productionTip = false

library.add(faUserSecret, faPause, faPlay, faForward, faBackward);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
