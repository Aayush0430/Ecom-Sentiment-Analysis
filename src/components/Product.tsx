import React from 'react'

const Product = () => {
  return (
    <div>
        <section>
    <h1>Products</h1>
    <div className="products-collection">
      <div className="card">
      <div className='product-image product1'></div>
                <div className="inner-card">
                <h1 className="header">My 60 memorable games</h1>
                    <div className="flex">
                        <p className="main-price">$30.99</p>
                    </div>
                    <p className="content">
                        The 60 games annotated in this volume were al during 1957 through '67.
                    </p>
                    <button className="add">Add to Cart</button>
                </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Product