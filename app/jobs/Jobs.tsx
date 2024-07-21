import { JobInterface } from "@/config/types";
import Link from "next/link";

async function getJobs() {
    return (await fetch('http://localhost:3001/jobs', {
      next: {
        revalidate: 30,
      },
    })).json();
}

export default async function Jobs() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const jobs = await getJobs();

  return (
    <div className='jobs flex flex-col w-11/12 gap-10 py-5'>
      {
      jobs.map((job: JobInterface, i: number) => (
        <Link href={`/jobs/${i+1}`} key={'job-' + job.id} className="job flex flex-col p-5 gap-5 bg-cyan-50 shadow-lg justify-between">
          <h3 className="job-name text-lg font-semibold text-cyan-900">{ job.name }</h3>
          <p className="job-description text-md">{ job.description }</p>
          <button className="job-visit self-center bg-cyan-800 text-white font-semibold px-5 py-2 rounded-md">
            Visit
          </button>
        </Link>
      ))
      }
    </div>
  )
}
  