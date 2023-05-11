import React, { useState, useEffect } from "react";

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

    return (
        <div className="timer">
            {`${minutes.toString().padStart(1, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}
        </div>
    );
};

