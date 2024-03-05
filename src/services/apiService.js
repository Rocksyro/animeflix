const API_URL = 'https://api.jikan.moe/v4';

export async function getAnime(id) {
    try{
        const response = await fetch(`${API_URL}/anime/${id}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}

export async function getTopAnime() {
    try{
        const response = await fetch(`${API_URL}/top/anime`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}

export async function getAllEpisodes(id) {
    try{
        const response = await fetch(`${API_URL}/anime/${id}/episodes`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}

export async function getEpisode(id, episode) {
    try{
        const response = await fetch(`${API_URL}/anime/${id}/episodes/${episode}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}

export async function getTopCharacters() {
    try{
        const response = await fetch(`${API_URL}/watch/promos/popular`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}

/*
/top/characters
/anime/{id}/pictures
*/