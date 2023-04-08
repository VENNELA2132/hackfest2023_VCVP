import { Outlet, Link } from "react-router-dom";
import './Layout.css'; 

let toggled = false;

function searchBarOnClick(){
    console.log(toggled);
    if (toggled) {toggled = false;} 
    else {toggled = true;}
}


const Layout = () => {
  return (
    <div className="layout">
      <div className="nav">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/homePage">homePage</Link></li>
          <li> <Link to="/searchResultsPage">searchResultsPage</Link> </li>
        </ul>
      </div>
    <div id="main">
        <div class="c">
            <div class="search-bar" onClick={searchBarOnClick}>
                <div class="glass-icon">
                    <div class="glass-icon-c" >
                        <span class="glass-icon__circle"></span>
                        <span class="glass-icon__stick"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Outlet />
    </div>
  )
};

export default Layout;