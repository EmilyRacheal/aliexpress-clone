import React from 'react' 
import {RiArrowDropDownFill} from "react-icons/ri"
import {BsPhone} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"

function Topbar() {
  return (
    <div className='w-full flex justify-center items-center border border-emerald-500'>
        <div className='w-11/12 flex justify-end  border border-emerald-500'>
           
            <div className=''>
                <ul className='flex gap-x-10 font-light'>
                    <div className='flex items-center text-[13px]  border-r-[1px] border border-l-0 border-y-0'>
                        <li>Sell on AliExpress</li>
                        <RiArrowDropDownFill size={20} color={"gray"}/>
                    </div>
                    <div className='flex items-center text-[13px] '>
                        <li>Help</li>
                        <RiArrowDropDownFill size={20} color={"gray"}/>
                    </div>
                    <div className='flex items-center text-[13px] '>
                        <li>Buyer Protection</li>
                    </div>
                    <div className='flex gap-x-1 items-center text-[13px] border-r-[1px] border border-l-0 border-y-0'>
                        <BsPhone size={15} color={"gray"}/>
                        <li>App</li>
                    </div>
                    <div className='flex gap-x-1 items-center text-[13px] '>
                        <AiOutlineHeart size={15} color={"gray"}/>
                        <li>Whishlist</li>
                    </div>
                    <div className='flex gap-x-1 items-center text-[13px] '>
                        <BsPerson size={15} color={"gray"}/>
                        <li>Account</li>
                    </div>
                    <div>
                    <RiArrowDropDownFill size={20} color={"gray"}/>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Topbar