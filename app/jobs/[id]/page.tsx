import { JobInterface, ParamInterface } from "@/config/types"
import { notFound } from "next/navigation";

// export const dynamicParams = false // default value: true
// true means check if an id exists after not findng it among statically rendered ids and if found fetch it and create a cache for it too

export async function generateStaticParams() {
  const jobs = await (await fetch('http://localhost:3001/jobs')).json();

  return jobs.map((job: JobInterface, i: number) => ({
    id: (i+1).toString(),
  }))
}

async function getJob(id: string) {
  const url = 'http://localhost:3001/jobs/' + id;
  const rs = await fetch(url, {
    next: {
      revalidate: 30,
    },
  })

  if (!rs.ok) {
    notFound(); // Send 404 if it's not found even with dynamicParams on
  }
  return rs.json();
}

export default async function JobPage({ params } : ParamInterface) {
  console.log(params);
  
  const job = await getJob(params.id.toString());
  
  return (
    <main className="w-full flex flex-col justify-center items-center flex-grow px-16">
      <div className="job flex flex-col gap-5 justify-between relative bottom-32">
        <h3 className="text-2xl font-bold">{ job.name }</h3>
        <label className="text-xl font-semibold">Description</label>
        <p>{ job.description }</p>
        <label className="text-xl font-semibold">Requirements</label>
        <p>{ job.requirements }</p>
      </div>
    </main>
  )
}   
