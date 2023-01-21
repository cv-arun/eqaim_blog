import React from 'react';
import Homeicons from '@/components/homeIcon';
import {useRouter} from 'next/router';
import axios from '../api/axios'

function Post({blog}) {
    const router=useRouter()
  return (
   <>
    <div className='md:w-[979px] h-[520px] bg-[#E9E9E9] mx-auto xl:mt-[214px] mt-[284px]  mb-[20px] p-4'>
        <div className='w-[375px] h-[60px] mx-auto bg-[#E9E9E9]'><h1 className='text-[40px] font-semibold text-center'>{blog?.title}</h1></div>
        <p className='break-all overflow-y-auto h-[420px]'>{blog?.content}</p>
      </div>
      <div title='Go to home page' onClick={() => router.push('/')} className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed 
             top-[167px] left-[38px] shadow flex flex-col justify-center'>
        <Homeicons />
      </div></>
  )
}

export const getServerSideProps = async ({params}) => {
    const {id}=params 
    let data = await axios.get(`/get-blog/${id}`)
    console.log(data.data)
    return {
      props: { blog:data.data }
    }

  }
  

export default Post