'use client';
import { getAllJobsAction } from '@/utils/action';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import JobCard from './JobCard';
import ComplexButtonContainer from './CoomplexButtonContainer';

function JobList() {

    const searchParams=useSearchParams();
    const search=searchParams.get('search')||'';
    const jobStatus=searchParams.get('jobStatus')||'';
    const pageNumber=Number(searchParams.get('page'))||1;
    const {data,isPending}=useQuery({

        queryKey:['jobs',search,jobStatus,pageNumber],
        queryFn:()=>getAllJobsAction({search,jobStatus,page:pageNumber}),
    })
    const jobs=data?.jobs || [];
    const count = data?.count || 0;
    const page = data?.page || 0;
    const totalPages =data?.totalPages || 0;

    if(isPending) return <h2 className='text-xl'>Please wait....</h2>
    if(jobs.length<1)return <h2 className='text-xl'>No Jobs found</h2>

  return (
    <>
       <div className='flex items-center justify-between mb-8'>

          <h2 className='text-xl font-semibold capitaliz'>{count} job found</h2>
          {totalPages <2 ? null : <ComplexButtonContainer currentPage={page} totalPages={totalPages}/>}
       </div>
    <div className='grid md:grid-cols-2 gap-8'>
        {jobs.map((job)=>{
             return <JobCard key={job.id} job={job}/>

        })}

    </div>
    </>
   
  )
}

export default JobList