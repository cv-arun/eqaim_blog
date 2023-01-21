import React,{useState, useRef, useMemo } from 'react';

import {useRouter} from 'next/router';
import Homeicons from '@/components/homeIcon';
import TickICon from '@/components/tickIcon';
import { Editor } from '@/components/editor';

function Create() {
    const router=useRouter()
    const submit = () => {

    }
    
   
    return (
        <>

            <div className='mt-[194px] w-[80%] mx-auto'>
                <Editor placeholder='type....'/>
         
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