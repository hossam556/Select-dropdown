import React ,{useState}from 'react'
import './Trial.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Select from './card'

const Trial = () => {
    const [showdrop , setshowdrop]=useState(false);
    const [daily , setdaily]=useState(true);
    const [weekly , setweekly]=useState(false);
    const [monthly , setmonthly]=useState(false);



    const dailyHandle=()=>{
         setdaily(true);
         setweekly(false)
         setweekly(false)


    }
    const weeklyHandle=()=>{
        setweekly(true)
        setdaily(false)
        setmonthly(false)
   }
   const monthlyHandle=()=>{
        setmonthly(true)
        setdaily(false)
        setweekly(false)
}

  

    return (
        <div className='box'>
            <div className='box2'>
        {
            daily && <p onClick={()=>setshowdrop(!showdrop)}>Daily 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> }</p>
        } 
        {
            weekly && <p onClick={()=>setshowdrop(!showdrop)}>weekly 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> } </p>

        } 
         {
            monthly && <p onClick={()=>setshowdrop(!showdrop)}>Monthly 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> } </p>

        } 
           {showdrop && <Select
                  dailyHandle={dailyHandle}
                  weeklyHandle={weeklyHandle}
                  monthlyHandle={monthlyHandle}
                  />}
           </div>
        </div>
    )
}

export default Trial
