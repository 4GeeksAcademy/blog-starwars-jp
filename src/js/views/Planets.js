import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import CardPlanets from "../component/Planetas"



const Planetas = () => {
    const { actions, store } = useContext(Context)

    return (
        <div>
            <h1 className="text-danger" style={{ marginTop: "10px" }} > Planets </h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll" style={{ marginBottom: "10px" }}>
                    {store.planetas.map((item, index) => (
                        <CardPlanets item={item} id={(index + 1)} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Planetas