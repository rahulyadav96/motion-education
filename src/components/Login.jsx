import './login.scss';
import {useState} from "react";

export const Login = ({toggle}) =>{
    const [formData,setFormData] = useState({
        email:"",
        password:""
    }) 

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
    }

    const handleChange = ()=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    return (
       
            <div>
                <div className="">
                    <button onClick={toggle} className="closeBtn">X</button>
                </div>
                <h1>Sign In</h1>
                <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="text" onChange={handleChange} value={formData.email}/>
                    <input type="password" placeholder="Password" onChange={handleChange} value={formData.password}/>
                    <input type="submit" value="Login" className="sbt"/>
                </form>
                </div>
            </div>
       
    )
}