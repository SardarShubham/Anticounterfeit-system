import { Link } from "react-router-dom"

const Header=()=>{
    return(
        <div className="header-div">

            <nav>
                <ul>
                    <div>
                    <li><b>Anti Counterfeiting</b></li>
                    </div>
                    <div className="header-right"> 
                        <li>About</li>
                    <li><button>Login</button></li>
                    <li><button>Register</button></li>
                    
                    </div>
                </ul>
            </nav>
            <Link to={"/track"}><b className="track-link">Track Product</b></Link>
        </div>
    )
}
export default Header