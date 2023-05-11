import React, { useState, useEffect } from "react";
import { RestartTimer } from "../../assets/icons/icons";

export const Timer: React.FC = () => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const isComplete = time <= 0;

    return (
        <div className='timer'>
            {isComplete ? (
                <button className="tamer__btn">
                    <RestartTimer />
                </button>
            ) : (
                <span>{`${minutes.toString().padStart(1, "0")}:${seconds
                    .toString()
                    .padStart(2, "0")}`}</span>
            )}
        </div>
    );
};
