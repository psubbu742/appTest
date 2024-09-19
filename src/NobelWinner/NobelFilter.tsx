import {useState, FunctionComponent} from 'react'

interface UserDataProps {
    handleFilter: (a:string) => void,
    handleFilterYear: (a:string) => void,
    
}

const NobelFilter:FunctionComponent<UserDataProps>  = ({handleFilter, handleFilterYear}) => {

    const [value, setValue] = useState<any>(null)
    const [valueYear, setValueYear] = useState<any>(null)

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        console.log(event.target.value)
        setValue(event.target.value)
        handleFilter(event.target.value)
    }

    const handleChangeYear = (event:React.ChangeEvent<HTMLInputElement>):void => {
        console.log(event.target.value)
        setValueYear(event.target.value)
        handleFilterYear(event.target.value)
    }


    return <>
        <input type="input" value={value} defaultValue="filter by Category" onChange={handleChange} />
        
        <input type="input" value={valueYear} defaultValue="filter by year" onChange={handleChangeYear} />
    </>

}

export default NobelFilter;