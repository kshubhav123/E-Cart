import React, { useState } from 'react'

const Placeorder = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
    };
    return (
        <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "#f7f7f7" }}>
            {!orderPlaced ? (
                <>
                    <h2>🛍 Ready to Place Your Order?</h2>
                    <button
                        onClick={handlePlaceOrder}
                        className='bg-backgrgound'
                        style={{ padding: "10px 20px", marginTop: "20px", fontSize: "18px",  color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
                    >
                        Place Order
                    </button>
                </>
            ) : (
                <>
                    <h1 className='text-color'>✅ Order Placed Successfully!</h1>
                    <p style={{ marginTop: "10px", fontSize: "18px" }}>Thank you for shopping with us!</p>
                </>
            )}
        </div>)
}

export default Placeorder