import {React, useState, useEffect } from 'react' 
import "./cartstyle.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, removeSingleItem, emptyCartItem } from '../redux/features/cartSlice';
import toast from "react-hot-toast";


const CartDetails = () => {
    const {carts} = useSelector((state) =>state.allCart);

    const [tolalPrice, setTotalPrice ] = useState(0);
    const [totalQynt, setTotalQynt ] = useState(0);

    const dispatch = useDispatch();

    //add to card
    const handleIncrement = (e) => {
        dispatch(addToCart(e))
    }

    // delete button 
    const handleDecrement = (e) => {
        dispatch(removeToCart(e))
        toast.success("Item Removed")
    }

    //decrement quantity
    const decrementQnty = (e) => {
        dispatch(removeSingleItem(e))
    }

    //Clear cart 
    const emptyItem = () => {
        dispatch(emptyCartItem())
        toast.success("Cart is Empty")
    }

    // count total 
    const total = () => {
        let tolalprice = 0 
        carts.map((ele, ind) => {
            tolalprice = ele.price * ele.qnty + tolalprice
        });
        setTotalPrice(tolalprice)
    }

    useEffect(() => {
        total()
    }, [total])


      // count total Quantity
      const countQnty = () => {
        let tolalqynt = 0 
        carts.map((ele, ind) => {
            tolalqynt = ele.qnty + tolalqynt
        });
        setTotalQynt(tolalqynt)
    }
    
    useEffect(() => {
        countQnty()
    }, [countQnty])

  return (
   <>
  <div className='row justify-content-center' style={{ marginTop: '2rem' }}>
    <div className='col-md-8 mb-5 carddetails'>
        <div className='cart'> 
            <div className='card-header bg-dark p-3'>
                <div className='card-header-flex'>
                <h5 className='cart-summary-title m-0'>
                🛒 Cart Summary {carts.length > 0 ? `(${carts.length})` : ""}
                </h5>
                {
                    carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm'
                    onClick={emptyItem}
                    >
                    <i className='fa fa-trash-alt mr-2'></i><pan>Clear All</pan></button> : ""

                }
                </div>
                
            </div>

            <div className='cart-body p-0'> 
                {
                    carts.length === 0 ? <table className='table cart-table mb-0'> 
                   <tbody>
                    <tr>
                        <td colSpan={6}>
                            <div className='cart-empty'>
                                <i className='fa fa-shopping-cart'></i>
                                <p>Your Cart is Empty</p>
                            </div>
                        </td>
                    </tr>
                   </tbody>
                   
                    </table> : 

                    <table className='table cart-table mb-0 table-responsive-sm'>
                        <thead>
                            <tr>
                                
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Action</th>
                                <th className='text-right'> <span className='amount' id='amount'>Subtotal</span></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                carts.map((data,index) => {
                                    return (
                                        <>
                                        <tr>
                                            <td><div className='product-img'><img className='' src={data.imgdata} /></div> </td>
                                            <td><div className='product-name'><p>{data.dish}</p></div> </td>
                                            <td>{data.price}$</td>
                                            <td>
                                                <div className='prdct-qty-container'>
                                                    <button className='prdct-qty-btn' type='button' onClick = {data.qnty <= 1 ? () => handleDecrement(data.id) : () => decrementQnty(data)}>
                                                        <i className='fa fa-minus'></i>
                                                    </button>
                                                <input type ="text" className='qyt-input-box' value={data.qnty} disabled name="" id="" /> 
                                                <button className='prdct-qty-btn'  type='button' onClick={() => handleIncrement(data)}>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                                </div>
                                            </td>
                                            <td>
                                               <button className='prdct-detele' onClick={() => handleDecrement(data.id)}><i className='fa fa-trash-alt mr-2'> </i></button> 
                                            </td>
                                            <td className='text-right'>{data.qnty * data.price}$</td>
                                        </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>&nbsp;</th>
                                <th colSpan={3}>&nbsp;</th>
                                <th>Item in cart
                                    <span className='ml-2 mr-2'>: </span> 
                                       <span className='text-danger'>{totalQynt}</span>
                                </th>
                                <th className='text-right'>Total Price
                                    <span className='ml-2 mr-2'>: </span> 
                                       <span className='text-danger'>{tolalPrice}$</span>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                }
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default CartDetails