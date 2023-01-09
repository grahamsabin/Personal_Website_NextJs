import style from '../scss/landingPage.module.scss';


export default function Projects() {
    return(
        <>
            <div className={`columns is-multiline`}>

                <div className={`column is-7 is-hidden-mobile ${style.mainPadding}`}>
                    <div className={`columns is-multiline`}>
                        <div className={`column is-full ${style.helloText}`}>
                            <p>Hello.</p>
                        </div>
                        <div className={`column is-full ${style.iAmText}`}>
                            <p>I am Graham</p>
                        </div>
                        <div className={`column is-full is-full-mobile ${style.descriptionText}`}>
                            <p>
                                What&apos;s up! I&apos;m a developer and student out of Seattle, Washington. I&apos;m into working
                                on wild products and I&apos;ve spent my short career surrounded by them. I&apos;ve built a 
                                startup (unsuccesful) and worked at a pretty cool one (still succesful), so I&apos;ve gained
                                some great experience bringing products to life and making things happen. Looking for 
                                what&apos;s next!

                            </p>
                        </div>
                    </div>
                </div>

                <div className={`column is-7 is-hidden-tablet ${style.mainPadding}`}>
                    <div className={`columns is-multiline`}>
                        <div className={`column is-full ${style.helloTextMobile}`}>
                            <p>Hello.</p>
                        </div>
                        <div className={`column is-full ${style.iAmTextMobile}`}>
                            <p>I am Graham</p>
                        </div>
                        {/* <div className={`column is-full ${style.grahamMobile}`}>
                            <p>Graham</p>
                        </div> */}
                        <div className={`column is-full is-full-mobile ${style.descriptionTextMobile}`}>
                            <p>
                                What&apos;s up! I&apos;m a developer and student out of Seattle, Washington. I&apos;m into working
                                on wild products and I&apos;ve spent my short career surrounded by them. I&apos;ve built a 
                                startup (unsuccesful) and worked at a pretty cool one (still succesful), so I&apos;ve gained
                                some great experience bringing products to life and making things happen. Looking for 
                                what&apos;s next!

                            </p>
                        </div>
                    </div>
                </div>

                


                <div className={`column is-5-desktop ${style.imageMargin}`}>
                        {/* <figure className={`image is-2by3 ${style.imageMargin}`}> */}
                            <img src="person_image.jpg" className={`${style.imageDiv}`}/>
                        {/* </figure>   */}
                </div>
                

            </div>
            

        </>
    )
}