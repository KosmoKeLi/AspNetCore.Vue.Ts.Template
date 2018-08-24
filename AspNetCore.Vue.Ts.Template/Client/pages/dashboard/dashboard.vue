<template>
    <div>
        <slot></slot>   
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Vuex, { StoreOptions } from 'vuex';
    import Component from 'vue-class-component';
    import { Provide } from 'vue-property-decorator';
    import { State } from 'vuex-class';
    import { TestState } from './store/test/types'

    @Component
    export default class Dashboard extends Vue {
        @State('version') version!: string;
        @State('test') test!: TestState;

        mounted() {
            console.log(this.version);
            console.log(this.test);
        }
    }

    Vue.component('dashboard', Dashboard);
</script>
<style scoped lang="scss">
    div {
        p {
            font-size: 2rem;
            color: green;
        }
    }
</style>