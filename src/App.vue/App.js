import Vue from 'vue';

export default Vue.extend({
    components: {
        // @see https://vuejs.org/v2/guide/components.html#Async-Components
        Asciiizer: () => System.import('../Asciiizer')
    }
});
