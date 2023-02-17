import React from 'react'
import { Button } from '../Button'
import {ListDivStyle } from './style'

export const Product = ( { handleProducts, handleClick } ) => {
    return(
            <ListDivStyle>
                <div className='product'>
                    <figure>
                        <img src={handleProducts.img} alt={handleProducts.name} />
                    </figure>
                    <div className='infomation'>
                        <h3 className='title'>
                            {handleProducts.name}
                        </h3>
                        <span className='category'>
                            {handleProducts.category}
                        </span>
                        <span className='price'>
                            R${' '}
                            {Number(handleProducts.price).toLocaleString('pt-BR', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                            })}
                        </span>
                        <Button 
                        id={handleProducts.id} 
                        onClick={handleClick}>Adicionar
                        </Button>
                    </div>
                </div>
            </ListDivStyle>
    )
}