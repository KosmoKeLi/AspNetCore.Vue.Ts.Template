import Vue from 'vue';
import Component from 'vue-class-component';
import Dashboard from './dashboard.vue';
import Components from '../../components';
import Store from './store';

@Component({
    components: {
        Dashboard,
        ...Components
    },
    store: Store
})
export class Application extends Vue {
    mounted() {
        console.log('mounted application!', this.$store);
    }
}

new Application({ el: '#app' });