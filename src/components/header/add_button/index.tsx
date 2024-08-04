import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/store/hook"
import { useAddTemplateMutation } from "@/store/slice/templateApiSlice"
import { addTemplate } from "@/store/slice/templateSlice"
import { useState } from "react"

 const AddButton = ()=> {
    const [name,setName] = useState('');
    const [role,setRole] = useState('');
    const [date,setDate] = useState('');
    const [addData] = useAddTemplateMutation();
    const dispatch = useAppDispatch();
    
    const submitData = async ()=>{
       const body = {
         name,role,date
       };
       try{
           const {data} = await addData(body);
           console.log(data.id);
           dispatch(addTemplate({
            ...body,
            _id:data.id
           }))
        }catch(err){
            console.log(err);
        }
    }

    return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-6 bg-primary'>Add New Employee</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          <DialogDescription>
            Enter the information of new employee
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <Input
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              autoComplete="off"
              placeholder="Employee Name..."
              className="col-span-3"
            />
            <Input
              id="role"
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              autoComplete="off"
              placeholder="Enter Designation..."
              className="col-span-3"
            />
            <Input type='date' value={date} onChange={(e)=>setDate(e.target.value)} placeholder="Joining Date"/>
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button onClick={submitData} type="submit">Submit</Button>
        </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default AddButton