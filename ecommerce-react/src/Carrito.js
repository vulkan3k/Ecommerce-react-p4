import React from 'react'
import {useCart} from 'react-use-cart'

const Carrito = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
        } = useCart();
        if(isEmpty) return <h1 className='text-center'>Carrito Vacio</h1>
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Carrito({totalUniqueItems}) en total: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item,index)=>{
                                return (
                                <tr key={index}>
                                    <td><img src={item.img} style={{height: '6rem'}} alt=''/></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>Cantidad: ({item.quantity})</td>
                                    <td>
                                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id,item.quantity -1)}>-</button>
                                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button className='btn btn-danger ms-2' onClick={()=> removeItem(item.id)}>Quitar</button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h3>Total a Pagar: ${cartTotal}</h3>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-danger m-2' onClick={()=>emptyCart()}>Limpiar Carrito</button>
                    <button className='btn btn-primary m-2'>Comprar</button>
                </div>
            </div>
        </section>
  )
}

export default Carrito