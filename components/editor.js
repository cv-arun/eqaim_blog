import React, { useState, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(import('jodit-react'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })


export const Editor = ({ placeholder,setBlog,blog }) => {
	const editor = useRef(null);


	const config =
		{
			readonly: false, // all options from https://xdsoft.net/jodit/doc/,
			placeholder: placeholder || 'Start typings...'
		}
      const handleChange=(newContent)=>{
        setBlog({...blog,content:newContent})
       
      }
	

	return (
		<JoditEditor
			ref={editor}
			value={blog.content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setBlog({...blog,content:newContent})} // preferred to use only this option to update the content for performance reasons
			// onChange={handleChange}
		/>
	);
};