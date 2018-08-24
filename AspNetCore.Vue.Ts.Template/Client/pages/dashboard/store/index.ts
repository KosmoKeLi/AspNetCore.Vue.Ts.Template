import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { test } from './test';

Vue.use(Vuex);

export interface RootState {
    version: string;
}

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0' // a simple property
    },
    modules: {
        test
    }
};

export default new Vuex.Store<RootState>(store);