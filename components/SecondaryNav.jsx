import { useRouter } from 'next/router'
import { list } from 'postcss'
import React, { useState } from 'react'

const tabs = ["View All", "Design", "Products", "Development", "Leadership", "Management", "Proposals", "Interviews"]
const SecondaryNav = () => {
    const router = useRouter()
    const [active, setActive] = useState('View All')
  return (
    <>
      <div className='flex justify-start items-center mx-auto gap-6 font-medium text-slate-500 border-b w-full px-4 md:w-10/12 h-16 mt-4 overflow-auto bg-white sticky top-0 z-10'>
        <ul className='flex gap-6 h-full items-center'>
            {tabs?.map((tab, i) =>(
                <li key={i} className={`${active === tab?' text-slate-900 duration-200':''} whitespace-nowrap cursor-auto md:cursor-pointer`} onClick={()=> [setActive(tab), router.push({pathname: '/', query:{filter:tab}})]}>{tab}</li>
            ))}
        </ul>
      </div>  
    </>
  )
}

export default SecondaryNav;