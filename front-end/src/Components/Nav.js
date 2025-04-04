import React from 'react';
import {Link,useNavigate} from 'react-router-dom';


function Nav(){
    const navigate=useNavigate();
    const auth = localStorage.getItem('user');

    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }
    
    return(
        <div>
            <img className='logo' alt='logo' src='https://static.vecteezy.com/system/resources/thumbnails/006/547/168/small_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg'></img>
        {
            auth ?
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        }
        </div>
    )
}

export default Nav;