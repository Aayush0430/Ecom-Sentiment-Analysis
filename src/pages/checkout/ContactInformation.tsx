"use client"
import { TextField } from '@mui/material'
import React from 'react'

const ContactInformation = () => {
  return (
    <div className='w-1/2'>
        <p className='text-xl font-bold my-4'>Contact Information</p>
        <div className='name flex justify-between w-full mb-7'>

            <TextField 
            sx={{marginRight:"1rem"}}
            className="w-1/2" id="outlined-basic" label="First Name" variant="outlined" size='small'/>
            <TextField 
            sx={{marginLeft:"1rem"}}
            className="w-1/2" id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
        </div>
        <div className="email mb-7 w-full">

        <TextField className='w-full'  id="outlined-basic" label="Email Address" variant="outlined" size='small'/>
        </div>
        <div className="phone mb-7 w-full">

        <TextField  className='w-full' id="outlined-basic" label="Phone" variant="outlined" size='small'/>
        </div>
        <div className="address mb-7 w-full">

        <TextField className='w-full'  id="outlined-basic" label="Address" variant="outlined" size='small'/>
        </div>
        <div className="city-country flex justify-between w-full mb-7">
            <TextField 
              sx={{marginRight:"1rem"}}
            className="w-1/2 " id="outlined-basic" label="City" variant="outlined" size='small'/>
            <TextField 
              sx={{marginLeft:"1rem"}}
            className="w-1/2 " id="outlined-basic" label="Country" defaultValue={"Nepal"} disabled variant="outlined" size='small'/>
          

        </div>
    </div>
  )
}

export default ContactInformation