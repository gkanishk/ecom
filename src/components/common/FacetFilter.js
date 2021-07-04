import { useEffect, useState } from "react";
import brands from "../../assets/brands.json"


function FacetFilter({products,filterProduct}){
    const [filteredProduct,setProduct]=useState(products);
    const [brandsFilter,setBrandFilter]=useState([]);
    const [brandsArr,setBrands]=useState(brands);
    const [priceSelected,setPriceSelected]=useState("");
    const [idealFor,setIdealFor]=useState([]);
    const [sizes,setSizes]=useState([]);

    useEffect(()=>{
        filterProduct(filteredProduct)
    },[filteredProduct,filterProduct])

    useEffect(()=>{
        const priceFilter=(value,items)=>{
            const tempArray=[...items];
            if(value==="") 
            return setProduct(tempArray);
            if(value==="low"){
            return setProduct(tempArray.sort((a, b) => a.attributes.price - b.attributes.price));
        }
            return setProduct(tempArray.sort((a, b) => b.attributes.price-a.attributes.price));
        }
        function filterItems(){
            let tempArray=[...products];
            if(brandsFilter.length>0)
            tempArray=tempArray.filter(({attributes})=>(brandsFilter.includes(attributes.brand)))
            if(idealFor.length>0)
            tempArray=tempArray.filter(({attributes})=>(idealFor.includes(attributes.for)));
            if(sizes.length>0)
            tempArray=tempArray.filter(({attributes})=>((sizes.filter(element => attributes.sizesAvailable.includes(element))).length>0))
            priceFilter(priceSelected,tempArray)
        }
        filterItems();
    },[brandsFilter,idealFor,sizes,priceSelected,products])

    const filterBrand=(added,value)=>{
        let filter=[...brandsFilter];
        if(added){
            filter.push(value);
        }else{
            filter=filter.filter((val)=>val!==value)
        }
        setBrandFilter(filter);
    }

    const idealForFilter=(added,value)=>{
        let filter=[...idealFor];
        if(added)
            filter.push(value);
        else
            filter=filter.filter((val)=>val!==value)
        setIdealFor(filter);
    }

    const sizesFilter=(added,value)=>{
        let filter=[...sizes];
        if(added)
            filter.push(value);
        else
            filter=filter.filter((val)=>val!==value)
        setSizes(filter);
    }

    const resetFilter=()=>{
        setProduct(products);
        setBrandFilter([]);
        setBrands([...brands])
        setPriceSelected("");
        setIdealFor([]);
        setSizes([]);
    }

    return (
        <>
        <button onClick={resetFilter}>Reset</button>
        <div>
            Price:
            <div>
            <input type="radio" checked={priceSelected==="low"} value="low" name="price" onChange={(e)=>setPriceSelected(e.target.value)}/> Low to High<br/>
            <input type="radio" checked={priceSelected==="high"} value="high" name="price" onChange={(e)=>setPriceSelected(e.target.value)}/> High to Low
            </div>
            <div>
                Brands:<br/>
                <div>
                {brandsArr.map(({name},index)=>(
                   <div key={name+index}> <input type="checkbox" checked={brandsFilter.includes(name)} value={name} name="brand" onChange={(e)=>filterBrand(e.target.checked,e.target.value)} /> {name}<br/></div>
                ))}
                </div>
            </div>
            <div>
                Ideal For:<br/>
                <div>
                 <input type="checkbox" checked={idealFor.includes("men")} value="men" name="idealFor" onChange={(e)=>idealForFilter(e.target.checked,e.target.value)} /> Men<br/>
                 <input type="checkbox" checked={idealFor.includes("women")} value="women" name="idealFor" onChange={(e)=>idealForFilter(e.target.checked,e.target.value)} /> Women<br/>
                </div>
            </div>
            <div>
                Sizes:<br/>
                <div>
                    {
                        ["S","M","L","XL"].map((value,index)=>(
                           <div key={value+index}><input type="checkbox" checked={sizes.includes(value)} value={value} name="sizes" onChange={(e)=>sizesFilter(e.target.checked,e.target.value)} / > {value}<br/></div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default FacetFilter