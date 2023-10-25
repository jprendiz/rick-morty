import { useState, useEffect } from "react"

export default function Welcome(props) {
    const [ counter, setCounter ] = useState(0)
    const [ semaforo, setSemaforo ] = useState(false)
    const {message, name} = props

    useEffect( () => {
        console.log(semaforo);
    }, [semaforo]

    )

    const contar = () => {
        setCounter(counter + 1)
        setSemaforo(!semaforo)
    }

    return (
        <div>
            <p>Hola, {name} desde Welcome</p>
            <p> {message} {counter} </p>

            <p> El semáforo está en color {semaforo ? "red": "green"} </p>
            <button type="submit" onClick={contar}> CONTADOR </button>            
        </div>
    )
}