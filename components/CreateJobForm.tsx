"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import { Form } from '@/components/ui/form';
import { JobStatus,JobMode,creatAndEditJobSchema,CreatAndEditJobType } from "@/utils/types"

import {CustomFormSelect, CustomFormFeild } from "./FormComponents"
import { object } from "zod"
// const formSchema = z.object({
//     username: z.string().min(2, {
//       message: "Username must be at least 2 characters.",
//     }),
//   })

function CreateJobForm() {

    const form = useForm<CreatAndEditJobType>({
        resolver: zodResolver(creatAndEditJobSchema),
        defaultValues: {
         position: "",
         company:'',
         location:'',
         status:JobStatus.pending,
         mode:JobMode.FullTime,
        },
      })

      // 2. Define a submit handler.
      function onSubmit(values: CreatAndEditJobType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-muted p-8 rounded">
                <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 item-start">
                    {/* position */}
                    <CustomFormFeild name="position" control={form.control}/>
                    {/* company */}
                    <CustomFormFeild name="company" control={form.control}/>
                    {/* location */}
                    <CustomFormFeild name="location" control={form.control}/>
                      {/* job  status */}
                      <CustomFormSelect name="status" control={form.control} labelText="job status " items={Object.values(JobStatus)}/>
                     {/* job  type */}
                    <CustomFormSelect name="mode" control={form.control} labelText="job mode " items={Object.values(JobMode)}/>


                </div>
                <Button type="submit" className="mt-4 dark:text-white">Submit</Button>
            </form>
        </Form>
  )
}

export default CreateJobForm
