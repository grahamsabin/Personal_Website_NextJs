import style from '../scss/projects.module.scss';
import Link from 'next/link'



export default function Projects() {
    return(
        <>
            <div className={`${style.introTextSpacing} ${style.center}`}>
                <h1 className={`${style.introText}`}>
                    I’m a developer, entrepreneur-wannabe, athlete on the weekends, and all around cool guy. Also, sometimes I'm funny.
                </h1>
            </div>

            <div className={`${style.blackBorder}`}></div>

            <div className={`columns is-multiline is-mobile`}>
                <div href='/contact' className={`column is-4-desktop is-6-tablet is-12-mobile ${style.imageGrids}`}>
                    <Link href='/jokes'>
                        <a>
                            <div className={`${style.overlayTextDiv}`}>
                                <h3 className={`${style.overlayText}`}>Overlay Text</h3>    
                            </div>  
                            <img src="image1.jpg" alt="Image 1" className={`${style.projectImage}`}/> 
                        </a>
                    </Link>
                </div>
                <div className={`column is-4-desktop is-6-tablet is-12-mobile ${style.imageGrids}`}>
                    <Link href='/jokes'>
                        <a>
                            <div className={`${style.overlayTextDiv}`}>
                                <h3 className={`${style.overlayText}`}>Overlay Text</h3>    
                            </div>  
                            <img src="image1.jpg" alt="Image 1" className={`${style.projectImage}`}/> 
                        </a>
                    </Link>
                </div>
                <div className={`column is-4-desktop is-6-tablet is-12-mobile ${style.imageGrids}`}>
                    <Link href='/jokes'>
                        <a>
                            <div className={`${style.overlayTextDiv}`}>
                                <h3 className={`${style.overlayText}`}>Overlay Text</h3>    
                            </div>  
                            <img src="image2.jpg" alt="Image 1" className={`${style.projectImage}`}/> 
                        </a>
                    </Link>
                </div>
                <div className={`column is-4-desktop is-6-tablet is-12-mobile ${style.imageGrids}`}>
                    <Link href='/jokes'>
                        <a>
                            <div className={`${style.overlayTextDiv}`}>
                                <h3 className={`${style.overlayText}`}>Overlay Text</h3>    
                            </div>  
                            <img src="image1.jpg" alt="Image 1" className={`${style.projectImage}`}/> 
                        </a>
                    </Link>
                </div>
            </div>

            
        </>
    )
}


{/* <Grid container spacing={0} className={`${style.imageGrids}`} >
<Grid item xs={4} className={`${style.imageGrids}`}>
    <img src="image1.jpg" alt="Image 1" style={{ width: '100%' }} />
</Grid>
<Grid item xs={4} className={`${style.imageGrids}`}>
    <img src="image2.jpg" alt="Image 2" style={{ width: '100%' }} />
</Grid>
<Grid item xs={4} className={`${style.imageGrids}`}>
    <img src="image3.jpg" alt="Image 3" style={{ width: '100%' }} />
</Grid>
<Grid item xs={4}>
    <img src="image4.jpg" alt="Image 4" style={{ width: '100%' }} />
</Grid>
<Grid item xs={4}>
    <img src="image5.jpg" alt="Image 5" style={{ width: '100%' }} />
</Grid>
<Grid item xs={4}>
    <img src="image6.jpg" alt="Image 6" style={{ width: '100%' }} />
</Grid>
</Grid> */}


