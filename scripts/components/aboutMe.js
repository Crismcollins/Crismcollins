import { BASE_URL } from "../constants.js";
import { getAboutMe } from "../services.js";

export const renderAboutMeSection = async () => {
    const aboutMe = await getAboutMe();
    const aboutMeElement = document.getElementById('about-me');
    const aboutMeInfoElement = document.getElementById('about-me-info');
    const aboutMeComponent = buildAboutMeComponent(aboutMe);
    const aboutMeInfoComponent = buildAboutMeInfoComponent(aboutMe);
    aboutMeElement.innerHTML = aboutMeComponent;
    aboutMeInfoElement.innerHTML = aboutMeInfoComponent;
}

const buildAboutMeComponent = (data) => {
    const me = data.attributes;
    const photo =  BASE_URL + me.photo.data.attributes.url;
    const gmail_image =  BASE_URL + me.gmail_image.data.attributes.url;
    const linkedin_image =  BASE_URL + me.linkedin_image.data.attributes.url;

    return `<img class="me" src="${photo}" height="256" width="200">
            <div class="rrss text-center">
                <a class="mail px-1 mr-1" href="mailto:${me.email}"><img src="${gmail_image}" height="64" width="64"></a>
                <a class="mail px-1 ml-1" href="${me.linkedin_url}" target="_blank"><img src="${linkedin_image}" height="64" width="64"></a>
            </div>`;
}

const buildAboutMeInfoComponent = (data) => {
    const me = data.attributes;

    return `<h5 class="card-title">${me.study_title}</h5>
    <p>${me.description}</p>`
}