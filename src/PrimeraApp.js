import React, { Fragment } from "react";

const PrimeraApp = () => {

    const saludo = 'Hola Mundo'
    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicacion con react</p>
        </Fragment>

    );

}

export default PrimeraApp;