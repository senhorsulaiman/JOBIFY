'use client';

type ButtonContainerProps={
currentPage:number;
totalPages:number;

}

import { Button } from './ui/button';
import { useRouter,usePathname, useSearchParams } from 'next/navigation';

import React from 'react'
import { number } from 'zod';

function ButtonContainer({currentPage,totalPages}:ButtonContainerProps) {
    const searchParams=useSearchParams();
    const router=useRouter();
    const pathname=usePathname();
    const PageButtons=Array.from({length:totalPages},(_,i)=>i+1);
    const handlePageChange=(page: number) =>{
    
        const defaultParams={
            search:String(searchParams.get('search'||'')),
            jobStatus:String(searchParams.get('jobStatus'||'')),
            page: String(page) 
        };
        let params= new URLSearchParams(defaultParams);
        router.push(`${pathname}?${params.toString()}`)

     }
  return (

    <div>

            {PageButtons.map((page)=>{
                return(
                    <Button key={page} size='icon'
                    variant={currentPage==page?'default':'outline'} onClick={()=>handlePageChange(page)}>

                        {page}
                    
                    </Button>
                )
            })}

        
    </div>
    
  )
}

export default ButtonContainer

