import AddButton from './add_button'
import SearchBar from './searchbar'

const Header = () => {
  return (
    <div className='px-6 flex justify-between'>
        <div>
        <div className='font-[600] text-2xl mt-5'>Employees</div>
        <div className='tex-sm text-[#989696]'>All the employees of company are listed here</div>
        <SearchBar/>
        </div>
        <div>
           <AddButton/>
        </div>
    </div>
  )
}

export default Header