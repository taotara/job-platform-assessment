import React, { useRef } from 'react';
import { Nav, Wrapper } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Navbar() {
    const navRef = useRef;

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav");
    // }
  return (
    <Wrapper>
        <Nav>
            <Link to="/">Jobs</Link>
            <a href="/#">Jobs</a>
            <a href="/#">Company Review </a>
            <a href="/#">Find Salaries</a>
            <button>Post Job</button>
            <button>
                <FaTimes />
            </button>
        </Nav>
        <button>
                <FaBars />
        </button>
    </Wrapper>
  )
}

export default Navbar