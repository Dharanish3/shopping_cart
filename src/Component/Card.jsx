import React, { useState } from 'react';

function Card({ cart, setCart }) {
  const [showArray, setShowArray] = useState(items.map(() => true));

  const items = [
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special Item",
      price: "$20.00",
      previous_price: "$18.00",
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: " $120.00 ",
      previous_price: "$280.00",
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      price: " $50.00 ",
      previous_price: "$25.00",
    },
  ];

  const toggleShow = (index) => {
    const newShowArray = [...showArray];
    newShowArray[index] = !newShowArray[index];
    setShowArray(newShowArray);
  };

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {items.map((item, index) => (
              <div className="col mb-5" key={index}>
                <div className="card h-100">
                  <img className="card-img-top" src={item.image} alt={item.name} />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{item.name}</h5>
                      <span className="text-muted text-decoration-line-through">{item.price}</span>
                      {item.previous_price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {showArray[index] ? (
                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                            setCart(cart + 1);
                            toggleShow(index);
                        }}>Add to cart</a>
                      ) : (
                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                            setCart(cart - 1);
                            toggleShow(index);
                        }}>Remove Cart</a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
