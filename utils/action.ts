import prisma
 from "./db";
 import { auth } from "@clerk/nextjs";
 import { JobType,CreatAndEditJobType,creatAndEditJobSchema } from "./types";
 import { redirect } from "next/navigation";
 import { Prisma

  } from "@prisma/client";
  import dayjs from 'dayjs'

  function authen