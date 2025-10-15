import flags from './model/flags.js';

function createFlagcards(flags){
    console.log(flags.image)
    return `<div id = "flags">
            <img src="${flags.image}">
            <h3 class="pais">${flags.name}</h3>
        </div>`;
};

const flagcards = document.querySelector('#content');

flags.forEach((flagcard) => {
    let card = createFlagcards(flagcard);
    flagcards.insertAdjacentHTML('beforeend', card);
});