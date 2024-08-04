import { Button } from "../../ui/button"
import { Input } from "../../ui/input"

const SearchBar = () => {
  return (
     <div className="flex max-w-[400px] mt-5">
        <Input className="mr-2" type='text' placeholder="Enter Unique Id.."/>
        <Button>Search</Button>
     </div>
  )
}

export default SearchBar