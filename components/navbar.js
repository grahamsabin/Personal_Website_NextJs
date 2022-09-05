import styles from "../scss/navbar.module.scss"


export default function Navbar() {
    return (
        <div className={`${styles.padding}`}>
            <nav className={`navbar-menu ${styles.border}`} role="navigation" aria-label="main navigation">
                

                <div id="navbarBasicExample" className={`navbar-menu`}>
                    <div className={`navbar-brand`}>
                        <a className={`navbar-item ${styles.nameClick}`}>
                            Graham Sabin
                        </a>
                    </div>

                    <div className={`navbar-start ${styles.rightNavLayout}`}>
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
                    </div>
                </div>
            </nav>
        </div>
    )
}