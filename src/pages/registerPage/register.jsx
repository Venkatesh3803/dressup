import { useDispatch, useSelector } from "react-redux"
import "./registerpage.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { register } from "../../redux/apicalls"
import { toast } from "react-toastify"


const Register = () => {
    const { isLoading, error } = useSelector((state) => state.auth)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [conformPass, setConformPass] = useState("")
    const dispatch = useDispatch()


    console.log(error, isLoading)
    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        } else if (e.target.name === "conformpass") {
            setConformPass(e.target.value)
        }
    }

    const reset = () => {
        setEmail("")
        setUsername("")
        setPassword("")
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== conformPass) return toast.error("Password doesnot match", {
            position: "bottom-center"
        })
        register(dispatch, { username, password, email })
        reset()
    }

    return (
        <div className="register_page">
            <img className="bg" src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="register_container">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className="inputs">
                        <label htmlFor="">Email:-</label>
                        <input type="email" placeholder="example@gmail.com" required name="email" value={email} onChange={handleChange} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">User Name:-</label>
                        <input type="text" placeholder="Jhon" name="username" required value={username} onChange={handleChange} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">Password:-</label>
                        <input type="password" placeholder="Password" name="password" required value={password} onChange={handleChange} minLength={6} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">Conform Password:-</label>
                        <input type="password" placeholder="Conform Pass" name="conformpass" required value={conformPass} onChange={handleChange} minLength={6} />
                    </div>

                    {isLoading ? <button type="submit" style={{ cursor: "not-allowed", backgroundColor: "salmon" }}>Sign Up</button> : <button type="submit">Sign Up</button>}
                    {error && <span style={{ color: "red", textAlign: "end" }}> *This Email already Taken</span>}

                    <Link to={"../login"} style={{ textDecoration: "none", color: "black" }}>
                        <span>Already have account ! Login</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default Register