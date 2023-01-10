import React, { useState } from 'react';
import styles from "../scss/navbar.module.scss"
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa';
import Script from 'next/script'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const navbarMenu = document.querySelector('#nav-links');


export default function Navbar() {
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };
    
    return (
            <nav className={`navbar ${styles.navBorder}`} role="navigation" aria-label="main navigation">

                <div className={`navbar-brand`}>
                    <Link href="/" className={`navbar-item`}>
                        <div href="/" className={` ${styles.initialsBox}`}>
                            <a className={`${styles.initials}`}>
                                GS
                            </a>
                        </div>  
                    </Link>

                    <a className={`navbar-burger ${isActive ? "is-active" : "inactive"}`} id='burger' onClick={ToggleClass}>
                        <span/>
                        <span/>
                        <span/>
                    </a>
                    
                </div>

                <div className={`navbar-menu ${isActive ? "is-active" : "inactive"}`} id='nav-links'>
                    {/* <div className={`navbar-start ${styles.rightNavLayout}`}> */}
                    <div className={`${styles.navOptionsDiv}`}>
                        <Link href="/projects" >
                            <a href="/projects" className={`navbar-item ${styles.navbarText}`}>
                                Projects
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className={`navbar-item ${styles.navbarText}`}>
                                About
                            </a>
                        </Link>

                        <Link href="/contact">
                            <a className={`navbar-item ${styles.navbarText}`}>
                                Writing
                            </a>
                        </Link>

                        <Link href="/contact">
                            <a className={`navbar-item ${styles.navbarText}`}>
                                Photos
                            </a>
                        </Link>

                        <Link href="/jokes">
                            <a className={`navbar-item ${styles.navbarText}`}>
                                Jokes
                            </a>
                        </Link>        
                    </div>

                    <div className={`navbar-end ${styles.center}`}>
                        <a href="https://twitter.com/GrahamSabin" target="_blank">
                            <div className={`box ${styles.twitterButton}`}>
                                <FaTwitter size={20} icon="fa-brands fa-twitter" className={`${styles.iconFavicon}`}/>
                                <p className={`${styles.twitterButtonText}`}>Follow</p>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
    )
}