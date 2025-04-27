import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { searchProduct } from '../redux/action/productAction'

const Header = () => {
    const [query, setQuery] = useState()
    const dispatch = useDispatch()
    const { pathname } = useLocation()


    const handleSearchQuery = () => {
        dispatch(searchProduct(query))
    }

    const cartItems = useSelector((state) => state.getCartData.cart)

    return (
        <div>
            <nav class="navbar navbar-expand-lg px-5 bg-white">
                <div class="container-fluid">
                    <Link class="navbar-brand text-color fs-3" to="/"> ECOM-Cart</Link>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-arrow-down-circle text-color"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <Link class="nav-link active" aria-current="page" to="/">Home</Link> */}
                            </li>
                        </ul>

                        <div class="d-flex px-4" role="search">

                            {pathname === "/" && (
                                <div className="d-flex">
                                    <input className="input-searc-field me-2" onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Type Search..." value={query} />
                                    {(!query || query.length === 0) ? (
                                        <button className="btn bg-color input-searc-button" type="button">
                                            <i className="bi bi-search-heart text-color fs-4"></i>
                                        </button>
                                    ) : (
                                        <button
                                            className="btn bg-color input-searc-button"
                                            type="button"
                                            onClick={handleSearchQuery}
                                        >
                                            <i className="bi bi-search-heart text-color fs-4"></i>
                                        </button>
                                    )}
                                </div>
                            )}

                            <Link to="/cart" className='position-relative mt-2 ms-2'>
                                <i class="bi bi-cart-plus text-color fs-4"></i>
                                <span class="position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle">
                                    <span class="text-color"> {cartItems.length}</span>
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header