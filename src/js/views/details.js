
import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'
import Card from '../component/Card'


const Details = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    const [currentDetail, setCurrentDetail] = useState({})

    useEffect(() => {
        if (params.type && params.uid) {
            if (params.type == "people") {
                setCurrentDetail(store.personajes.find(item => item.url.split("/")[5] == params.uid))
            }
            if (params.type == "planets") {
                setCurrentDetail(store.planetas.find(item => item.url.split("/")[5] == params.uid))
            }
            if (params.type == "starships") {
                setCurrentDetail(store.naves.find(item => item.url.split("/")[5] == params.uid))
            }
        }
    }, [params])

    useEffect(() => {
        console.log(currentDetail)
    }, [currentDetail])

    return (
        <div className='container'>

            {currentDetail.skin_color &&

                <div className='row'>
                    <div className='col '>
                        <img src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${params.uid}.jpg`} className="card-img-top rounded float-start" alt={currentDetail?.name} />
                    </div>
                    <div className='col text-warning'>
                        Name: {currentDetail?.name}
                    </div>
                    <div className='col'>
                        birth Year: {currentDetail?.birth_year}
                    </div>
                    <div className='col text-warning'>
                        Gender: {currentDetail?.gender}
                    </div>
                    <div className='col'>
                        Skin Color: {currentDetail?.skin_color}
                    </div>
                    <div className='col text-warning'>
                        Eye color: {currentDetail?.eye_color}
                    </div>
                    <div className='col'>
                        homeworld: {currentDetail?.homeworld}
                    </div>
                </div>

            }

            {currentDetail.terrain &&

                <div className='row'>
                    <div className='col '>
                        <img src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${params.uid}.jpg`} className="card-img-top rounded float-start" alt={currentDetail?.name} />
                    </div>
                    <div className='col text-warning'>
                        Name: {currentDetail?.name}
                    </div>
                    <div className='col'>
                        terrain: {currentDetail?.terrain}
                    </div>
                    <div className='col text-warning'>
                        gravity: {currentDetail?.gravity}
                    </div>
                    <div className='col'>
                        orbital_period: {currentDetail?.orbital_period}
                    </div>
                    <div className='col text-warning'>
                        diameter: {currentDetail?.diameter}
                    </div>
                    <div className='col'>
                        population: {currentDetail?.population}
                    </div>
                </div>

            }

            {currentDetail.model &&

                <div className='row'>
                    <div className='col '>
                        <img src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${params.uid}.jpg`} className="card-img-top rounded float-start" alt={currentDetail?.name} />
                    </div>
                    <div className='col text-warning'>
                        Name: {currentDetail?.name}
                    </div>
                    <div className='col'>
                        manufacturer: {currentDetail?.manufacturer}
                    </div>
                    <div className='col text-warning'>
                        cost_in_credits: {currentDetail?.cost_in_credits}
                    </div>
                    <div className='col'>
                        length: {currentDetail?.length}
                    </div>
                    <div className='col text-warning'>
                        cargo_capacity: {currentDetail?.cargo_capacity}
                    </div>
                    <div className='col'>
                        vehicle_class: {currentDetail?.vehicle_class}
                    </div>
                </div>

            }

        </div>


        // <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
        //     {/* {currentDetail?.url.split("/")[5] == 1 ?
        //         <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={item.name} />
        //         :
        //         <img src={"https://starwars-visualguide.com/assets/img/planets/" + currentDetail?.url.split("/")[5] + ".jpg"} className="card-img-top" alt={item.name} />
        //     }


        //     <div className="card-body">
        //         <h5 className="card-title">{item.name}</h5>
        //         <p className="card-text"> Habitantes: {item.population}</p>
        //         <a href="#" className="btn btn-primary">Go somewhere</a>
        //         <button className='btn btn-outline-dark float-end' >
        //             <i className="fa fa-heart"></i>
        //         </button>
        //     </div> */}

        //     {currentDetail?.name}
        //     {currentDetail?.height}
        //     {currentDetail?.mass}
        //     {currentDetail?.height}
        //     {currentDetail?.hair_color}



        // </div>

    )
}

export default Details