import React, { useState } from 'react';
import './Star.css'
import PlayNumberComponent from './PlayNumberComponent';
import StarDisplayComponent from './StarDisplayComponent';

const StarMatchComponent =()=>{
    const [stars, setStars] = useState(utils.random(1,8));
    const [availableNumbers, setAvailableNos] = useState([utils.range(1,8)]);
    console.log(availableNumbers)
    const [candidateNumbers, setCandidateNos] = useState([2,3]);

    const candidatesAreWrong = utils.sum(candidateNumbers)>stars;

    const noStatus=(number)=>{
        if(!availableNumbers.includes(number)){
            return "used";
        }
        else if(candidateNumbers.includes(number)){
            return candidatesAreWrong ? 'wrong' :'candidate';
        }
        return "available"

    }
 const onNumberClick =(number,currentStatus)=>{
     console.log('onNumber got call')
     console.log(currentStatus)
            if(currentStatus == 'used')
            {
                return;
            }
            const newCandidateNo = currentStatus= 'available' ?
             candidateNumbers.concat(number):
             candidateNumbers.filter(cn=> cn !== number)

            if(utils.sum(newCandidateNo) !== stars){
                setCandidateNos (newCandidateNo);
            }   
            else{
                const newAvailablenos = availableNumbers.filter(
                    n=>!newCandidateNo.includes(n));
                setStars(utils.randomSumIn(newAvailablenos,8))
                setAvailableNos(newAvailablenos);
                setCandidateNos([]);

            }
    }
    return(
        <div className="game">
            <div>
                Pick 1 or more numbers that sum to the number of starts
            </div>
            <div className="body">
                <div className="left">
                        <StarDisplayComponent  count={stars}/>
                </div>
                <div className="right">
                    {utils.range(1,8).map(number =>
                        // <button key={number} className="number">{number}</button>
                        <PlayNumberComponent  num ={number}
                        status = {noStatus(number)}
                        onClick ={onNumberClick}
                        />
                    )}
                </div>
            </div>
               <div className="timer">Time Remaining : 10 </div>
        </div>
            );
            };
export const colors = {
    available : 'lightgray',
    used :'lightgreen',
    wrong:'lightcoral',
    candidate:'deepskyblue'
};
export const utils = {
    //Sum an array
    sum: arr => arr.reduce((acc,curr) => acc + curr, 0),

    //create an array of numbers between min and max( edges included)
    range: (min, max) => Array.from({length: max - min + 1},
        (_, i)=> min + i),

    // pick a random number between min and max    
    random: (min, max) => min + Math.floor(max * Math.random()),

    //Given an array of numbers and max...
    //Pick a random sum (<max) from the set of all available sums in arr

    randomSumIn : (arr ,max) => {
        const sets =[[]];
        const sums =[];
        for(let i =0; i<arr.length;i++){
            for(let j =0, len = sets.length; j< len ; j++){
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = utils.sum(candidateSet);
            if(candidateSum <= max){
                sets.push(candidateSet);
            }}
        }
    }

};


export default StarMatchComponent;