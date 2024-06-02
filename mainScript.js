import { 
    renderAboutMeSection,
    renderEducationInfo, 
    renderGamesInfo, 
    renderJobInfo, 
    renderResumeButton, 
    renderSkills,
} from './scripts/components/index.js'
import { ENGLISH_LANGUAGE,SPANISH_LANGUAGE } from './scripts/constants.js';
import { globalData, setTextOthers } from './scripts/global.js';
import { hideLoading } from './scripts/utils/index.js';

function changeLanguage(e){
    const language = e.currentTarget.className.includes("active") ? ENGLISH_LANGUAGE : SPANISH_LANGUAGE;
    globalData['language'] = language;
    setTextOthers();
    loadPage()
}

function setSwitchFunction() {
    const boton = document.getElementById('switch');
    boton.addEventListener('click', changeLanguage);
}

const loadPage = () => {
    renderAboutMeSection();
    renderResumeButton();
    renderSkills();
    renderEducationInfo();
    renderJobInfo();
    renderGamesInfo();
    hideLoading();
}

setSwitchFunction()
loadPage()
