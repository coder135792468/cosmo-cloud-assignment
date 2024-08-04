

import { useGetAllTemplatesQuery } from "@/store/slice/templateApiSlice";
// import { useAppSelector } from "../../store/hook"
import Card from "./card";

export const Cards = () => {
//   const templates = useAppSelector((state)=>state.template.templates);
  const {data} = useGetAllTemplatesQuery({
        limit:10,
        offset:0
  });

  return (
    <div className="px-6 py-4">
        {data?.data.map((data:any)=><Card {...data}/>)}
    </div>
  )
}
