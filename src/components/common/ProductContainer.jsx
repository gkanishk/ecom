function ProductsContainer({products}){
    return (
        <div className="product-list-container">
              {products.map(({title,img,attributes},index)=>(
                <div className="product-container" key={title+index}>
                  <img src={img} alt={title}/>
                  <strong>{title}</strong>
                  <p>
                      Sizes Available: {attributes?.sizesAvailable.map((size)=>(
                          size+" "
                      ))}
                  </p>
                  <span>Rs. {attributes?.price}</span>
                </div>
            ))}
              </div>
    )
}

export default ProductsContainer;