import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader({onSave}:any) {
  return (
      <div className='p-3 h-[10vh] border-b flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <Image src={'/logo-1.png'}
          alt='logo'
          height={40}
          width={40} />
        <h2><strong>Excalidraw</strong></h2>
      </div>
      <div className='flex items-center gap-4'>
        <Button className='h-8 text-[12px]
        gap-2 bg-green-500 hover:bg-green-600'
        onClick={()=>onSave()}
        > 
        <Save className='h-4 w-4' /> Save </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader