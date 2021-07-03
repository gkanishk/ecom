import { useEffect, useState } from "react"

function FacetFilter({products,filterProduct}){
    const [filteredProduct,setProduct]=useState(products);

    useEffect(()=>{
        filterProduct(filteredProduct)
    },[filteredProduct,filterProduct])

    const priceFilter=(value)=>{
        const tempArray=[...filteredProduct];
        if(value==="low"){
        return setProduct(tempArray.sort((a, b) => a.attributes.price - b.attributes.price));
    }
        return setProduct(tempArray.sort((a, b) => b.attributes.price-a.attributes.price));
    }

    return (
        <div>
            Price:
            <div onChange={(e)=>priceFilter(e.target.defaultValue)}>
            <input type="radio" value="low" name="price"/> Low to High<br/>
            <input type="radio" value="high" name="price"/> High to Low
            </div>
        </div>
    )
}

export default FacetFilter