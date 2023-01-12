import { useState } from 'react';
import style from '../scss/jokes.module.scss';
import jokes from '../data/jokes.json';

export default function Jokes() {
    
    

    const [firstClick, setFirstClick] = useState(true);
    const [showJoke, setShowJoke] = useState(false);
    const [showPunch, setShowPunch] = useState(false);
    const [randomNum, setRandomNum] = useState(0);
    
    const  ToggleJokes = () => {
        setFirstClick(false);
        setShowPunch(false);
        setRandomNum(Math.floor(Math.random() * (Object.keys(jokes.jokes).length)));
        setShowJoke(true);
          
    }

    const  ShowPunch = () => {
        setShowPunch(!showPunch);
    }

    return (
        <>
            <div className={`${style.introTextSpacing} `}>
                <h1 className={`${style.introText}`}>
                    People don't laugh enough. Take yourself less seriously, get ready to chuckle, and click the button for a random joke. 
                </h1>
            </div>

            <div className={`columns is-multiline ${style.center}`}>
                
                
                <div className={``}>
                    <button className={`button ${style.jokeButton}`} onClick={ToggleJokes}>{firstClick ? "the button" : "again"}</button>
                </div>
                
                
                {showJoke ? 
                   <>
                        <div className={``}>
                            <p>{jokes.jokes[randomNum].joke}</p>
                        </div>
                        {/* <div className={``}>    
                            <button className={`button ${style.punchButton}`} onClick={ShowPunch}>{showPunch ? "Hide Punchline" : "Show Punchline"}</button>
                        </div>  */}

                        <div className={`box ${style.punchlineDoor}`}>
                            <p1 className={`${style.p1}`}>hover...</p1>
                            <p className={`${style.punchText}`}>{jokes.jokes[randomNum].punchline}</p>
                            {/* {showPunch ?
                            <p>{jokes.jokes[randomNum].punchline}</p>
                            : <></>
                            }  */}
                        </div>
                    </>
                    : <></>
                }

                
            </div>
            

        </>
    )
}