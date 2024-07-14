import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import NavesDetalle from "../component/navesdetalle";

const Naves = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtenerNaves();
    }, []);

    return (
        <div>
            <h1 className="text-danger" style={{ marginTop: "10px" }} >Starships</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll" style={{ marginBottom: "10px" }}>
                    {store.naves.map((nave, index) => (
                        <NavesDetalle key={index} item={nave} id={nave.url.split("/")[5]} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Naves;
