import { useEffect, useState } from "react";
import {brands} from "../../assets/products"


function FacetFilter({products,filterProduct}){
    const [filteredProduct,setProduct]=useState(products);
    const [brandsFilter,setBrandFilter]=useState([]);
    const [brandsArr,setBrands]=useState(brands);
    const [priceSelected,setPriceSelected]=useState("");

    useEffect(()=>{
        filterProduct(filteredProduct)
    },[filteredProduct,filterProduct])

    useEffect(()=>{
        function filterByBrand(){
            let tempArray=[...products];
            tempArray=tempArray.filter(({attributes})=>{
                if(brandsFilter.includes(attributes.brand))
                return attributes;
            })
            if(brandsFilter.length===0)
            return setProduct(products)
            setProduct(tempArray)
        }
        filterByBrand();
    },[brandsFilter])

    const priceFilter=(value)=>{
        if(value==="") return;
        const tempArray=[...filteredProduct];
        if(value==="low"){
        return setProduct(tempArray.sort((a, b) => a.attributes.price - b.attributes.price));
    }
        return setProduct(tempArray.sort((a, b) => b.attributes.price-a.attributes.price));
    }

    const filterBrand=(added,value)=>{
        let filter=[...brandsFilter];
        let tempBrands=brandsArr;
        if(added){
            filter.push(value);
        }else{
            filter=filter.filter((val)=>val!==value)
        }
        console.log("changed",added)
        setBrandFilter(filter);
        setBrands(tempBrands);
    }

    const resetFilter=()=>{
        setProduct(products);
        setBrandFilter([]);
        setBrands([...brands])
        setPriceSelected("");
    }

    return (
        <>
        <button onClick={resetFilter}>Reset</button>
        <div>
            Price:
            <div onChange={(e)=>priceFilter(e.target.defaultValue)}>
            <input type="radio" checked={priceSelected==="low"} value="low" name="price" onChange={(e)=>setPriceSelected(e.target.value)}/> Low to High<br/>
            <input type="radio" checked={priceSelected==="high"} value="high" name="price" onChange={(e)=>setPriceSelected(e.target.value)}/> High to Low
            </div>
            <div>
                Brands:<br/>
                <div>
                {brandsArr.map(({name})=>(
                   <> <input type="checkbox" checked={brandsFilter.includes(name)} value={name} name="brand" onChange={(e)=>filterBrand(e.target.checked,e.target.value)} /> {name}<br/></>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default FacetFilter