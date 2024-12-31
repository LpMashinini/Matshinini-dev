import { useState, useEffect, useRef} from "react";


export default function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() =>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function restart(){
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTIme(){

        let hours = Math.floor( elapsedTime / (1000 * 60 * 60)) ;
        let minutes = Math.floor( elapsedTime / (1000 * 60 ) % 60) ;
        let seconds = Math.floor( elapsedTime / (1000) % 60);
        let milliSeconds =  Math.floor( (elapsedTime % 1000) / 60);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliSeconds = String(milliSeconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliSeconds}`;

    }

    return (
        <>
        <div className="stopwatch">
            <div className="displayTime">
                {formatTIme()}
            </div>
            <div className="controls">
                <button className="startBtn" onClick={start}>start</button>
                <button className="stopBtn" onClick={stop}>stop</button>
                <button className="resetBtn" onClick={restart}>reset</button>
            </div>
        </div>
        </>
    )
}