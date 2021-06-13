const character1 = document.querySelector('#character1');
const character2 = document.querySelector('#character2');
const character3 = document.querySelector('#character3');
const character4 = document.querySelector('#character4');
const button = document.querySelector('button');

let ids;
let charactersProps = [];

randomCharactersId = () => {
    return Math.floor(Math.random() * 671);
}

getIds = () => {
    ids = [
        randomCharactersId(),
        randomCharactersId(),
        randomCharactersId(),
        randomCharactersId()
    ];
}

getCharactersProps = () => {
    ids.forEach(characterId => { 
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            charactersProps = [
                ...charactersProps,
                {
                    name: res.name,
                    image: res.image
                }
            ];
        })
        .then(() => {
            if (charactersProps.length == 4) {
                indexCharacters();
            }
        })
    });
}

indexCharacters = () => {
    character1.querySelector('img').src = charactersProps[0].image;
    character1.querySelector('img').alt = charactersProps[0].name;
    character1.querySelector('figcaption').innerHTML = charactersProps[0].name;

    character2.querySelector('img').src = charactersProps[1].image;
    character2.querySelector('img').alt = charactersProps[1].name;
    character2.querySelector('figcaption').innerHTML = charactersProps[1].name;

    character3.querySelector('img').src = charactersProps[2].image;
    character3.querySelector('img').alt = charactersProps[2].name;
    character3.querySelector('figcaption').innerHTML = charactersProps[2].name;

    character4.querySelector('img').src = charactersProps[3].image;
    character4.querySelector('img').alt = charactersProps[3].name;
    character4.querySelector('figcaption').innerHTML = charactersProps[3].name;
    charactersProps = [];
}

start = () => {
    getIds();
    getCharactersProps();
}

start();
button.onclick = start;