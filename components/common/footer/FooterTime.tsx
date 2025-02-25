"use client"
import React, { useState, useEffect } from "react";

const FooterTime = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Africa/Nairobi',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };

            const kenyaTime = new Date().toLocaleTimeString('en-US', options);
            setTime(kenyaTime);
        };

        // Update time immediately
        updateTime();
        
        // Update time every second
        const interval = setInterval(updateTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border-t-2 pt-8 pb-4 font-bold text-5xl uppercase text-gray-700">
            {time}
        </div>
    );
};

export default FooterTime;
