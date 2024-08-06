import Navbar from '@/components/Navbar'
import Sidebar  from '../../components/Sidebar'
import React, { PropsWithChildren } from 'react'


function layout({children}:PropsWithChildren) {
  return (
    <div>
      <main className="grid lg:grid-cols-5">

        {/* first-col hide on small-screen */}

        <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
          <Sidebar/>
        </div>
        {/* second-col hide dropdown on bg screen */}
        <div className="lg:col-span-4">

          <Navbar/>
        </div>
        <div className="py-16 px-4 sm:px-4 lg:px-4">  {children}</div>

      </main>

    </div>
  )
}

export default layout
