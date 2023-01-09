import React from 'react';
import styles from "../scss/navbar.module.scss"
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    return (
        
            <nav className={`navbar ${styles.navBorder}`} role="navigation" aria-label="main navigation">

                <div className={`navbar-brand is-active`}>
                    <Link href="/">
                        <div className={` ${styles.initialsBox}`}>
                            {/* <a className={`${styles.initials} navbar-item `}> This is the same as the following line, but as a navbar-item */}
                            <a className={`${styles.initials}`}>
                                GS
                            </a>
                        </div>
                        
                    </Link>
                </div>

                <div className={`navbar-menu is-active navbar-burger`}>
                    <div className={`navbar-start ${styles.rightNavLayout}`}>
                        <Link href="/projects">
                            <a className={`navbar-item ${styles.navbarText}`}>
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

                        <Link href="/contact">
                            <a className={`navbar-item ${styles.navbarText}`}>
                                Jokes
                            </a>
                        </Link>        
                    </div>

                    <div className={`navbar-end ${styles.twitterButtonCenter}`}>
                        <a href="https://twitter.com/GrahamSabin" target="_blank">
                            <div className={`box ${styles.twitterButton}`}>
                                <FaTwitter size={20} icon="fa-brands fa-twitter" className={`${styles.iconFavicon}`}/>
                                <p className={`${styles.twitterButtonText}`}>Follow</p>
                            </div>
                        </a>
                    </div>

                    {/* <a className={`navbar-burger`}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}

                </div>

             

            </nav>





            

            /* <nav className={`navbar-menu is-hidden-desktop is-active ${styles.mobileNav}`} role="navigation" aria-label="main navigation">
                
                    <div className={`navbar-brand`}>
                        
                        <Link href="/">
                            <a className={`navbar-item ${styles.nameClickMobile}`}>
                                Graham Sabin
                            </a>
                        </Link>
                        <Link href="/work">
                            <a className={`navbar-item ${styles.rightNavContentMobile}`}>
                                work
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className={`navbar-item ${styles.rightNavContentMobile}`}>
                                about
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className={`navbar-item ${styles.rightNavContentMobile}`}>
                                contact
                            </a>
                        </Link>  

                    </div>
                <div className={`navbar-menu is-active`}>



                </div>
            </nav> */





    )
}