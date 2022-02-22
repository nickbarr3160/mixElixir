import Link from 'next/link';
import  {useSearch}  from '@/utils/provider';
import {SearchSelection} from 'comps/SearchSelection'

export default function Settings() {
  
  const {search, setSearch} = useSearch()

  const setType = (txt)=>{
      console.log("this is the arg", txt)
      

      setTimeout(()=>{

        setSearch(txt)

      },500)

      
    }

  
  return (
    <div>
    <h1>Choose your search filter!</h1>
    <SearchSelection onSearch={(e)=> setType(e.target.value)}/>
    <Link href='/'>Head back to search</Link>
    </div>
  )
}
