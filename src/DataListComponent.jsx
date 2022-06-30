import { useMemo } from "react";
import { useState } from "react";

export function DataListComponent ({replaceData, sendDatas, onClick, sendDataa, deleteData }) {
    const child = useMemo (()=> { 
        return sendDataa.map( (data, index) => (
            <StateButtonComponent key={data.id} replaceData={replaceData} onClick={onClick} sendDatas={sendDatas} data={data} index={index} sendDataa={sendDataa} deleteData={deleteData} />
        ) )
     }, [ sendDataa, onClick ])

    return (
            <>
            {child}
            </>
    )
}

function StateButtonComponent ({replaceData, index, data, deleteData}) {
    const [ stateComponent, setStateComponent ] = useState(false);

    let dataContent;

    if ( stateComponent ) {
        dataContent = (
            <>
                <td><input value={ data.name } onChange={(e)=> {
                    replaceData({
                        ...data,
                        name: e.target.value
                    })
                } } /></td>
                <td><input value={ data.lastName } onChange={(e)=> {
                    replaceData({
                        ...data,
                        lastName: e.target.value
                    })
                } }  /></td>
                <td><input value={ data.country } onChange={(e)=> {
                    replaceData({
                        ...data,
                        country: e.target.value
                    })
                } } /></td>
                            <td>{ data.id }</td>
                            <td> <button onClick={ () => {
                                setStateComponent(false)
                                
                            } } >Save</button>
                            <button onClick={ () => {deleteData(data.id)}} >Delete</button>
                            </td>
            </>
        )
    } else {
        dataContent = (
            <>
                <td>{data.name}</td>
                <td>{data.lastName}</td>
                <td>{ data.country }</td>
                            <td>{ data.id }</td>
                            <td> <button onClick={ () => {
                                setStateComponent(true)
                            } } >Edit</button>
                            <button onClick={ () => {deleteData(data.id)}} >Delete</button>
                            </td>
            </>
        )
    }

return (
    <>
        <tr key={index}>
            { dataContent }                
        </tr>
    </>
)
}