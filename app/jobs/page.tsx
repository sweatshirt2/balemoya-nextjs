import { Suspense } from "react";

import Jobs from "./Jobs";
import Loading from "../loading";

export default async function JobsPage() {

  return (
    <main className='py-5'>
      <h2 className='font-bold text-xl'>Jobs Page</h2>
      <Suspense fallback={<Loading />}>
        <Jobs />
      </Suspense>
    </main>
  )
}
