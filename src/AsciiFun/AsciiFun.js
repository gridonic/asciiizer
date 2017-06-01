import Vue from 'vue';
import figlet from 'figlet';
import faker from 'faker/locale/en'

import FontService from './FontService';

const fontService = new FontService();

export default Vue.extend({
    name: 'AsciiFun',
    data() {
        return {
            term: null,
            asciiArt: null,
            fonts: fontService.getAllFonts(),
            selectedFont: fontService.randomFont()
        }
    },
    methods: {
        asciize: function() {
            if (!this.term) {
                return;
            }

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
            this.selectedFont = fontService.randomFont();
            this.term = faker.random.words(2);
        },
        reset: function() {
            this.term = null;
            this.asciiArt = null;
        }
    },
    watch: {
        term: function () {
            this.asciize();
        },
        selectedFont: function () {
            this.asciize();
        }
    }
});
