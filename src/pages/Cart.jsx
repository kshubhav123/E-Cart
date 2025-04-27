import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../redux/action/productCartAction';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate()
  const [quantities, setQuantities] = useState({});

  const handleQuantity = (id, value) => {
    if (value >= 1) {
      setQuantities(prev => ({ ...prev, [id]: value }));
    } else {
      console.log("Minimum quantity is 1");
    }
  };

  const cart = useSelector((state) => state.getCartData)

  const subtotal = cart.cart.reduce((acc, item) => {
    const qty = quantities[item.id] || 1;
    return acc + (item.price * qty);
  }, 0);


  const shipping = 50;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  const dispatch = useDispatch()

  return (
    <div className='container'>
      <div className='h1 fw-normal text-center py-3 mt-5 my-5'>
        <span className='border-0 px-3 py-2 border-bottom border-4 borderColor'> Shopping Cart </span>
      </div>



      <div className='row'>
        <div className="col-md-12">
          {
            cart && cart.cart.map((c) => {
              return (
                <div className="row" key={c.id}>
                  <div className="col-md col">
                    <img src={c.images[0]} width="130" height="130" className='rounded-2' alt="" />
                  </div>
                  <div className="col-md col">
                    <div className='text-dark fw-bold'>{c.title.split(" ").slice(0, 2).join(" ")}</div>
                    <div className='text-secondary fw-light'>{c.brand} </div>
                  </div>
                  <div className="col-md col">
                    <div className='text-dark mt-2 fw-bold'>Amount</div>
                    <input type="number" min="1" value={quantities[c.id] || 1} onChange={(e) => handleQuantity(c.id, parseInt(e.target.value))} className="form-control input-sm" style={{ width: "60px", height: "35px", fontSize: "14px" }} />
                    <div className='text-color mt-2' style={{ cursor: "pointer" }} onClick={() => dispatch(removeToCart(c.id))}>Remove</div>
                  </div>
                  <div className="col-md col">
                    <div className='text-dark fw-bold'>$ {c.price}</div>
                  </div>
                </div>
              )
            })
          }
        </div>


        {cart.cart.length !== 0 ?
          <div className="row my-5 justify-content-center">
            <div className="col-md-4">
              <div className='card p-3 shadow border-0 rounded-4 px-4'>
                <div className='d-flex justify-content-between border-0 border-bottom py-2'>
                  <span> SubTotal </span>
                  <span> ${subtotal.toFixed(2)} </span>
                </div>
                <div className='d-flex justify-content-between border-0 border-bottom py-2'>
                  <span> Shipping </span>
                  <span>${shipping.toFixed(2)} </span>
                </div>
                <div className='d-flex justify-content-between border-0 border-bottom py-2'>
                  <span> Tax </span>
                  <span> ${tax.toFixed(2)} </span>
                </div>
                <div className='d-flex justify-content-between border-0 border-bottom py-2 fw-bold'>
                  <span> Total</span>
                  <span> ${total.toFixed(2)} </span>
                </div>
              </div>
              <div className='w-100 me-3 btn bg-backgrgound text-white rounded-1 addtocart shadow mt-3' onClick={() => navigate("/placeorder")}>Place Order</div>
            </div>
          </div>
          :
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", textAlign: "center", padding: "1rem" }}>
            <h2 className='text-color'>🛒 Your Cart is Currently Empty</h2>
            <p>Please add some products to your cart and enjoy shopping!  </p>
            <Link to="/" className='btn bg-backgrgound text-white rounded-1 addtocart shadow mt-3'>
              Back to Home
            </Link>
          </div>
        }
      </div>



    </div>
  )
}

export default Cart