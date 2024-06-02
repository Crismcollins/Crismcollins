import { BASE_URL } from "../constants.js";
import { getResume } from "../services.js";

export const renderResumeButton = async () => {
    const resume = await getResume();
    const skillsList = document.getElementById('resume-button');
    const resumeButton = buildResumeButton(resume);
    skillsList.innerHTML = resumeButton;
}

const buildResumeButton = (data) => {
    const resume = data.attributes;
    const file =  BASE_URL + resume.file.data.attributes.url;
    return `<a class="btn-success py-3 px-4 border rounded-pill d-block d-lg-inline" href="${file}" download>${resume.text}</a>`;
}