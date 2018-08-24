<template>
    <div>
        <h1>Counter</h1>
        <p>{{version}}</p>
        <p>This is a simple example of a Vue.js component & Vuex</p>
        <p>
            Auto count: <strong>{{ autoCount }}</strong>
        </p>
        <button @click="incrementCounter()">Increment</button>
        <button @click="resetCounter()">Reset</button>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Vuex, { StoreOptions } from 'vuex';
    import Component from 'vue-class-component';
    import { Provide } from 'vue-property-decorator';
    import { State } from 'vuex-class';
    
    @Component
    export default class CounterExample extends Vue {
        @Provide() autoCount: number = 0;
        @Provide() currentCount: number = 0;

        @State('version') version!: string;

        mounted() {
            
        }

        incrementCounter() {
            var counter = this.currentCount + 1;
            this.setCounter({ counter: counter });
        }

        resetCounter() {
            this.setCounter({ counter: 0 });
            this.autoCount = 0;
        }

        setCounter(val: { counter: number }) {
            this.currentCount = val.counter;
        }

        created() {
            setInterval(() => {
                this.autoCount += 1
            }, 1000)
        }
    }

    Vue.component('counter-example', CounterExample);
</script>
<style>
</style>