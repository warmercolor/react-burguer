import { useState } from 'react'
import { Header } from './components/Header'
import { ProductsList } from './components/ProductList'
import { CartProducts } from './components/CartProducts'
import { AllStyle } from './style/all'
import { toast } from 'react-toastify'


export const All= () => {

    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [showProducts, setShowProducts] = useState("")

    function filter(productList){
        const filter = products.filter((element) => 
            element.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f-]/g, '').includes(productList.toLowerCase()) ||
            element.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f-]/g, '').includes(productList.toLowerCase()))

        setShowProducts(filter)
    }

    function clickForAdd(productCart){
        const productsTeste = products.find(( { id } ) => id == productCart.target.id)

        cartProducts.includes(productsTeste) ? toast.error('Ops, você já possui esse item no carrinho!', {
            position: "bottom-right",
            autoClose: 1500
        }) 
        : setCartProducts([...cartProducts, productsTeste], toast.info(`Seu item está disponivel no carrinho`, {
            position: "top-center",
            autoClose: 1500
        }))
    }

    function clickForRemove(productCart){
        const index = cartProducts.filter(
            ( { id } ) => id != productCart.target.id)
            toast.success(`Você removeu o item do carrinho com sucesso!`, {
                position: "bottom-right",
                autoClose: 1500
            })
        setCartProducts(index)
    }

    function clickRemoveAll(){
            toast.info(`Você desistiu da compra? Foi removido todos os itens do seu carrinho`, {
                position: "bottom-right",
                autoClose: 1500
            })
        setCartProducts([])
    }

    return (
        <>
        <Header
        handleFilter={filter}/>
        <AllStyle>
        <ProductsList 
        handleProducts={showProducts ? showProducts : products} 
        handleSetProducts={setProducts}
        handleClick={clickForAdd}
        />
        <CartProducts
        handleProductsCart={cartProducts} 
        handleSetProductsCart={setCartProducts}
        handleClickRemove={clickForRemove}
        setCartProducts={setCartProducts}
        handleRemoveAll={clickRemoveAll}
        />
        </AllStyle>
        </>
    )
}
