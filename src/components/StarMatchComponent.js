import React from 'react';
import './Star.css'

const StarMatchComponent =()=>{
    return(
        <div className="game">
            <div>
                Pick 1 or more numbers that sum to the number of starts
            </div>
            <div className="body">
                <div className="left">
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                </div>
                <div className ="right">
                    <button className="number">1</button>
                    <button className="number">2</button>
                    <button className="number">3</button>
                    <button className="number">4</button>
                    <button className="number">5</button>
                    <button className="number">6</button>
                    <button className="number">7</button>
                    <button className="number">8</button>
                    <button className="number">9</button>
                </div>
            </div>
        </div>
    )
}
export default StarMatchComponent