import React, { useState } from 'react'

function Card2({ setCartValue }) {
    let [toggle, setToggle] = useState(true)
    return <>
        <div class="col mb-5">
            <div class="card h-100">
                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">Sale Item</h5>
                        <span class="text-muted text-decoration-line-through">$50.00</span>
                        $25.00
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

export default Card2