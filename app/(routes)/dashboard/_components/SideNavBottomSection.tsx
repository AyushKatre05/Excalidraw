import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
function SideNavBottomSection({onFileCreate,totalFiles}:any) {
  const [fileInput,setFileInput]=useState('');
  return (
    <div>
      {/* Add New File Button  */}
      <Dialog>
  <DialogTrigger className='w-full' asChild>
  <Button className='w-full bg-blue-600 
      hover:bg-blue-700 justify-start mt-3'>New File</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New File</DialogTitle>
      <DialogDescription>
          <Input placeholder='Enter File Name' 
          className='mt-3'
          onChange={(e)=>setFileInput(e.target.value)}
          />
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="">
          <DialogClose asChild>
            <Button type="button" 
            className='bg-blue-600
            hover:bg-blue-700'
            disabled={!(fileInput&&fileInput.length>3)}
            onClick={()=>onFileCreate(fileInput)}
            >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>
     </div>
  )
}

export default SideNavBottomSection