import { BASE_URL } from "../constants.js";
import { getGamesData } from "../services.js";

export const renderGamesInfo = async () => {
    const games = await getGamesData();
    const gamesCard = games.map(game => buildGameComponent(game));
    const gamesList = document.getElementById('games');
    gamesList.innerHTML = gamesCard.join('');
}

const buildGameComponent = (data) => {
    const game = data.attributes;
    const image = `${BASE_URL}${game.image.data.attributes.url}`
    
    return `<div class="col-12 col-md-6 col-xl-4 text-center mt-5 mx-auto">
                <div><a href=${game.link} target="_blank"><img class="img-fluid" src=${image}></a></div>
                <h4 class="mt-3"><b>${game.title}</b></h4>
                <p class="txt-game mx-auto">${game.description}</p>
                <div class="mt-4"><a class="txt-btn-games btn-success p-3 border rounded-pill mt-3" href=${game.link} target="_blank">${game.button_text}</a></div>
            </div>`
}
