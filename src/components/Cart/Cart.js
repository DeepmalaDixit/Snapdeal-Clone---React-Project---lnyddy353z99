import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/Context'
import './Cart.css'
import { NavLink } from 'react-router-dom';


const Cart = () => {

    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let count = 0;
        state.map((i) => {
            count += i.price;
        })
        setTotalPrice(count);
    }, [])


    return (
        <>
            <div className="cartNavbar">
                <div className='complogo'>
                    <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
                </div>
            </div>
            <div className="totalall">
                <div className="total">
                    <div className="secondnav">
                        <NavLink to='/'>
                            <i class="fa-solid fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="tt">
                        <p className='t'>Total - </p>
                        <p className='t'> ${totalPrice} </p>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                {
                    state.map((item, index) => {
                        return (
                            <div className="onecomp">
                                <img src={item.image} alt="snapdeal" />
                                <div className="desccomp">
                                    <h4>{item.title}</h4>
                                    <p>Rating : {item.rating.rate}</p>
                                    <h4>${item.price}</h4>
                                </div>
                                <h1 className='dele' onClick={() => dispatch({ type: 'REMOVE', paylode: item })}>
                                    <i class="fa-solid fa-trash"></i>
                                </h1>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Cart