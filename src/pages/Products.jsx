// Modules
import {useEffect, useState} from "react";
// Components
import {ProductsContainer,FacetFilter} from "../components";
// Assets
import products from "../assets/products.json";
import brands from "../assets/brands.json";

function Products() {
    const [filteredProducts,setFilteredProducts]=useState([]);

    useEffect(()=>{
        setFilteredProducts(products)
    },[])

    const changeProducts=(items)=>{
        setFilteredProducts(items);
    }

    return (
      <section className="container">
          <div className="product-page-container">
              <div>
                  Filters:
                  <FacetFilter products={products} filterProduct={changeProducts}/>
              </div>
              <div className="text-center">
              <h1>Products({filteredProducts.length})</h1>
                <ProductsContainer products={filteredProducts} brands={brands} />
              </div>
          </div>
      </section>
    );
  }
  
  export default Products;
  