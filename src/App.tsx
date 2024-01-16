import { useEffect, useState } from 'react'
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import WithSort from './components/HOC/WIthSort';


import './App.css'
import axios from 'axios';

const conn = axios.create({
    baseURL: import.meta.env.VITE_URL
})



export function App() {
    const [list, setList] = useState([]);
    

    useEffect(() => {
        const getData =async() => { 
            const res = await conn.get("")
    
            setList(res.data.list) 
            
        }
    
        void getData()

        
    }, [])


    const Month = WithSort(MonthTable, list, "month")
    const Year = WithSort(YearTable, list, "year")
    const Sort =  WithSort(SortTable, list, "sort")
    
    

    
    
    return (
        <div id="app">
            <Month/>
            <Year/>
            <Sort/>
            {/* <MonthTable list={list} />
            <YearTable list={list} />
            <SortTable list={list} /> */}
        </div>
    );
}


export default App
