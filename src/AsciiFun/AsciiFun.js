import Vue from 'vue';
import figlet from 'figlet';

import fontFilenames from './fonts.json';

const fonts = fontFilenames.map(x => x.slice(0, x.length - 4));

export default Vue.extend({
    name: 'AsciiFun',
    data() {
        return {
            term: 'Start Typing',
            asciiArt: null,
            fonts,
            selectedFont: fonts[Math.floor(Math.random() * fonts.length)]
        }
    },
    methods: {
        asciize: function() {
            figlet(this.term, {
                font: this.selectedFont
            }, (err, data) => {
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
