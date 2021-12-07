import React, { useContext, useState } from 'react'
import '../../css/header.css'
import { BarLoader } from 'react-spinners'
import { css } from "@emotion/react";
import NotebookContext from '../../context/NotebookContext';
import UserProfile from '../screens/auth/UserProfile';
import '../screens/auth/css/displayUser.css'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
function Headers() {
    const Context = useContext(NotebookContext)
    const { loading, addclasses, setAddclasses } = Context
    const override = css`
                    position: absolute;
                    width:100%;
                    background:rgb(136 136 136);
                    overflow-y: visible;
                    z-index: 21;
                    `;
    const toggleMenuBtn = () => {
        addclasses?setAddclasses(false):setAddclasses(true)
        // if (addclasses) {
        //     setAddclasses(false)
        // }
        // if (!addclasses) {
        //     setAddclasses(true)
        // }
    }
    return (
        <>
            <BarLoader size="67%" css={override} color='rgb(8 210 236)' loading={loading} />
            <nav class="cNavbar navbar navbar-expand-lg navbar-dark bg-dark">
                <div className={`container2 ${addclasses ? "" : "change"}`} onClick={toggleMenuBtn} id="my1"  >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <Link to="/" class="navbar-brand" href="#">Notes Yard</Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        {/* <li class="nav-item d-flex align-items-center">
                            <a class="nav-link" href="#">Home</a>
                        </li> */}
                    </ul>

                </div>

                <div className="d-flex rightHeaders">
                   <SearchBar/>
                    <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight5" aria-controls="offcanvasRight" className="profile" src="https://w1.pngwing.com/pngs/386/684/png-transparent-face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette.png" alt="" />
                </div>

                {/* <img style={{width: '34px',borderRadius:'50%', cursor: 'pointer',marginRight:'8vw'}} src="https://p.kindpng.com/picc/s/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png" alt=""/> */}
            </nav>
            <UserProfile />
        </>
    )
}

export default Headers
