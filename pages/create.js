import React, { useState } from 'react';

import { useRouter } from 'next/router';
import Homeicons from '@/components/homeIcon';
import TickICon from '@/components/tickIcon';
import { Editor } from '@/components/editor';
import axios from './api/axios'
function Create() {
   
    const [blog, setBlog] = useState({ title: '', content: '' })
    const router = useRouter()
    const setPost = async (blog) => {

        console.log(blog, "hai")
        let response = await axios.post('/create-blog', { blog })
        console.log(response, "response")
    }

    const submit = () => {
        setPost(blog)
        console.log(blog, "hai")
    }
    return (
        <>
            <div className='mt-[194px] w-[80%] mx-auto'>
                <div className='w-[375px] h-[60px] mx-auto bg-white  m-1 mb-5 text-[40px] font-semibold text-center'>
                    <input value={blog?.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                        className='w-full h-full mt-1 focus:outline-none text-[#E9E9E9]' placeholder='            Title...' />
                </div>
                <Editor placeholder='type....' setBlog={setBlog} blog={blog} />

            </div>
            <div title='Go to home page' onClick={() => router.push('/')}
                className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed top-[167px] left-[38px] shadow flex flex-col justify-center'>
                <Homeicons />
            </div>
            <div title='submit' onClick={submit}
                className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed md:top-[265px] md:left-[38px] top-[167px] left-[148px] shadow flex flex-col justify-center'>
                <TickICon />
            </div>
        </>
    )
}


export default Create