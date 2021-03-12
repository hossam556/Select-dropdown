import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './card.css'

const useStyles = makeStyles({
    root: {
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
    //   padding :'20px',
      width:'140px',
      height:'140px',
      position:'absolute',
      top:'30px',
      left:'-50px',
      zIndex:'10',
    },
    
})

const Select = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
               <p onClick={props.dailyHandle} className='cardP'>Daily</p>
               <p onClick={props.weeklyHandle} className='cardP'>Weekly</p>
               <p onClick={props.monthlyHandle} className='cardP'>Monthly</p>

        </Card>
    )
}

export default Select