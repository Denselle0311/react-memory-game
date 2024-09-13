import finn from './assets/cards/finn.jpg';

const characters = [
    {
        id: genId(),
        name: 'finn',
        src: finn,
        isClicked: false
    }
]

function genId() {
    return crypto.randomUUID();
}

export default characters;