
import React, {useState, useEffect} from 'react';


function Clock(){

const [time , setTime ] = useState(new Date());

//once component is mounted 
useEffect(() => {
    const intervalId = setInterval(() =>  {
        setTime(new Date());
    }, 1000);

// when unmounting component => cleanup
    return () => {
        clearInterval(intervalId);
    }

} , []);


function formatTime(){

    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    // if hour == 12 return 12 not  0
    hours = hours % 12|| 12;

return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
}


function padZero(number){
    return (number < 10 ? "0"  : "" )+ number;
}

return(

<div className = "clock-container">

    <div className = "clock">
        <span>{formatTime()}</span>
    </div>

</div>

);


}

export default Clock