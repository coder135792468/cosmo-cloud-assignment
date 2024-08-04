import { useDispatch } from "react-redux"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import {  useEffect,useState } from "react";
import { getSearchData, setSearching } from "@/store/slice/templateSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [text,setText] = useState('');
  useEffect(()=>{
      const searching = setTimeout(()=>{
         dispatch(setSearching(text.trim().length == 0));
      },100);
      return ()=>clearTimeout(searching);
  },[text]);
  
  const searchData = (e: { target: { value: string }; })=>{
    setText(e.target.value);
    if(e.target.value.trim().length == 0)return;
    dispatch(getSearchData(e.target.value));
   
  }
  return (
     <div className="flex max-w-[400px] mt-5">  
        <Input value={text} onChange={searchData}  className="mr-2" type='text' placeholder="Enter Unique Id.."/>
        <Button>Search</Button>
     </div>
  )
}

export default SearchBar;