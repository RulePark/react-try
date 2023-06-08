// import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React from "react";

export interface IDay {
    id: number;
    day: number;
}

export default function DayList() {

    const days : IDay[] = useFetch("http://localhost:3001/days");

    if(days.length === 0){
        return <span>Loading...</span>
    }

    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []);

    return (
    <>
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    </>
    );
}