import React, { useEffect, useState } from 'react'
import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import { useParams } from 'react-router-dom'
import { getSingleProducts } from '../../requestMethods'

const EditPage = () => {


    const [inputs, setInputs] = useState({})
    const [size, setSize] = useState([])
    const [color, setColor] = useState([])

    const [category, setCategory] = useState("")


    const { id } = useParams()
    useEffect(() => {
        getSingleProducts(`/product/single/${id}`, "get").then((res) => {
            setInputs(res)
        })

    }, [id])

    const handleSubmit = () => {

    }

    const handleUpload = () => {

    }

    const handleColor = () => {

    }
    const handleRemoveSize = () => {

    }
    const handleSize = () => {

    }
    const handleRemoveColor = () => {

    }

    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }
    return (
        <>
            <DashNavbar />
            <div className="dashhomepage">
                <div className="dash-left">
                    <SideBar />
                </div>
                <div className="dash-right">
                    <div className='product-form'>
                        <h3 style={{ textAlign: "center" }}>Edit Details</h3>
                        <form action="" className="form" onSubmit={handleSubmit}>
                            <div className="form-rows">
                                <div className="product-inputs">
                                    <label htmlFor="">Title:-</label>
                                    <input type="text" placeholder="Title" value={inputs.name} required name="name" onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-rows">
                                <div className="product-inputs">
                                    <label htmlFor="">Image:-</label>
                                    <input type="file" onChange={handleUpload} />
                                </div>
                                <div className="form-rows" >
                                    <div className="product-inputs">
                                        <label htmlFor="">Gender:-</label>
                                        <select name="gender" id="gender" value={inputs.gender} onChange={handleChange} required>
                                            <option>Options</option>
                                            <option value={"mens"}>Mens</option>
                                            <option value={"women"}>Womens</option>
                                            <option value={"kids"}>Kids</option>
                                        </select>
                                    </div>
                                    <div className="product-inputs">
                                        <label htmlFor="">Brand:-</label>
                                        <input type="text" placeholder="Puma" value={inputs.brand} onChange={handleChange} required />
                                    </div>
                                </div>

                            </div>
                            <div className="form-rows" >
                                <div className="product-inputs">
                                    <label htmlFor="">Quantity:-</label>
                                    <input type="number" placeholder="Qty" name="qty" value={inputs.qty} onChange={handleChange} required />
                                </div>
                                <div className="product-inputs">
                                    <label htmlFor="">Fabric:-</label>
                                    <input type="text" placeholder="Fabric" name="fabric" value={inputs.fabric} onChange={handleChange} />
                                </div>
                                <div className="product-inputs">
                                    <label htmlFor="">Catagory:-</label>
                                    <select name="category" id="options" value={inputs.category} onChange={handleChange} required>
                                        <option>Options</option>
                                        <option value={"shirt"}>Shirts</option>
                                        <option value={"jeans"}>Jeans</option>
                                        <option value={"dress"}>Dresses</option>
                                        <option value={"hoodies"}>Hoodies</option>
                                        <option value={"chudidhar"}>ChudiDhar</option>
                                        <option value={"shoes"}>Shoes</option>
                                    </select>
                                </div>

                            </div>
                            <div className="form-rows">
                                <div className="product-inputs">
                                    <label htmlFor="">Description:-</label>
                                    <textarea form-rowss={5} cols={50} name="desc" value={inputs.desc} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-rows">
                                <div className="product-inputs">
                                    <label htmlFor="">Price:-</label>
                                    <input type="number" placeholder="Price" value={inputs.price} name="price" onChange={handleChange} required />
                                </div>
                                <div className="product-inputs">
                                    <label htmlFor="">MRP:-</label>
                                    <input type="number" placeholder="Mrp" value={inputs.mrp} name="mrp" onChange={handleChange} />
                                </div>
                                <div className="product-inputs">
                                    <label htmlFor="">Discount:-</label>
                                    <input type="number" placeholder="Discout % " value={inputs.discount} name="discount" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="color-and-size">
                                <div className="add-size">
                                    <div className="size-rows">
                                        <label htmlFor="">Sizes:-</label>
                                        {category === "shoes" ?
                                            <select name="size" id="" onChange={handleChange} required>
                                                <option value="">select</option>
                                                <option value="6">6</option>
                                                <option value="6.5">6.5</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                            :
                                            <select name="size" id="" onChange={handleChange} required>
                                                <option value="">select</option>
                                                <option value="XS">XS</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                            </select>
                                        }
                                        <button type="button" style={{ width: "fit-content" }} onClick={handleSize}>Add</button>
                                    </div>

                                    <div className="size-list">
                                        {size && inputs.size?.map((s) => {
                                            return (
                                                <>
                                                    <li key={s}>{s}
                                                        <span onClick={() => handleRemoveSize(s)}>X</span>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="add-color">
                                    <div className="color-rows">
                                        <label htmlFor="">Colors:-</label>
                                        <select name="color" id="" onChange={handleChange} required>
                                            <option value="">select</option>
                                            <option value="red">Red</option>
                                            <option value="yellow">Yellow</option>
                                            <option value="black">Black</option>
                                            <option value="pink">Pink</option>
                                            <option value="white">White</option>
                                            <option value="gray">Gray</option>
                                            <option value="maroon">Marroon</option>
                                            <option value="green">Green</option>
                                            <option value="blue">Blue</option>
                                            <option value="violet">Violet</option>
                                        </select>
                                        <button type="button" style={{ width: "fit-content" }} onClick={handleColor}>Add Color</button>
                                    </div>

                                    <div className="color-list">
                                        {color && inputs.color?.map((c) => {
                                            return (
                                                <>
                                                    <p key={c} style={{ backgroundColor: `${c}` }}>
                                                        <span onClick={() => handleRemoveColor(c)}>X</span>
                                                    </p>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPage