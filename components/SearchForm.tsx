'use client';
import React from 'react'
import {Input} from './ui/input'
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from './ui/button'
// import mockRouter from 'next-router-mock';

// jest.mock('next/router', () => jest.requireActual('next-router-mock'))

import { JobStatus } from '@/utils/types'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function SearchForm() {
  const searchParams = useSearchParams();
   const search = searchParams.get('search') || '';
    const jobStatus = searchParams.get('jobStatus') || 'all';
    const router=useRouter();
    const pathname=usePathname();

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData= new FormData(e.currentTarget)
    const search= formData.get('search') as string;
    const jobStatus= formData.get('jobStatus') as string;
// console.log(search,jobStatus);
let params=new URLSearchParams();
params.set('search',search);
params.set('jobStatus',jobStatus);
router.push(`${pathname}?${params.toString()}`)
}
  return (
   <form className='bg-muted mb-16 p-8 grid sm:grid-cols-2 gap-4 rounded-lg' onSubmit={handleSubmit}>


    <Input name='search' placeholder='Search Jobs'  defaultValue={search} className='' />
    <Select name='jobStatus' defaultValue={jobStatus}>
      <SelectTrigger >
        <SelectValue />
      </SelectTrigger>
        <SelectContent>
        {['all',...Object.values(JobStatus)].map((jobStatus)=>{
            return <SelectItem key={jobStatus} value={jobStatus}>{jobStatus}</SelectItem>
        })

}

</SelectContent>

    </Select>
    <Button type='submit'>Search</Button>
    </form>
  )
}

export default SearchForm