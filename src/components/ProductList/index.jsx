import { Product } from '../Product'
import { useEffect } from 'react'
import Api from '../../services/api'
import { UlStyle } from './style'


export const ProductsList = ( { handleProducts, handleSetProducts, handleClick } ) => {

    useEffect(() => {

        Api

            .get(`/products`, {
                params: {
                    limit: 151,
                    offset: 0,
            },
            })

            .then((response) => {
                handleSetProducts(response.data)
            })

            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <UlStyle>
            {handleProducts.map((element) => {
                return(
                    <li key = {element.id}>
                        <Product
                        handleProducts = {element}
                        handleClick={handleClick}
                        />
                    </li>
                )
            })}
        </UlStyle>
    )
}
