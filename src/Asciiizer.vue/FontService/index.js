import fontFilenames from './fonts.json';

export default class FontService {
    constructor(options) {
        this.fonts = null;
        this.init();
    }

    init() {
        if (this.fonts !== null) {
            return;
        }

        this.fonts = fontFilenames.map(x => x.slice(0, x.length - 4));
    }

    randomFont() {
        return this.fonts[Math.floor(Math.random() * this.fonts.length)];
    }

    getAllFonts() {
        return this.fonts;
    }
}
