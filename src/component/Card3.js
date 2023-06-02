import React, { useState } from 'react'
import StarRating from './StarRating'
function Card3({ setCartValue }) {
    let [toggle, setToggle] = useState(true)
    return <>
        <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">Popular Item</h5>
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <div className="Card1">
                                <StarRating />
                            </div>
                        </div>
                        $40.00
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        {
                            toggle ? <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                setCartValue(value => value + 1)
                                setToggle(false)
                            }}>
                                Add To Cart
                            </button> : <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                setCartValue(value => value - 1)
                                setToggle(true)
                            }}>
                                Remove
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card3