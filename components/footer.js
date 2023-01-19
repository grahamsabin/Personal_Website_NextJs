import style from '../scss/footer.module.scss'
export default function Footer () {
    return (
        <div className={`${style.page}`}>
            <footer className={`${style.footerPin}`}>
                <div className={`columns is-active is-multiline ${style.footer}`}>
                    <div className={`column is-4-desktop is-12-tablet is-12-mobile`}>
                        <h1 className={`${style.footerTitles}`}>Life's not short, you just gotta do more.</h1>
                    </div>
                    
                    <div className={`column is-2-desktop is-6-tablet is-12-mobile`}>
                        <div className={`columns is-multiline`}>
                            <div className={`column is-full`}>
                                <h1 className={`${style.footerTitles}`}>Elsewhere:</h1>
                                <div className={`${style.linkStack}`}>
                                    <p><a className={`${style.footerBody}`} href="https://twitter.com/GrahamSabin" target="_blank">Twitter</a></p>
                                    <p><a className={`${style.footerBody}`} href="https://www.linkedin.com/in/grahamsabin/" target="_blank">LinkedIn</a></p>
                                    <p><a className={`${style.footerBody}`} href="https://www.instagram.com/graham.sabin/" target="_blank">Instagram</a></p>
                                    <p><a className={`${style.footerBody}`} href="https://www.facebook.com/graham.sabin.5" target="_blank">Facebook</a></p>
                                    <p><a className={`${style.footerBody}`} href="mailto:grahamcsabin@gmail.com" target="_blank">Email</a></p>
                                </div>
                            </div>
                            

                        </div>
                        

                    </div>

                    <div className={`column is-3-desktop is-6-tablet is-hidden-mobile`}>
                        <div className={`columns is-multiline`}>
                            <div className={`column is-full`}>
                                <h1 className={`${style.footerTitles}`}>Featured Stuff</h1>
                                <div className={`${style.linkStack}`}>
                                    <p><a className={`${style.footerBody}`} href="https://twitter.com/GrahamSabin" target="_blank">Article 1 Name</a></p>
                                    <p><a className={`${style.footerBody}`} href="https://www.linkedin.com/in/grahamsabin/" target="_blank">Article 2 Name</a></p>
                                    <p><a className={`${style.footerBody}`} href="https://www.instagram.com/graham.sabin/" target="_blank">Article 3 Name</a></p>
                                    <p><a className={`${style.footerBody}`} href="https://www.facebook.com/graham.sabin.5" target="_blank">Article 4 Name</a></p>
                                    <p><a className={`${style.footerBody}`} href="mailto:grahamcsabin@gmail.com" target="_blank">Article 5 Name</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`column is-3-desktop is-hidden-touch`}>
                        <div className={`columns is-multiline`}>
                            <div className={`column is-full`}>
                                <h1 className={`${style.footerTitles}`}>Thank you for stopping by</h1>
                                <p className={`${style.footerBody}`}>This is the personal site of me, Graham Sabin. Hopefully you found what you were looking for. Consider this a glimpse into my life and some of my daily thoughts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </footer>
        </div>
    )
}

