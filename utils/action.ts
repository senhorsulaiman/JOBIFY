'use server'
import prisma
 from "./db";
 import { auth } from "@clerk/nextjs";
 import { JobType,CreatAndEditJobType,creatAndEditJobSchema } from "./types";
 import { redirect } from "next/navigation";
 import { Prisma

  } from "@prisma/client";
  import dayjs from 'dayjs'

  function authencateAndRedirect():string {

    const {userId}=auth();
    if(!userId){
        redirect('/')
    }
    return userId
  }

  export async function createJobAction(values:CreatAndEditJobType):Promise<JobType | null> {
    const userId=authencateAndRedirect();

    try{
        creatAndEditJobSchema.parse(values);
        const job:JobType=await  prisma.job.create({
            data:{
                ...values,
                clerkId:userId,
            }
        })
        return job;
    }
    catch(error){
        console.error(error)
        return null;
    }

  }