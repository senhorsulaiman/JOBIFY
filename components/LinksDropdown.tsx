
import { AlignLeft } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import links from '@/utils/links';
  import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
function LinksDropdown() {

  return (
    <DropdownMenu >
  <DropdownMenuTrigger asChild className='lg:hidden'>
    <Button variant='outline' size='icon'>
          <AlignLeft />

          <span className='sr-only'>Toggle links</span>
        </Button></DropdownMenuTrigger>
  <DropdownMenuContent  className='w-52 lg:hidden '
        align='start'
        sideOffset={25}>


    {links.map((link)=>{

return(

    <DropdownMenuItem  key={link.href} >

    <Link href={link.href} className='flex gap-3 justify-start'>{link.icon} <span className='capitalize '>{link.label}</span></Link>

  </DropdownMenuItem>
)
})}

  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default LinksDropdown
