import React from 'react';

export const Card = (id) => {
    // https://api.jikan.moe/v4/anime/{id}/full
    let anime = async (id) =>{
        let id = req.params.id
        //En React no tiene acceso a req.params, hay que usar useState y useEffect
        try {
        await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
        let response = await response.json()
        return data
        } catch(err){
            console.log(err.message)
        }
    }

    Card(501)
    return (
        <div className="card">
            <img src={ data.images.jpg.large_image_url} alt="Nombre-anime" />
            <h3>{data.title}</h3>
            <p>{data.rating}</p>
        </div>
    );
}

