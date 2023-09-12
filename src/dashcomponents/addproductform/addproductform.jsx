import { useState } from "react";
import "./addproductform.css"
import { toast } from "react-toastify";
import { userRequest } from "../../redux/apicalls";


const Addproductform = () => {

    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState("")
    const [size, setSize] = useState([])
    const [upLoad, setUpLoad] = useState("")

    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSize = () => {
        size.push(inputs.size)
        setInputs(inputs.size = "")
    }

    console.log(size)

    const onChangeImage = async (e) => {
        if (e.target.files[0]) {
            setUpLoad(e.target.files[0])
            console.log(upLoad)
        }
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
        handleUpload()
        try {
            const res = await userRequest.post("/product", {

                name: inputs.name,
                image: image,
                desc: inputs.desc,
                gender: inputs.gender,
                category: inputs.category,
                color: inputs.color,
                size,
                price: inputs.price,
                discount: inputs.discount,
                mrp: inputs.mrp,
                fabric: inputs.fabric,

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
                        <input type="text" placeholder="Title" name="name" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-rows">
                    <div className="product-inputs">
                        <label htmlFor="">Image:-</label>
                        <input type="file" onChange={onChangeImage} />
                    </div>
                    <div className="product-inputs" >
                        <label htmlFor="">Gender:-</label>
                        <select name="gender" id="gender" onChange={handleChange}>
                            <option>Options</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                </div>
                <div className="form-rows" >
                    <div className="product-inputs">
                        <label htmlFor="">Color:-</label>
                        <input type="text" placeholder="Color" name="color" onChange={handleChange} />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">Fabric:-</label>
                        <input type="text" placeholder="Fabric" name="fabric" onChange={handleChange} />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">Catagory:-</label>
                        <select name="" id="options" onChange={handleChange}>
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
                        <textarea form-rowss={5} cols={50} name="desc" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-rows">
                    <div className="product-inputs">
                        <label htmlFor="">Price:-</label>
                        <input type="text" placeholder="Price" name="price" onChange={handleChange} />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">MRP:-</label>
                        <input type="text" placeholder="Mrp" name="mrp" onChange={handleChange} />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">Discount:-</label>
                        <input type="text" placeholder="Discout % " name="discount" onChange={handleChange} />
                    </div>
                    <div className="product-inputs">
                        <label htmlFor="">Discount:-</label>
                        <input type="text" placeholder="Discout % " name="discount" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-rows">
                    <label htmlFor="">Sizes:-</label>
                    <select name="size" id="" onChange={handleChange}>
                        <option value="">Sizes</option>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Addproductform
