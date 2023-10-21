import { useRef, useState } from "react";
import "./addproductform.css"
import { toast } from "react-toastify";
import { userRequest } from "../../requestMethods";
import axios from "axios";



const Addproductform = () => {

    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState("")
    const [size, setSize] = useState([])
    const [color, setColor] = useState([])
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [discount, setDiscount] = useState("")
    const [mrp, setMrp] = useState("")
    const [qty, setQty] = useState("")
    const [gender, setGender] = useState("")
    const [fabric, setFabric] = useState("")
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")


    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSize = () => {
        size.push(inputs.size)
        setInputs(inputs.size = "")
    }
    const handleColor = () => {
        color.push(inputs.color)
        setInputs(inputs.color = "")
    }


    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'dressupstore');
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload',
                    formData
                );
                const imageUrl = response.data.secure_url;
                setImage(imageUrl);

            } catch (err) {
                console.log(err)
            }

        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const newProduct = {
            name,
            desc, qty, price, mrp, discount, gender, category, fabric,
            color,
            size,
            brand,
            image: image
        }


        const res = await userRequest.post("/product", newProduct)

        const data = await res.data;

        if (res.status === 201) {
            toast.success("created Sucessfully", {
                position: "bottom-center"
            })
        }

    }



    return (
        <div className='product-form'>
            <h3 style={{ textAlign: "center" }}>Product Details</h3>
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="form-rows">
                    <div className="product-inputs">
                        <label htmlFor="">Title:-</label>
                        <input type="text" placeholder="Title" required name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>

                <div className="form-rows">
                    <div className="product-inputs">
                        <label htmlFor="">Image:-</label>
                        <input type="file" onChange={handleUpload} />
                    </div>
                    <div className="product-inputs" >
                        <label htmlFor="">Gender:-</label>
                        <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} required>
                            <option>Options</option>
                            <option value={"mens"}>Mens</option>
                            <option value={"women"}>Womens</option>
                            <option value={"kids"}>Kids</option>
                        </select>
                        <div className="product-inputs">
                            <label htmlFor="">Brand:-</label>
                            <input type="text" onChange={(e) => setBrand(e.target.value)} required />
                        </div>
                    </div>

                </div>
                <div className="form-rows" >
                    <div className="product-inputs">
                        <label htmlFor="">Quantity:-</label>
                        <input type="text" placeholder="Qty" name="qty" onChange={(e) => setQty(e.target.value)} required />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">Fabric:-</label>
                        <input type="text" placeholder="Fabric" name="fabric" onChange={(e) => setFabric(e.target.value)} />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">Catagory:-</label>
                        <select name="" id="options" onChange={(e) => setCategory(e.target.value)} required>
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
                        <textarea form-rowss={5} cols={50} name="desc" onChange={(e) => setDesc(e.target.value)} required />
                    </div>
                </div>
                <div className="form-rows">
                    <div className="product-inputs">
                        <label htmlFor="">Price:-</label>
                        <input type="text" placeholder="Price" name="price" onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">MRP:-</label>
                        <input type="text" placeholder="Mrp" name="mrp" onChange={(e) => setMrp(e.target.value)} />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">Discount:-</label>
                        <input type="text" placeholder="Discout % " name="discount" onChange={(e) => setDiscount(e.target.value)} />
                    </div>
                </div>
                <div className="color-and-size">
                    <div className="add-size">
                        <div className="form-rows">
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
                            {size && size.map((s) => {
                                return (
                                    <li key={s}>{s}</li>
                                )
                            })}
                        </div>
                    </div>

                    <div className="add-color">

                        <div className="form-rows">
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
                            {color && color.map((c) => {
                                return (
                                    <span key={c} style={{ backgroundColor: `${c}` }}></span>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Addproductform
