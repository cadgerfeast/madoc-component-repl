import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Repl from '@/Repl.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Repl.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        themeType: () => 'light'
      }
    });
  });
  it('should be defined', () => {
    const wrapper = shallowMount(Repl, {
      localVue,
      store,
      propsData: {
        context: {
          projects: [
            {
              files: []
            }
          ]
        }
      }
    });
    expect(wrapper).toBeDefined();
  });
});
