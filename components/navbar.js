import styles from "../scss/navbar.module.scss"
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={`${styles.padding}`}>
            <nav className={`navbar-menu ${styles.border}`} role="navigation" aria-label="main navigation">

                <div className={`navbar-brand`}>
                    <Link href="/">
                        <a className={`navbar-item ${styles.nameClick}`}>
                            Graham Sabin
                        </a>
                    </Link>
                </div>

                <div className={`navbar-menu`}>
                    <div className={`navbar-start ${styles.rightNavLayout}`}>
                            <a className={`navbar-item ${styles.leftNavContent}`}>
                                DEVELOPER, ENTREPRENEUR
                            </a>
                    </div>

                    <div className={`navbar-end ${styles.rightNavLayout}`}>
                        <Link href="/work">
                            <a className={`navbar-item ${styles.rightNavContent}`}>
                                work
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className={`navbar-item ${styles.rightNavContent}`}>
                                about
                            </a>
                        </Link>

                        <Link href="/contact">
                            <a className={`navbar-item ${styles.rightNavContent}`}>
                                contact
                            </a>
                        </Link>        
                    </div>
                </div>
            </nav>

            <nav className={`navbar-menu is-hidden-desktop is-active ${styles.border}`} role="navigation" aria-label="main navigation">
                
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
                <div className={`navbar-menu`}>
                    {/* <div className={`navbar-start ${styles.rightNavLayout}`}>
                        <a className={`navbar-item ${styles.rightNavContent}`}>
                            DEVELOPER, ENTREPRENEUR
                        </a>
                    </div>

                    <div className={`navbar-end ${styles.rightNavLayout}`}>
                        <a className={`navbar-item ${styles.rightNavContent}`}>
                            work,
                        </a>
                        <a className={`navbar-item ${styles.rightNavContent}`}>
                            about,
                        </a>
                        <a className={`navbar-item ${styles.rightNavContent}`}>
                            contact
                        </a>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}