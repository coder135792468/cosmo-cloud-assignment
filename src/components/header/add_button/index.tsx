import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

 const AddButton = ()=> {
    
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
              autoComplete="off"
              placeholder="Employee Name..."
              className="col-span-3"
            />
            <Input
              id="username"
              autoComplete="off"
              placeholder="Enter Designation..."
              className="col-span-3"
            />
            <Input type='date'/>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default AddButton