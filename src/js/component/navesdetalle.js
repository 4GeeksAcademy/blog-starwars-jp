import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from "../store/appContext";

const NavesDetalle = ({ item, id }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const starshipIdMapping = {
        // Mapeo de IDs de Star Wars API a IDs de starwars-visualguide.com
        "2": 5,
        "3": 9,
        "5": 10,
        "9": 11,
        "10": 12,
        "11": 13,
        "12": 14,
        "13": 15,
        "15": 17,
        "17": 21,
        "21": 22,
        "22": 23,
        "27": 28,
        "28": 29,
        "29": 30,
        "30": 31,
        "31": 32,
        "32": 39,
        "39": 40,
        "48": 41,
        "49": 42,
        "52": 43,
        "58": 47,
        "59": 48,
        "61": 49,
        "63": 52,
        "64": 57,
        "65": 58,
        "66": 59,
        "68": 61,
    };

    const getStarshipImageUrl = (id) => {
        const mappedId = starshipIdMapping[id] || id; // 
        return `https://starwars-visualguide.com/assets/img/starships/${mappedId}.jpg`;
    };

    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img 
                src={getStarshipImageUrl(id)} 
                className="card-img-top" 
                alt={item.name} 
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }} 
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Consumables: {item.consumables}</p>
                <button 
                    onClick={() => navigate(`/details/starships/${item.url.split("/")[5]}`)} 
                    className="btn btn-primary"
                >
                    Ver más
                </button>
                <button 
                    className='btn btn-outline-dark float-end'
                    onClick={(e) => { actions.addToFavorites(item.name) }}
                >
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>
    );
}

export default NavesDetalle;
