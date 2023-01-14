import style from '../scss/about.module.scss'
export default function About() {
    return (
        <div className={`${style.pageSetup}`}>
            <div className={`columns is-mobile is-multiline`}>
                <div className={`column is-full`}>
                    <h1 className={`${style.headerText}`}>About Graham</h1>
                </div>

                {/* CONTENT SECTION, 3 COLUMNS */}

                {/* COLUMN 1 */}
                <div className={`column is-4-desktop is-6-tablet is-12-mobile`}>
                    <div className={`columns is-multiline`}>
                        
                        <div className={`column is-full`}>
                            <div className={`${style.divideBar}`}></div>
                            <h1 className={`${style.hf}`}>About Graham</h1>
                        </div>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className={`column is-4-desktop is-6-tablet is-12-mobile`}>
                    <div className={`columns is-multiline`}>
                        <div className={`column is-full`}>
                            <h1 className={`${style.hf}`}>About Graham</h1>
                        </div>
                    </div>
                </div>

                {/* COLUMN 3 */}
                <div className={`column is-4-desktop is-6-tablet is-12-mobile`}>
                    <div className={`columns is-multiline`}>
                        <div className={`column is-full`}>
                            <h1 className={`${style.hf}`}>About Graham</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}