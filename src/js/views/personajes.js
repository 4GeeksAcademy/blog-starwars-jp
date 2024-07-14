import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"

import Card from "../component/Card"


const Personajes = () => {
    const { actions, store } = useContext(Context)

    return (
        <div>
            <h1 className="text-danger" style={{ marginTop: "10px" }} > Characters </h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll" style={{ marginBottom: "10px" }}>
                    {store.personajes.map((item, index) => (
                        <Card item={item} id={(index + 1)} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Personajes