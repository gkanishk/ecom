import ProductsContainer from "../components/common/ProductContainer";
import products from "../assets/products.json";
import {useEffect,useState} from "react"

function Home() {
  const [filteredProducts,setFilteredProductss]=useState([]);
  useEffect(()=>{
    setFilteredProductss([...products])
},[])
    return (
      <div className="container text-center">
          <h1>Welcome to ShopWithMe!!</h1>
          <div>
              <h3>Top Products</h3>
              <ProductsContainer products={filteredProducts}/>
          </div>
      </div>
    );
  }
  
  export default Home;
  