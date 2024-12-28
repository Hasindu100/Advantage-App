
/**
 * NavSubMenu Component
 * 
 * This component creates the services sub menu list.
 */

import React from 'react'
import { subNavMenu } from './data'

const NavSubMenu = () => {
  return (
    <>
        <div className="absolute mt-3 w-[800px] md:w-[750px] h-fit right-[-370px] md:right-[-340px] p-3 bg-white rounded-md shadow-lg  transition-opacity duration-300 z-[100]">
            <div className="absolute top-[-4] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
            <div className='grid grid-cols-2 w-full'>
                {
                    subNavMenu.map((menu) => {
                        return (
                            <div key={menu.id}>
                                <div className="subMenuCard flex font-sans group/card h-full px-2 py-2 rounded-lg hover:bg-orange-600 cursor-pointer">
                                    <div className="flex-none mx-auto my-auto justify-center items-center w-12">
                                        <img src={menu.image} alt="" width={80} height={80} className="relative inset-0 w-8 h-8 object-cover text-orange-600 " loading="lazy" />
                                    </div>
                                    <div className="flex-auto pl-2">
                                        <div className="flex flex-wrap">
                                            <h1 className="flex-auto text-base font-bold text-slate-900 group-hover/card:text-white">
                                                {menu.title}
                                            </h1>
                                            <div className="w-full flex-none text-sm font-medium leading-[1rem] text-gray-500 mt-2 group-hover/card:text-white">
                                                {menu.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default NavSubMenu