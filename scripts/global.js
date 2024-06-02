import { BASE_URL, DEFAULT_LANGUAGE } from "./constants.js";
import { getTextOthers } from "./services.js";
import { addImageToElement, changeElementText } from "./utils/index.js";

export let globalData = {}

function getGlobalData() {
    setLanguage();
    setTextOthers();
}

function setLanguage() {
    globalData['language'] = DEFAULT_LANGUAGE
}

export async function setTextOthers() {
    const data = await getTextOthers();
    const textOthersData = data.attributes;
    getTexts(textOthersData);
    setTexts();
    setBackground();
}

function getTexts(data) {
    getPresentText(data);
    getFullName(data);
    getProfession(data);
    getTabnavName(data);
    getPageTitles(data);
    getPageSubTitles(data);
    getBackground(data);
}

function getPresentText(data) {
    globalData['present_text'] = data.present_text;
}

function getFullName(data) {
    globalData['fullname'] = data.full_name;
}

function getProfession(data) {
    globalData['profession'] = data.profession;
}

function getTabnavName(data) {
    globalData['tabnav_name'] = data.tabnav_name;
}

function getPageTitles(data) {
    const page_titles = {
        home: data?.page_titles.home,
        about_me: data?.page_titles.about_me,
        experience: data?.page_titles.experience,
        projects: data?.page_titles.projects,
    }

    globalData["page_titles"] = page_titles;
}

function getPageSubTitles(data) {
    const page_subtitles = {
        skills: data.page_subtitles.skills,
        education: data.page_subtitles.education,
        works: data.page_subtitles.works,
    }

    globalData["page_subtitles"] = page_subtitles;
}

function getBackground(data) {
    globalData["background"] = BASE_URL + data.background.data.attributes.url;
}

function setTexts() {
    setTitles();
    setSubTitles();
    changeElementText('name', globalData.tabnav_name);
    changeElementText('fullname', globalData.fullname);
    changeElementText('jobtitle', globalData.profession);
    changeElementText('tlt-page', globalData.tabnav_name);
}

function setTitles() {
        changeElementText('nav-home', globalData.page_titles.home);
        changeElementText('nav-about', globalData.page_titles.about_me);
        changeElementText('nav-exp', globalData.page_titles.experience);
        changeElementText('nav-proj', globalData.page_titles.projects);
        
        changeElementText('about-txt', globalData.page_titles.about_me);
        changeElementText('exp-txt', globalData.page_titles.experience);
        changeElementText('prj-txt', globalData.page_titles.projects);
}

function setSubTitles(){
    changeElementText('skills-txt', globalData.page_subtitles.skills);
    changeElementText('education-txt', globalData.page_subtitles.education);
    changeElementText('job-txt', globalData.page_subtitles.works);
}

function setBackground() {
    addImageToElement('home', globalData.background)
}

getGlobalData();
