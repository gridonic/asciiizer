import Vue from 'vue';
import figlet from 'figlet';
import faker from 'faker/locale/en'

import fontFilenames from './fonts.json';

console.log(faker);

const fonts = fontFilenames.map(x => x.slice(0, x.length - 4));

export default Vue.extend({
    name: 'AsciiFun',
    data() {
        return {
            term: 'Start Typing',
            asciiArt: null,
            fonts,
            selectedFont: this.randomFont()
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
        random: function() {
            this.selectedFont = this.randomFont();
            this.term = faker.random.words(2);
        },
        reset: function() {
            this.term = null;
            this.asciiArt = null;
        },
        randomFont: function () {
            return fonts[Math.floor(Math.random() * fonts.length)];
        }
    },
    watch: {
        selectedFont: function () {
            this.asciize();
        }
    }
});
