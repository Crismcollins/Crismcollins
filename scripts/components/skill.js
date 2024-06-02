import { getSkills } from "../services.js";

export const renderSkills = async () => {
    const skills = await getSkills();
    const hardSkillsComponent = skills.attributes.hard_skills.map(skill => buildHardSkillComponent(skill));
    const softSkillsComponent = skills.attributes.soft_skills.map(skill => buildSoftSkillComponent(skill));
    const skillsList = document.getElementById('skills');
    skillsList.innerHTML = hardSkillsComponent.join('') + softSkillsComponent.join('');
}

const buildHardSkillComponent = (skill) => {
    return `<div class="col-auto chip py-1 px-2 mx-1 mt-1 text-center">${skill.name}</div>`
}

const buildSoftSkillComponent = (skill) => {
    return `<div class="col-auto chip py-1 px-2 mx-1 mt-1 text-center skill">${skill.name}</div>`
}
