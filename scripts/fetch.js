export async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl, { method: 'GET' });
        if (!response.ok) {
            throw new Error('La solicitud no pudo completarse correctamente, por favor refresca la página');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Ocurrió un error:', error);
        return 'Ocurrió un error.';
    }
}
