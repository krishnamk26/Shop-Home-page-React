import React, { useState } from 'react'
import StarRating from './StarRating'
function Card1({ setCartValue }) {
    let [toggle, setToggle] = useState(true)
    return <>
        <div className="col mb-5">
            <div className="card h-100">
                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">Special Item</h5>
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <div className="Card1">
                                <StarRating />
                            </div>
                        </div>
                        <span class="text-muted text-decoration-line-through">$20.00</span>
                        $18.00
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

export default Card1