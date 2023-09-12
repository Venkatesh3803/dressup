import { useState } from "react";
import "./addproductform.css"
import { toast } from "react-toastify";
import { userRequest } from "../../redux/apicalls";


const Addproductform = () => {

    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState("")
    const [size, setSize] = useState([])
    const [color, setColor] = useState([])
    const [upLoad, setUpLoad] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [discount, setDiscount] = useState("")
    const [mrp, setMrp] = useState("")
    const [qty, setQty] = useState("")
    const [gender, setGender] = useState("")
    const [fabric, setFabric] = useState("")
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")

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

    const onChangeImage = async (e) => {
        if (e.target.files[0]) {
            setUpLoad(e.target.files[0])
            console.log(upLoad)
        }
        handleUpload()
    }

    const handleUpload = async () => {

        const data = new FormData()
        data.append("file", upLoad)
        data.append("upload_preset", "dressupstore")
        data.append("cloud_name", "ddsepnnsm")
        await fetch("  https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setImage(data.url)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await userRequest.post("/product",
                {
                    name,
                    desc, qty, price, mrp, discount, gender, category, fabric,
                    image,
                    color,
                    size,
                }
            )
            const data = await res.data;

            if (data === "orders Sucessfully") {
                toast.success("created Sucessfully", {
                    position: "bottom-center"
                })
            }
        } catch (err) {
            return (err)
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
                        <input type="file" onChange={onChangeImage} required />
                    </div>
                    <div className="product-inputs" >
                        <label htmlFor="">Gender:-</label>
                        <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} required>
                            <option>Options</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
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
                            <option>Shirts</option>
                            <option>Jeans</option>
                            <option>Dresses</option>
                            <option>Hoodies</option>
                            <option>ChudiDhar</option>
                            <option>Accessories</option>
                            <option>Shoes</option>
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
                            <select name="size" id="" onChange={handleChange} required>
                                <option value="">select</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
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
