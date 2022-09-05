import styles from "../scss/navbar.module.scss"


export default function Navbar() {
    return (
        <div className={`${styles.padding}`}>
            <nav className={`navbar-menu ${styles.border}`} role="navigation" aria-label="main navigation">

                <div className={`navbar-brand`}>
                    <a className={`navbar-item ${styles.nameClick}`} href="/">
                        Graham Sabin
                    </a>
                </div>

                <div className={`navbar-menu`}>
                    <div className={`navbar-start ${styles.rightNavLayout}`}>
                        <a className={`navbar-item ${styles.leftNavContent}`}>
                            DEVELOPER, ENTREPRENEUR
                        </a>
                    </div>

                    <div className={`navbar-end ${styles.rightNavLayout}`}>
                        <a className={`navbar-item ${styles.rightNavContent}`} href="/work">
                            work,
                        </a>
                        <a className={`navbar-item ${styles.rightNavContent}`} href="/about">
                            about,
                        </a>
                        <a className={`navbar-item ${styles.rightNavContent}`} href="/contact">
                            contact
                        </a>
                    </div>
                </div>
            </nav>

            <nav className={`navbar-menu is-hidden-desktop is-active ${styles.border}`} role="navigation" aria-label="main navigation">
                
                    <div className={`navbar-brand`}>
                        <a className={`navbar-item ${styles.nameClickMobile}`}>
                            Graham Sabin
                        </a>

                        <a className={`navbar-item ${styles.rightNavContentMobile}`}>
                            work,
                        </a>

                        <a className={`navbar-item ${styles.rightNavContentMobile}`}>
                            about,
                        </a>

                        <a className={`navbar-item ${styles.rightNavContentMobile}`}>
                            contact
                        </a>
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