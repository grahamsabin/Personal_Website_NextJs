import { useState } from 'react';
import style from '../scss/jokes.module.scss';

export default function Jokes() {
    
    const [firstClick, setFirstClick] = useState(true);
    const [showJoke, setShowJoke] = useState(false);
    const [showPunch, setShowPunch] = useState(false);
    
    const  ToggleJokes = () => {
        setFirstClick(false);
        setShowJoke(true);
    }

    const  ShowPunch = () => {
        setShowPunch(!showPunch);
    }

    return (
        <>
            <div className={`${style.introTextSpacing} ${style.center}`}>
                <h1 className={`${style.introText}`}>
                    People don't laugh enough. Take yourself less seriously, get ready to chuckle, and click the button for a random joke. 
                </h1>
            </div>

            <div>
                <button onClick={ToggleJokes}>{firstClick ? "the button" : "again"}</button>
                
                {showJoke ? 
                    <div>
                        <p>What happened when the chicken crossed the rode?</p>
                        <button onClick={ShowPunch}>{showPunch ? "Hide Punchline" : "Show Punchline"}</button>
                    </div> 
                    : <></>
                }

                {showPunch ?
                    <p>It never even crossed!</p>
                    : <></>
                }
            </div>
            

        </>
    )
}