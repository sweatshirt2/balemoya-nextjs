'use client';

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function FormPage() {
  const router = useRouter();

  const name_ref = useRef<HTMLInputElement>(null);
  const desc_ref = useRef<HTMLInputElement>(null);
  const req_ref = useRef<HTMLInputElement>(null);

  const [ creating_job, setCreatingJob ] = useState(false);

  async function storeJob(name: string, description: string, requirements: string) {
    const job = {
      name, description, requirements, id: Math.floor(Math.random() * (1001 - 100)) + 100,
    }

    const rs = await fetch('http://localhost:3001/jobs', {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(job),
    })

    if(rs.status === 201) {
      // router.refresh(); // if refresh is needed to see the posted job as soon as the creator is redirected to jobs page
      // not used because end users that watch jobs have another role and permissions using another side of the app
      router.push('/jobs');
    }
  }

  return (
    <div className="mt-10 bg-white px-5 py-8">
      <h3 className="mb-6 self-center text-cyan-700 text-xl">Create Here</h3>

      <form className="flex flex-col gap-5">
        <input className="w-96 outline-none bg-transparent focus:bg-transparent border-b-2 border-cyan-900" 
        type="text" ref={name_ref} name="name" placeholder="Job Title" />
        <input className="w-96 outline-none bg-transparent focus:bg-transparent border-b-2 border-cyan-900" 
        type="text" ref={desc_ref} name="desc" placeholder="Job Description" />
        <input className="w-96 outline-none bg-transparent focus:bg-transparent border-b-2 border-cyan-900" 
        type="text" ref={req_ref} name="req" placeholder="Job Requirement" />
        <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-100 mt-5 py-2 px-3 rounded-lg"
          onClick={(e) => {
            e.preventDefault();
            setCreatingJob(true);
            if (name_ref.current.value && desc_ref.current.value && req_ref.current.value) {
              storeJob(name_ref.current.value, desc_ref.current.value, req_ref.current.value);
            }
          }} disabled={creating_job}>{ creating_job ? 'Creating..' : 'Create' }</button>
      </form>
    </div>
  )
}
