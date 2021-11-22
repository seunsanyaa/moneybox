import './nav.scss'
import {NavLink} from "react-router-dom"
import {logo, arrow, apple, google, menu} from "./icon";
// import { gsap } from "gsap";
// import {useRef} from "react";
import React, { useEffect } from 'react';
// import {TimelineMax} from "gsap";

const NavBar = () =>{



    return(

        <div className='navBar'>
            <div className='container navContainer' >


                <nav >
                    <header>
                        {logo}
                    </header>
                    <div className='navLinks'>
                    <NavLink to='/'> <span>Investing</span></NavLink>
                    <NavLink to='/'> <span>Savings</span></NavLink>
                    <NavLink to='/'> <span>Company  {arrow}  </span></NavLink>
                    <NavLink to='/'> <span>Learn</span></NavLink>
                    <NavLink to='/'> <span>Careers</span></NavLink>
                    <NavLink to='/'> <span>Support</span></NavLink>



</div>


                    <div className='stores'>

                        <button className='appleStore'>
                            {apple}
                        </button>

                        <button className='googleStore'>
                            {google}
                        </button>
                    </div>

                    <div className='menu'>
                        <a className='menuLink'>{menu}</a>

                        <div className='navLinksMobile'>
                            <NavLink to='/'> <span>Investing</span></NavLink>
                            <NavLink to='/'> <span>Savings</span></NavLink>
                            <NavLink to='/'> <span>Company  {arrow}  </span></NavLink>
                            <NavLink to='/'> <span>Learn</span></NavLink>
                            <NavLink to='/'> <span>Careers</span></NavLink>
                            <NavLink to='/'> <span>Support</span></NavLink>



                        </div>
                    </div>

                </nav>


            </div>


        </div>
    )


}

export default NavBar