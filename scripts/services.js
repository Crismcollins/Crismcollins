import { API_URL } from "./constants.js";
import { fetchData } from "./fetch.js";
import { globalData } from "./global.js";

const fetchDataURL = async (url, params) => {
    const queryParams = new URLSearchParams(params).toString();
    const finalUrl = `${API_URL}${url}?${queryParams}`;
    const data = await fetchData(finalUrl)
    return data
}

export const getEducationData = async () => await fetchDataURL('/educations', { locale: globalData.language, sort: 'start_date:desc' })
export const getJobsData = async () => await fetchDataURL('/jobs', { locale: globalData.language, sort: 'start_date:desc' })
export const getGamesData = async () => await fetchDataURL('/games', { populate: 'image', locale: globalData.language})
export const getTextOthers = async () => await fetchDataURL(`/text-other`, { populate: '*', locale: globalData.language })
export const getSkills = async () => await fetchDataURL(`/skill`, { populate: '*' , locale: globalData.language })
export const getResume = async () => await fetchDataURL(`/resume`, { populate: 'file' , locale: globalData.language })
export const getAboutMe = async () => await fetchDataURL(`/about-me`, { populate: '*' , locale: globalData.language })