import Vue from 'vue';
import Repl from './Repl.vue';

const Components = {
  Repl
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
