import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    <div className="navbar-brand fw-bold fs-4" ><img style={{width:"120px",height:"50px"}} src="data:image/png;base64,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"/></div>

                                </NavLink>
                            </li>

                            
                            
                        </ul>
                    

                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
