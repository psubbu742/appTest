import {useState, FunctionComponent} from 'react'
import './NobelStyles.css'

interface Laureates {
    
        "id":string,
        "firstname":string,
        "surname":string,
        "motivation":string,
        "share":string
    
}

interface NobelDataSet {
    "year":string,
    "category":string,
    "laureates": Array<Laureates>
}

interface NobelWinnerTableProps {
    data: Array<NobelDataSet>
}


const NobelWinnerTable:FunctionComponent<NobelWinnerTableProps> = ({data}) => {
    
   console.log(data)
    
    return <> <table className="table">
        <thead>
            <tr>
                <th>year</th>
                <th>category</th>
                <th>laureates</th>
            </tr>
        </thead>
        <tbody>
        {data && data.map((nobelUser, index) => <tr key={index}>
                    <td>{nobelUser.year} </td>
                    <td>{nobelUser.category}</td>
                    <td>
                        <ul>
                        {nobelUser.laureates && nobelUser.laureates.map((user)=>{
                                return <li key={index}><h5>{user.firstname} {user.surname}</h5>
                                <p>{user.motivation}</p></li>
                        })}
                        </ul>

                    </td>
                </tr>
                )}
        </tbody>
            
        </table></>
}

export default NobelWinnerTable
