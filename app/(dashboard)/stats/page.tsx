import ChartsContainer from '@/components/ChartsContainer';
import StatsConatiner from '@/components/StatsConatiner';
import { getChartsDataAction, getStatsAction } from '@/utils/action'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react'

export default async function StatsPage() {


const queryClient=new QueryClient();
  await queryClient.prefetchQuery({
    queryKey:['stats'],
    queryFn:()=>getStatsAction(),
})
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <StatsConatiner/>
        <ChartsContainer/>
    </HydrationBoundary>
  )
}
