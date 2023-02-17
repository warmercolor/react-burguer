import { Button } from '../Button'
import { DivStyle, FooterStyle, UlStyle } from './style'


export const CartProducts = ( { handleProductsCart, handleRemoveAll, handleClickRemove} ) => {


        const totalMoney = handleProductsCart.reduce((a, b) => a + b.price, 0)

    return (
        <DivStyle>
        <div className='header'>
            <h2>Carrinho de Compras</h2>
        </div>
        
        {handleProductsCart <  1 ? (
            <div className='empty'>
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
            </div>
        )
        : (
        <UlStyle>
            {handleProductsCart.map((products) => (
            <li key={products.id}>
                <figure>
                    <img src={products.img} alt={products.name} />
                </figure>
                <div className='information'>
                    <h3 className='title'>
                        {products.name}
                    </h3>
                    <span className='category'>
                        {products.category}
                    </span>
                    <span className='price'>
                    R${' '}
                            {Number(products.price).toLocaleString('pt-BR', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                            })}
                    </span>
                </div>
                <div className='btn'>
                <Button onClick={handleClickRemove} id={products.id}>Remover</Button>
                </div>
            </li>
            ))}

            </UlStyle>
            
        )
}
            <FooterStyle>
            <hr />
            <div>
                <h3>Total</h3>
                <h3>R$ {' '}
                            {Number(totalMoney).toLocaleString('pt-BR', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                            })}</h3>
            </div>
            <button onClick={handleRemoveAll}>Remover Todos</button>
            </FooterStyle>
        </DivStyle> 
    )
}