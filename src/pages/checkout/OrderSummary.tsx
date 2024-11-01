"use client"
import React from 'react'
import {Card,SummaryCart } from "@/index"
import { Button, Divider} from '@mui/material'

const OrderSummary = () => {
  return (
    <div className='w-[40%] ml-14'>
        <p className='text-xl font-bold my-4'>
        Order Summary
        </p>
        <div className="products-price">
            <div className="orderproducts">
                <SummaryCart/>
                <SummaryCart/>
            </div>
            <div className="pricing w-[95%] mx-auto">
                <div className="subtotal mb-3 w-full flex justify-between">
                    <p>Subtotal</p>
                    <p className='font-bold'>Rs. 400</p>
                </div>
        
                <div className="Shipping mb-3 w-full flex justify-between">
                    <p>Subtotal</p>
                    <p className='font-bold'>Rs. 400</p>
                </div>
                <Divider sx={{marginBlock:"1rem",}}/>
                <div className="total mb-3 w-full flex justify-between">
                    <p>Total</p>
                    <p className='font-bold'>Rs. 400</p>
                </div>
            </div>
            <Divider sx={{marginBlock:"1rem"}}/>
            <Button variant="contained" className='w-full'>Confirm Order</Button>
            
        </div>
        </div>
  )
}

export default OrderSummary