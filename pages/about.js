import style from '../scss/about.module.scss';
import React from 'react';
import { FaTwitter, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

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
                            <img src="G_Headshot.jpeg" alt="Graham Sabin Headshot" className={`${style.prmage}`}/>
                            
                            <div className={`${style.divideBar}`}></div>
                            <h2 className={`${style.subtitle}`}>Currently</h2>
                            <p className={`${style.pText}`}>I'm at Gonzaga University where I study computer science and entrepreneurship.</p>

                            <div className={`${style.socialsLayout}`}>
                                <div className={`${style.socialsIndividual}`}>
                                    <FaTwitter size={20} icon="fa-brands fa-twitter" className={`${style.twitterIcon}`}/>
                                    <p>Follow me on <a className={`${style.hyperlink}`} href="https://twitter.com/GrahamSabin" target="_blank">Twitter</a></p>
                                </div>

                                <div className={`${style.socialsIndividual}`}>
                                    <FaLinkedin size={20} icon="fa-brands fa-linkedin" className={`${style.linkedInIcon}`}/>
                                    <p>Connect with me on <a className={`${style.hyperlink}`} href="https://www.linkedin.com/in/grahamsabin/" target="_blank">LinkedIn</a></p>
                                </div>

                                <div className={`${style.socialsIndividual}`}>
                                    <FaInstagram size={20} icon="fa-brands fa-instagram" className={`${style.instagramIcon}`}/>
                                    <p>Check out my phtos on <a className={`${style.hyperlink}`} href="https://www.instagram.com/graham.sabin/" target="_blank">Instagram</a></p>
                                </div>

                                <div className={`${style.socialsIndividual}`}>
                                    <FaFacebook size={20} icon="fa-brands fa-facebook" className={`${style.facebookIcon}`}/>
                                    <p>Say hey on <a className={`${style.hyperlink}`} href="https://www.facebook.com/graham.sabin.5" target="_blank">Facebook</a></p>
                                </div>

                                <div className={`${style.socialsIndividual}`}>
                                    <FaEnvelope size={20} icon="fa-solid fa-envelope" className={`${style.twittIcon}`}/>
                                    <p>Email me at <a className={`${style.hyperlink}`} href="mailto:grahamcsabin@gmail.com" target="_blank">grahamcsabin@gmail.com</a></p>
                                </div>
                                
                            </div>

                            <div className={`${style.divideBar}`}></div>
                            <h2 className={`${style.subtitle}`}>Longer Biography</h2>
                            <p className={`${style.pText}`}>Ehh, were you really gonna read this? DM me, lets just talk instead.</p>

                        </div>
                        
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className={`column is-4-desktop is-6-tablet is-12-mobile`}>
                    <div className={`columns is-multiline`}>
                        <div className={`column is-full`}>
                            <div className={`${style.divideBar}`}></div>
                            <h2 className={`${style.subtitle}`}>Startups</h2>
                            <p className={`${style.pText}`}>I like to mess around with startups. I co-founded an eCommerce analytics company named <a className={`${style.hyperlink}`} href='https://letspondr.com/Home' target="_blank">Pondr</a> and I've been involved with several other startups. I love working in small, quick teams, and bringing products to customers.</p>

                            <div className={`${style.divideBar}`}></div>
                            <h2 className={`${style.subtitle}`}>Software Development</h2>
                            <p className={`${style.pText}`}>Software lets me bring ideas to life. You can often find me working on some side project from a banking app to a Twilio reminder app. I can get ideas into a working MVP quickly and make things work. I don't know it all, but I figure things out.</p>

                            <div className={`${style.divideBar}`}></div>
                            <h2 className={`${style.subtitle}`}>Writing</h2>
                            <p className={`${style.pText}`}>Writing is how I get my thoughts out. I've never been much of a writer, but I enjoy putting opinions and ideas out there. I don't care much about speling/gramaticol errors as long as you get the gist of my ideas. I even keep some of my writing as a <a className={`${style.hyperlink}`} href='/writing' target="_blank">blog</a> on this site.</p>
                        </div>
                    </div>
                </div>

                {/* COLUMN 3 */}
                <div className={`column is-4-desktop is-6-tablet is-12-mobile`}>
                    <div className={`columns is-multiline`}>
                        <div className={`column is-full`}>
                            <div className={`${style.divideBar}`}></div>
                            <h2 className={`${style.subtitle}`}>Influential Content</h2>
                            <p className={`${style.pText}`}><a className={`${style.hyperlink}`} href="https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034/ref=asc_df_0671027034/?tag=hyprod-20&linkCode=df0&hvadid=312721175982&hvpos=&hvnetw=g&hvrand=13612424133049136697&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033289&hvtargid=pla-432445153110&psc=1" target="_blank">How to Win Friends & Influence People:</a> This book taught me the value of simple things, like remembering a name.</p>
                            <p className={`${style.pText}`}><a className={`${style.hyperlink}`} href="https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)" target="_blank">Silicon Valley:</a> An alltime great TV show which helped spark my interest in startups (lots of laughs too).</p>
                            <p className={`${style.pText}`}><a className={`${style.hyperlink}`} href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/ref=asc_df_0307887898/?tag=hyprod-20&linkCode=df0&hvadid=312118059795&hvpos=&hvnetw=g&hvrand=5232150302259811372&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033289&hvtargid=pla-423024757144&psc=1" target="_blank">The Lean Startup:</a> This book taught me the value of building quick, testing often, and listening to customers. Game changer.</p>
                            <p className={`${style.pText}`}><a className={`${style.hyperlink}`} href="https://en.wikipedia.org/wiki/The_Office_(American_TV_series)" target="_blank">The Office:</a> Undoubtedly the best show ever made. Where would I be without my sarcastic sense of humor inspired by Micheal.</p>
                            <p className={`${style.pText}`}><a className={`${style.hyperlink}`} href="https://www.poetryfoundation.org/poems/46473/if---" target="_blank">If- Rudyard Kipling:</a> I saw this poem for the first time in Romania. It stands out to me and evokes an emotion I can't explain.</p>
                            <p className={`${style.pText}`}><a className={`${style.hyperlink}`} href="https://www.amazon.com/Greenlights/dp/B08HLW2JXD/ref=sr_1_1?gclid=CjwKCAiAwomeBhBWEiwAM43YIPSaNSWK-6UuqFZpP2-DyxxSrGRaNM0Lsh6sofedLXXi8dNS7NRC0BoCbUMQAvD_BwE&hvadid=583848306695&hvdev=c&hvlocphy=9033289&hvnetw=g&hvqmt=b&hvrand=6022933451102772449&hvtargid=kwd-988285971504&hydadcr=22594_10356233&keywords=greenlight+by+matthew+mcconaughey&qid=1673716562&s=books&sr=1-1" target="_blank">Greenlights:</a> I subscribe to the idea that saying yes to more can change your life. This is something similar.</p>
                            <p className={`${style.pText}`}><a className={`${style.hyperlink}`} href="https://www.imdb.com/title/tt1285016/" target="_blank">The Social Network</a> Nothing motivates me more. Sure, it's not a happy ending, but it makes anything seem possible. And that soundtrack...</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}