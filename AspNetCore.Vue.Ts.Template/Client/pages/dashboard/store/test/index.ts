import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { TestState } from './types';
import { RootState } from '../';

export const state: TestState = {
    testValue: 'this is a state value from test-state'
};

const namespaced: boolean = true;

export const test: Module<TestState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};