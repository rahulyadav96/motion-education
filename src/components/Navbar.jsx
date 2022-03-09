import './navbar.scss'
import {Login} from "./Login"
export const Navbar = () => {
    const toggle = ()=>{
        var blur = document.getElementById("navbar");
        blur.classList.toggle('active')
        var popup = document.getElementById("popup");
        popup.classList.toggle('active')
    }
    return (
        <>
            <div id="navbar">
                <div className="nav-container">
                    <div className="left-navbar">Youtube<span>.</span>com</div>
                    <div className="right-navbar">
                        <button type="button" className='free-trial'>Start free Trial</button>
                        <button type="button" className='login' onClick={toggle}>Login</button>
                    </div>
                </div>
            </div>
            <div id="popup">
                <Login toggle={toggle} />
            </div>
            
        </>
    )
}