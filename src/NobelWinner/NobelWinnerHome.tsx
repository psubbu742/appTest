import React, {useState, useEffect} from 'react'
import NobelWinnerTable from './NobelWinnerTable'
import NobelFilter from './NobelFilter'
const NobelWinnerHome = ()=> {
    
    interface NobelDataSet {
        "year":string,
        "category":string,
        "laureates": [{
            "id":string,
            "firstname":string,
            "surname":string,
            "motivation":string,
            "share":string
        }]
    }

    const [nobelData, setNobelData] = useState<NobelDataSet [] >([])
    const [filterData, setFilterData] = useState<NobelDataSet [] >([])
    const [filterVal, setFilterVal] = useState< string >("")
    const [filterValYear, setFilterValYear] = useState< string >("")


    useEffect(() => {
        fetch('https://api.nobelprize.org/v1/prize.json',{
            method:'GET',
          
        })
        .then(response => response.json())
        .then(data => {setNobelData(data["prizes"])})
        .catch(error => console.log({'error':error}))
    },[])


  const handleFilter = (val:string) => {

        let filterData = nobelData.filter(data => data.category === val || data.year === val)
        setFilterData(filterData.length>0 ?filterData: nobelData);
  }

  const   handleFilterYear = (val:string) => {

        let filterData = nobelData.filter(data => data.year === val)
        setFilterData(filterData.length>0 ?filterData: nobelData);
  }



    return  <>
        <h1>Nobel Winners</h1>
        <NobelFilter handleFilter={handleFilter} handleFilterYear={handleFilterYear}/>
        {nobelData && <NobelWinnerTable data={filterData.length>0 ? filterData: nobelData}/>}
    </>
}

export default NobelWinnerHome;