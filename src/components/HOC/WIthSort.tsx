
import React from 'react'
import dayjs from "dayjs";
import { v4 } from "uuid"



export default function WithSort(Component : React.ComponentType<any>, list: {date:string, amount: string}[], type: string ){

    let newList : any[] = list.map((el) => ({"date": dayjs(el.date), "amount": el.amount}))

                if (type === "month" && newList.length){
                    const months : Record<string, number> = {}
                    
                    newList = newList.filter( el => el.date.format("YY") === "18")
                    newList.sort( (a , b) => a.date.format("MM") - b.date.format("MM"))
                    newList = newList.map( el => ({"date": el.date.format("MMM"), "amount": el.amount}))
                    
                    newList.forEach( (el) => {
                        months[el.date] = (months[el.date] | 0)+ Number(el.amount) })
                    
                    // console.log(newList);
                    newList =  Object.keys(months).map(month => ({month: month, amount: months[month]}))
                
                    
                    
                    return () => (<Component list={newList} key={v4()} />)
                }   

                if (type === "year" && newList.length){
                    const years : Record<string, number> = {}
                    newList.sort( (a , b) => a.date.format("YY") - b.date.format("YY"))
                    newList = newList.map( el => ({"date": el.date.format("YYYY"), "amount": el.amount}))

                    newList.forEach( el => {
                        years[el.date] = (years[el.date] | 0) + Number(el.amount) })

                    newList =  Object.keys(years).map(year => ({year: year, amount: years[year]}))
                    

                    return () => (<Component list={newList} key={v4() }/>)
                }

                if (type === "sort" && newList.length){

                    newList.sort( (a , b) => b.amount - a.amount)
                    newList = newList.map( el => ({"date": el.date.format("YYYY-MM-DD"), "amount": el.amount}))

                    return () => (<Component list={newList} key={v4()}/>)
                }

                return () => (<Component list={list} key={v4()}/>)

 
        }


