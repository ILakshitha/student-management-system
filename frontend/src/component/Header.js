import React from "react";
import {Link} from "react-router-dom";

function Header(){
return(
    <dev>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link to="/" class="nav-link">Home </Link>
     </li>
     <li>
        <Link to="/add" class="nav-link">Add Student</Link>
      </li>
     
      <li class="nav-item">
        <a class="nav-link">Update Student</a>
      </li>
    </ul>
   
  </div>
</nav>
    </dev>
)

}

export default Header;