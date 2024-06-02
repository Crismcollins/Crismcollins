import { getEducationData } from "../services.js";
import { formatDate } from "../utils/index.js";

export const renderEducationInfo = async () => {
    const courses = await getEducationData();
    const coursesCard = courses.map(course => buildEducationComponent(course));
    const coursesList = document.getElementById('educations');
    coursesList.innerHTML = coursesCard.join('');
}

const buildEducationComponent = (data) => {
    const education = data.attributes;
    return `<div class="row mt-3">
                <div class="col-auto"><span class="material-symbols-outlined">school</span><div class="vertical-line"></div></div>
                <div class="col">
                    <p class="tlt-txt mb-0"><b>${ education.study_title }</b></p>
                    <p class="tlt-txt mb-1">${ education.institution }</p>
                    <p class="date-txt mb-1"><i>${ formatDate(education.start_date) } - ${ education.end_date ? formatDate(education.end_date) : globalData.present_text }</i></p>
                    <p class="exp-txt">${ education.description }</p>
                </div>
            </div>`
}
