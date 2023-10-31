import { useState, useEffect } from "react";
import "./Offer.css";
const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({
        days: 7,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const { days, hours, minutes, seconds } = countdown;
            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                // Countdown has completed, reset to 7 days
                setCountdown({
                    days: 7,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            } else {
                // Update the countdown
                setCountdown((prevCountdown) => {
                    let newSeconds = prevCountdown.seconds - 1;
                    let newMinutes = prevCountdown.minutes;
                    let newHours = prevCountdown.hours;
                    let newDays = prevCountdown.days;

                    if (newSeconds < 0) {
                        newSeconds = 59;
                        newMinutes -= 1;
                    }
                    if (newMinutes < 0) {
                        newMinutes = 59;
                        newHours -= 1;
                    }
                    if (newHours < 0) {
                        newHours = 23;
                        newDays -= 1;
                    }

                    return {
                        days: newDays,
                        hours: newHours,
                        minutes: newMinutes,
                        seconds: newSeconds,
                    };
                });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [countdown]);

    const { days, hours, minutes, seconds } = countdown;

    return (
        <div className="CountDown">
            <div className="eachCount">
                <p>{days}</p>
                <hr />
                <p>Days</p>
            </div>
            <div className="eachCount">
                <p>{hours}</p>
                <hr />
                <p> Hours</p>
            </div>
            <div className="eachCount">
                <p>{minutes}</p>
                <hr />
                <p> Min</p>
            </div>
            <div className="eachCount sec">
                <p>{seconds}</p>
                <hr />
                <p>Sec</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
