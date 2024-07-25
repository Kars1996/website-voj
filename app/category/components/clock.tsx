import { set } from 'date-fns'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Clock = () => {

    const[time, setTime] = useState('')
    const[minutes, setMinutes] = useState('')
    const[hours, setHours] = useState('')
    const[seconds, setSeconds] = useState('')
    const[day, setDay] = useState('')
    const[month, setMonth] = useState('')
    const[date, setDate] = useState('')
    const[year, setYear] = useState('')

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    useEffect(() => {

    const fetchTime = async () => {
        const res = await fetch('http://worldtimeapi.org/api/ip/Europe/Prague')
        const data = await res.json()
        console.log(data)
        const timeStamp = data.datetime

        const parts = timeStamp.split('T');
        const datePart = parts[0]; // "2024-07-25"
        const timePartWithExtra = parts[1]; // "05:03:35.342453+00:00"
        const timePart = timePartWithExtra.split('.')[0]; // "05:03:35"

        const SecondsSplitted = timePart.split(':')[2]
        const MinutesSplitted = timePart.split(':')[1]
        const HoursSplitted = timePart.split(':')[0]


        setMinutes(MinutesSplitted)
        setHours(HoursSplitted)
        setSeconds(SecondsSplitted)

        const dayOfWeek = data.day_of_week
        setDay(days[dayOfWeek - 1])


        const d = new Date();
        setDate(datePart.split('-')[2])
        setMonth(months[d.getMonth()])

        setYear(d.getFullYear().toString())

    }

    fetchTime()

    setInterval(fetchTime, 1000)

    }, [])

  return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-center items-center w-full px-4'>
            <h1 className='text-2xl w-1/2'>Date (mm:dd:yy)</h1>
            <h1 className='text-2xl flex gap-2 w-1/2 justify-end text-[#ffff55]'>
                <p>{day}</p> : <p>{month}</p> <p>{date}</p> : <p>{year}</p>
            </h1>
        </div>

        <div className='flex justify-center items-center w-full px-4'>
            <h1 className='text-2xl w-1/2'>Time (hh:mm:ss)</h1>
            <h1 className='text-2xl flex gap-2 w-1/2 justify-end text-[#ffff55]'>
                <p>{hours}</p> : <p>{minutes}</p> : <p>{seconds}</p>
            </h1>
        </div>

        <div className='flex justify-center items-center w-full px-4'>
            <h1 className='text-2xl w-1/2'>Country/City</h1>
            <h1 className='text-2xl flex gap-2 w-1/2 justify-end text-[#ffff55]'>
                <p>Czech/Prague</p>
            </h1>
        </div>

    </div>
  )
}

export default Clock