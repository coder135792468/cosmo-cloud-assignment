import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hook";
import { useDeleteTemplateMutation } from "@/store/slice/templateApiSlice";
import { deleteTemplate } from "@/store/slice/templateSlice";

const Card = ({ name, role, date, _id}: any) => {
    const dispatch = useAppDispatch();
    const [deleteData] = useDeleteTemplateMutation();
    
    const deleteEmployee = async ()=>{
        try{
            await deleteData(_id);
            dispatch(deleteTemplate(_id));
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className='bg-[#f5f7fa] inline-block p-5 w-[300px] rounded-md shadow-lg hover:shadow-md m-4'>
            <div className='flex'>
                <div className='rounded-full w-[40px] h-[40px] bg-[#e6e7e8] text-[#8c8a8a] font-[bold] flex justify-center items-center'>{name[0]}</div>
                <div className='pl-6'>
                    <strong>{name}</strong>
                    <div className='text-sm font-[500]'>{role}</div>
                </div>
            </div>
            <div className='mt-4'>
                <div className="my-3"><strong className='font-[500]'>Unique ID:</strong> {_id}</div>
                <div><strong className='font-[500]'>Joining Date:</strong> {date}</div>
            </div>
            <Button className="mt-5 w-full" variant={'destructive'} onClick={deleteEmployee}>Delete</Button>
        </div>
    )
}

export default Card;