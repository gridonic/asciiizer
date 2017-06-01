import Vue from 'vue';

export default Vue.extend({
    name: 'AsciiFun',
    data() {
        return {
            term: 'Start Typing',
            asciiArt: null
        }
    },
    methods: {
        asciize: function() {
            this.asciiArt = `${this.term} asciized…`;
        },
        reset: function() {
            this.term = null;
            this.asciiArt = null;
        }
    }
});
