import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { catgoriesProduct, getCatgoryProduct, getProductList } from '../redux/action/productAction'
import { addToCart } from '../redux/action/productCartAction'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.getData.products)
    const loader = useSelector((state) => state.getData.loading)
    const categories = useSelector((state) => state.getData.categories)
    const cartItems = useSelector((state) => state.getCartData.cart)

    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getProductList())
        dispatch(catgoriesProduct())
    }, [])

    return (
        <div>
            <div className='h1 fw-normal text-center py-3 mt-5'>
                <span className='border-0 px-3 py-2 border-bottom border-4 borderColor'> Our Menu </span>
            </div>

            <div className='container w-100 mx-auto text-center my-4'>
                {
                    categories.map((c, i) => {
                        return (
                            <span key={c.slug} onClick={() => dispatch(getCatgoryProduct(c.slug))} class="badge bg-backgrgound text-white p-2 mx-2 fs-6 px-3 fw-normal shadow text-center my-2" style={{ cursor: "pointer" }}>{c.name}</span>
                        )
                    })
                }
            </div>

            <div className='container'>
                <div className="row">
                    {loader === false ? products.length ?
                        products && products.map((items, i) => {

                            const isInCart = cartItems.some((item) => item.id === items.id)


                            return (
                                <div className="col-md-4 my-4 px-4" key={i}>
                                    <div className='card border-0'>
                                        <img src={items.images[0]} alt="buttermilk" width="300" height="300" />
                                        <div className='d-flex justify-content-between px-3'>
                                            <div className='py-3 fs-5'>{items.title.split(" ").slice(0, 3).join(" ")}</div>
                                            <span class="badge bg-backgrgound text-white fs-6 my-3 fw-normal h-100">${items.price}</span>
                                        </div>
                                        <div className='text-secondary px-3' style={{ textAlign: "justify", wordSpacing: "0.6rem" }}>
                                            {items.description}
                                        </div>
                                        <div className='d-flex justify-content-between px-3 mt-3'>
                                            {isInCart ?
                                                <button className='w-100 me-3 btn bg-success text-white rounded-1 addtocart' onClick={()=>navigate("/cart")}>Go To Cart</button>:
                                                <button className='w-100 me-3 btn bg-backgrgound text-white rounded-1 addtocart' onClick={() => dispatch(addToCart(items.id))}>Add To Cart</button> 
                                            }

                                            {/* <button className='w-100 btn borderColor text-color rounded-1 wishlist'> Wishlist </button> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :

                        <div class="error-message">
                            <h1>Oops!</h1>
                            <p>Product data not found.</p>
                            <p>Please try again later and try searching for something else.</p>
                        </div>

                        : <div className='d-flex justify-content-center' style={{ margin: "10rem 0rem" }}>
                            <div class="spinner-grow text-success mx-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-danger mx-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-warning mx-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-info mx-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home