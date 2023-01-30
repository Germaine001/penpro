import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { BsEye } from 'react-icons/bs';

const Write = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [content, setContent] =useState({
        title:'',
        subtitle:'',
        category:'',
        bodytext:''
    });

    useEffect(() => { 

        if(!session) router.push({pathname:'/login'})
        
        return () => { 
        }
      }, [router, session])
      
      if(!session) return <p>Please sign in .... <span className="text-blue-700" onClick={()=>signIn()}>Signin</span></p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(content);
    }

  return (
    <div className='flex flex-col justify-center items-center mx-auto w-full p-2 h-full md:w-6/12 md:p-4 mt-4'>
       <span className='text-lg font-bold mb-4'>Write &amp; Publish</span> 

       <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full px-10">
        <span className='flex flex-col'>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder='Main title here..' className='form-input rounded placeholder:text-gray-400' onChange={(e)=>setContent((prev)=>{return{...prev, title: e.target.value}})}/>
        </span>

        <span className='flex flex-col'>
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" placeholder='Subtitle goes here..' className='form-input rounded placeholder:text-gray-400' onChange={(e)=>setContent((prev)=>{return{...prev, subtitle: e.target.value}})}/>
        </span>

        <span className='flex flex-col'>
            <label htmlFor="category">Choose a Category</label>
            <select type="" className='form-input rounded placeholder:text-gray-400' onChange={(e)=>setContent((prev)=>{return{...prev, category: e.target.value}})}>
                <option value="Proposals">Proposals</option>
                <option value="Leadership">Leadership</option>
                <option value="Management">Management</option>
                <option value="Development">Development</option>
                <option value="Products">Products</option>
            </select>
        </span>

        <span className='flex flex-col'>
            <label htmlFor="body">Content</label>
            <textarea type="text" placeholder='Express yourself here..' className='form-input rounded placeholder:text-gray-400' onChange={(e)=>setContent((prev)=>{return{...prev, bodytext: e.target.value}})}></textarea>
        </span>

        <button className='bg-slate-900 text-white px-6 py-2 rounded shadow w-fit flex items-center justify-evenly gap-2'><BsEye size={20}/> Preview</button>
       </form>
    </div>
  )
}

export default Write