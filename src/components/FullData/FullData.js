import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './FullData.css'
import { useContext } from 'react';
import { CartContext } from '../Context/Context';
import Navbar from '../Navbar/Navbar';

const apikey = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`

const FullData = () => {
    const { id } = useParams();
    console.log(id);

    const [isLoading, setIsLoading] = useState(true);
    const [allData, setallData] = useState("");


    const getMovies = async (url) => {
        try {
            console.log(url)
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setIsLoading(false)
            setallData(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getMovies(`${apikey}/${id}`)
    }, [id])

    const GlobalState = useContext(CartContext);
    const disp = GlobalState.dispatch;
    console.log(GlobalState);

    if (isLoading) {
        return (
            <div className="movie-section">
                <div className="loading">Loading....</div>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <section className="comp-section">
                <div className="comp-card">
                    <figure>
                        <img width={200} src={allData.image} className='listimage' />
                    </figure>
                    <div className="card-content">
                        <div className="allbtn">
                            <h4 className="title">{allData.title}</h4>
                            <h6 className="card-text">About :-{allData.description}</h6>
                            <h3 className="card-text">Price ${allData.price}</h3>
                            <p className="card-text">Rating out of 10 is {allData.rating.rate}/10</p>
                            <p className="card-text">Rating given by {allData.rating.count} people</p>
                            <p className="card-text">About :-{allData.description}</p>
                        </div>
                        <div className="allbtn">
                            <button className="btn" onClick={() => disp({ type: 'ADD', paylode: allData })}>
                                Add to Cart<i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <NavLink to='/'>
                                <button className='btn'>Buy Now</button>
                            </NavLink>
                            <NavLink to="/" className="back-btn">
                                <button className="btn"><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FullData