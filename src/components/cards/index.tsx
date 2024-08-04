

import { useGetAllTemplatesQuery } from "@/store/slice/templateApiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook"
import Card from "./card";
import { useEffect,useState } from "react";
import { addMoreTemplate } from "@/store/slice/templateSlice";
import { Button } from "../ui/button";
import { ArrowDownToDot } from "lucide-react";

export const Cards = () => {
  const {templates,isSearching, searchData} = useAppSelector((state)=>state.template);
  const dispatch = useAppDispatch();
  const [params,setParams] = useState({
    limit:5,
    offset:0
  })
  const {data,isLoading,refetch} = useGetAllTemplatesQuery(params);
  const loadMoreData = async () => {
      setParams((data)=>({
        ...data,
        offset: params.offset + 5
      }));
      
  };

  const getMoreData = async ()=>{
    await refetch();
    dispatch(addMoreTemplate(data.data));
    console.log(data);
    console.log(params)
  }
  useEffect(()=>{
    getMoreData();
  },[params])

  useEffect(()=>{
    if(!isLoading)loadMoreData();
  },[isLoading]);

  return isLoading?<p className="text-center">Loading...</p>:(
    <div className="px-6 py-4">
      <div>
        {(!isSearching?searchData:templates)?.map((data:any)=><Card {...data}/>)}
      </div>
      {(isSearching)&&!isLoading&&<div className="flex justify-center">
         {(templates.length !== data.page.total)&&<Button className="bg-[#dfdfdf] text-[#838282] px-4" onClick={loadMoreData} variant={'outline'}>Load More <ArrowDownToDot /></Button>}
      </div>}
    </div>
  )
}
