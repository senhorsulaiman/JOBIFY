import { JobType } from '@/utils/types'
import React from 'react'
import JobInfo from './JobInfo';
import { MapPin, Briefcase, CalendarDays, RadioTower } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import Link from 'next/link';
import { Badge } from './ui/badge';
import DeleteJobBtn from './DeleteJobBtn';
function JobCard({ job }: { job: JobType }) {
  const date = new Date(job.createdAt).toLocaleDateString();
  return (
    <><Card >
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator className='my-5'/>
      <CardContent className='grid grid-cols-2 gap-8'>
      <JobInfo icon={<Briefcase />} text={job.mode} />

  <JobInfo icon={<MapPin />} text={job.location} />
  <JobInfo icon={<CalendarDays />} text={date} />


  <Badge className='w-32  justify-center'>
    <JobInfo icon={<RadioTower className='w-4 h-4' />} text={job.status} />
  </Badge>
       
      </CardContent>
      <CardFooter className='flex gap-4'>

        <Button asChild size='sm'>
          <Link href={`/jobs/${job.id}`}>Edit</Link>
        </Button>
        <DeleteJobBtn id={job.id}/>
      </CardFooter>
    </Card></>)
}

export default JobCard