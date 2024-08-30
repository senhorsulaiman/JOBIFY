import { JobType } from '@/utils/types'
import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function JobCard({ job }: { job: JobType }) {
  return (
    <><Card >
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-8'>
        <p className='flex gap-3 items-center'><FaBriefcase />{job.mode}</p>
        <p className='flex gap-3 items-center'><FaLocationDot /> s{job.location}</p>
        <p className='flex gap-3 items-center'><MdOutlineDateRange /> {job.status}</p>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card></>)
}

export default JobCard