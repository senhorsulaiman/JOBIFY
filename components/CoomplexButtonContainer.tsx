'use client';

type ButtonContainerProps={
currentPage:number;
totalPages:number;

}

import { Button } from './ui/button';
import { useRouter,usePathname, useSearchParams } from 'next/navigation';

import React from 'react'
import { number } from 'zod';
type ButtonProps={
    page:number,
    activeClass:boolean,
 }
function ComplexButtonContainer({currentPage,totalPages}:ButtonContainerProps) {
    const searchParams=useSearchParams();
    const router=useRouter();
    const pathname=usePathname();
    const PageButtons=Array.from({length:totalPages},(_,i)=>i+1);
    const handlePageChange=(page: number) =>{
        const defaultParams={
            search:String(searchParams.get('search'||'')),
            jobStatus:String(searchParams.get('jobStatus'||'all')),
            page: String(page) 
        };
        let params= new URLSearchParams(defaultParams);
        router.push(`${pathname}?${params.toString()}`)

     }
     
     const addPageButton =({page,activeClass}:ButtonProps)=>{
        return (

            <Button key={page} size='icon'
            variant={activeClass?'default':'outline'} onClick={()=>handlePageChange(page)}>

                {page}
            
            </Button>
        )

     }
     const renderPageButton=()=>{
        const pageButtons= [];
        //firstpage
        pageButtons.push(

            addPageButton({page:1,activeClass:currentPage===1})
        );
        //dots

         if(currentPage >3){
            pageButtons.push(<Button size='icon' variant='outline' key='dots-1'>.. </Button>)
        }
        //one before currentpage
         if(currentPage!==1 && currentPage !== 2){
             pageButtons.push(
                addPageButton({page:currentPage-1,activeClass:false})
            )
         }
        //currentpages
        if(currentPage!==1 && currentPage !== totalPages){
           pageButtons.push(
               addPageButton({page:currentPage,activeClass:true})
             )
        }
        //one aftercurrentpage
         if(currentPage!==totalPages && currentPage !== totalPages-1){
             pageButtons.push(
                addPageButton({page:currentPage + 1,activeClass:false})
            )
         }
          //dots

         if(currentPage < (totalPages - 2)){
             pageButtons.push( <Button size='icon' variant='outline' key='dots-2'>..</Button>)
         }
        //lastpage
        pageButtons.push(

            addPageButton({page:totalPages,activeClass:currentPage===totalPages})
        );
        return pageButtons;

     }
  return (

    <div className='flex gap-2 items-center'>

        {/* prev */}
        <Button 
            className='flex items-center gap-x-2'
             variant='outline'
            onClick={()=> {let prevPage=currentPage -1;
                if(prevPage<1) prevPage=totalPages;
                handlePageChange(prevPage);
            }}
        >Prev</Button>
        {renderPageButton()}
        <Button 
            className='flex items-center gap-x-2'
            variant='outline'
            onClick={()=> {let nextPage=currentPage +1;
                if(nextPage >totalPages) nextPage=1;
                handlePageChange(nextPage );
            }}
        >Next</Button>
    </div>
    
  )
}

export default ComplexButtonContainer

