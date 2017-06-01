import Vue from 'vue';
import figlet from 'figlet';

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
            figlet(this.term, (err, data) => {
                if (err) {
                    console.error(err);
                    this.asciiArt = 'Error…';
                }

                this.asciiArt = data;
            });
        },
        reset: function() {
            this.term = null;
            this.asciiArt = null;
        }
    }
});
