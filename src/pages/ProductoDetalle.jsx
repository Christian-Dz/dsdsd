
import { useParams, useNavigate } from "react-router-dom";


export function ProductoDetalle ({productos}) {

    function handleGoBack(){
        navigate(-1)
    }

    const navigate = useNavigate()
    const {id} = useParams ()
    const producto = productos.find((producto) => producto.id.toString() === id)

    return (
        <section>
           <h1>Detail Of The Product</h1>
           <h2>{producto.nombre}</h2>
           <h2>{producto.id}</h2>
           <h2>${producto.precio}</h2>
           <button onClick={handleGoBack}>Go Back</button>
        </section>
    )
}