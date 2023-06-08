import React, { Component } from "react";

class Navigation extends Component{
    render(){
        return(
            <nav className='navbar navbar-light bg-light'>
                <img src="logo_adiona.png" id="logo"/>

                <div className="navbar nav" id="Options">
                    <div className="nav-item">
                        <a className="nav-link" href="#">Vuelos</a>
                    </div>
                    
                    <div className="nav-item">
                        <a className="nav-link" href="#">Hoteles</a>
                    </div>

                    <div className="nav-item">
                        <a className="nav-link" href="#">Cruceros</a>
                    </div>

                    <div className="nav-item">
                        <a className="nav-link" href="#">Autos</a>
                    </div>

                    <div className="nav-item">
                        <a className="nav-link" href="#">Tools</a>
                    </div>

                    <div className="nav-item">
                        <a className="nav-link" href="#">Ofertas</a>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="Options">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Option1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Option2</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="#">Option3</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;