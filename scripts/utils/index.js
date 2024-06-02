export function formatDate(dateString) {
    const date = new Date(dateString);

    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatMMYY = `${month.toString().padStart(2, '0')}/${year}`;
    return formatMMYY;
}

export function changeElementText(id, text) {
    const element = document.getElementById(id);
    element.textContent = text
}

export function addImageToElement(id, imageUrl) {
    const element = document.getElementById(id);
    element.style.backgroundImage = `url('${imageUrl}')`;
}

export function hideLoading() {
    const loading = document.getElementById('loading');
    const html = document.documentElement;
    loading.classList.add('d-none')
    html.classList.remove('overflow-hidden')
}