import bmo from './assets/cards/bmo.jpg';
import cake from './assets/cards/cake.jpg';
import finn from './assets/cards/finn.jpg';
import gunter from './assets/cards/gunter.jpg';
import iceKing from './assets/cards/ice-king.jpg';
import jake from './assets/cards/jake-the-dog.jpg';
import marceline from './assets/cards/marceline.jpg';
import peppermint from './assets/cards/peppermint-buttler.jpg';
import princessBg from './assets/cards/princess-bubble-gum.jpg';

const characters = [
    {
        id: genId(),
        name: 'finn',
        src: finn,
        isClicked: false
    },
    {
        id: genId(),
        name: 'Jake The Dog',
        src: jake,
        isClicked: false
    },
    {
        id: genId(),
        name: 'Princess Bubble Gum',
        src: princessBg,
        isClicked: false
    },
    {
        id: genId(),
        name: 'Ice King',
        src: iceKing,
        isClicked: false
    },
    {
        id: genId(),
        name: 'BMO',
        src: bmo,
        isClicked: false
    },
    {
        id: genId(),
        name: 'Cake',
        src: cake,
        isClicked: false
    },
    {
        id: genId(),
        name: 'Marceline',
        src: marceline,
        isClicked: false
    },
    {
        id: genId(),
        name: 'Peppermint Buttler',
        src: peppermint,
        isClicked: false
    },
    {
        id: genId(),
        name: 'Gunter',
        src: gunter,
        isClicked: false
    },
]

function genId() {
    return crypto.randomUUID();
}

export default characters;