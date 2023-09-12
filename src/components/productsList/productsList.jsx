import "./productsList.css"
import ProductsCard from "../productsCard/ProductsCard"
import { useEffect, useState } from "react"
import { publicRequest } from "../../redux/apicalls"


const Products = ({ popular, products, singlepage, fillters }) => {
    const gender = window.location.search.split("=")[1]
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")
    const [cat, setCat] = useState("")


    const [prod, setProd] = useState("")
    useEffect(() => {
        const getAllProducts = async () => {
            const res = await publicRequest.get(gender ? `/product?size=${size}&color=${color}&cat=${cat}` : "/product");
            const date = await res.data;
            setProd(date)
        }
        getAllProducts();
    }, [gender, size, color, cat])



    return (
        <div className='products'>
            <h1>{popular}</h1>
            {products ? <h1 style={{ textAlign: "start" }}>{products}</h1> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio repellendus officiis, in quisquam molestiae nobis sequi? Nam accusantium optio incidunt ad cum totam ut qui reprehenderit dolorem rem. Nihil!</p>}

            {fillters ?
                <div className="filters">
                    <div className="filter-left">
                        <div className="filter-input">
                            <label htmlFor="">size :-</label>
                            <select name="" id="size" onChange={(e) => setSize(e.target.value)}>
                                <option value={""}>Select</option>
                                <option value={"XS"}>XS</option>
                                <option value={"S"}>S</option>
                                <option value={"M"}>M</option>
                                <option value={"L"}>L</option>
                                <option value={"XL"}>XL</option>
                                <option value={"XXL"}>XXL</option>
                            </select>
                        </div>
                        <div className="filter-input">
                            <label htmlFor="">Colors :-</label>
                            <select name="" id="color" onChange={(e) => setColor(e.target.value)}>
                                <option value={""}>Select</option>
                                <option value={"blue"}>blue</option>
                                <option value={"red"}>red</option>
                                <option value={"yellow"}>yellow</option>
                                <option value={"pink"}>pink</option>
                                <option value={"black"}>black</option>
                                <option value={"orange"}>orange</option>
                                <option value={"maroon"}>maroon</option>
                                <option value={"white"}>white</option>
                                <option value={"green"}>green</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-right">

                        <div className="filter-input">
                            <label htmlFor="">Categoty :-</label>
                            <select name="" id="category" onChange={(e) => setCat(e.target.value)}>
                                <option value={""}>Select</option>
                                <option value={"t-shirt"}>T-shirt</option>
                                <option value={"shirt"}>Shirts</option>
                                <option value={"kurtha"}>Kurthas</option>
                                <option value={"dress"}>Dresses</option>
                                <option value={"hoodie"}>Hoodies</option>
                                <option value={"jeans"}>Jeans</option>
                                <option value={"shorts"}>Shorts</option>
                                <option value={"accessories"}>Accessories</option>


                            </select>
                        </div>
                        <div className="filter-input">
                            <label htmlFor="">Sort</label>
                            <select name="" id="">
                                <option>Newest</option>
                                <option>Sort By High</option>
                                <option>Sort By Low</option>

                            </select>
                        </div>
                    </div>
                </div>
                : ""}


            <div className={products ? "product-container-forpage" : "product-container"}>

                {prod && prod.products.map((product) => {
                    return (
                        <ProductsCard key={product._id} single={singlepage} prod={product} />
                    )
                })}

            </div>
        </div >
    )
}

export default Products