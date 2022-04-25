import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
        <div class="home border-0 ">
            <div class="home1 py-4 px-3">
            <Link to="/customers" ><but>Employee</but></Link>
            </div>
            <div class="home1 py-4 px-4">
            <Link to="/menu"><but>Menu</but></Link>
            </div>
        </div>
    </div>
  )
}
export default Home;