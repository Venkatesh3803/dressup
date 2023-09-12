import "./loginPage.css"
import { Link } from "react-router-dom"
import { login } from "../../redux/apicalls"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const LoginPage = () => {
    const { isLoading, error } = useSelector((state) => state.auth)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
  
    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const reset = () => {
        setPassword("")
        setUsername("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch, { username, password })
        reset()
    
    }

    return (
        <div className="login_page">
            <img className="bg" src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="login_container">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="inputs">
                        <label htmlFor="">User Name:-</label>
                        <input type="text" placeholder="Jhon" name="username" value={username} onChange={handleChange} required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">Password:-</label>
                        <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required />
                    </div>
                    {isLoading ? <button type="submit" style={{ cursor: "not-allowed", backgroundColor: "salmon" }}>Login</button> : <button type="submit">Login</button>}
                    {error && <span style={{ color: "red", textAlign: "end" }}> *Invalid Credentials</span>}

                    <Link to={"../register"} style={{ textDecoration: "none", color: "black" }}>
                        <span>Don't have account! Sign In</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LoginPage