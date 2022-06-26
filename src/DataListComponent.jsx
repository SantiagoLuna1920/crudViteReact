import { useMemo } from "react";
import { useState } from "react";

export function DataListComponent ({replaceData, sendDatas, onClick }) {
    
    const child = useMemo (()=> { 
        return sendDatas.map( (data, index) => (
            <StateButtonComponent key={index} replaceData={replaceData} onClick={onClick} sendDatas={sendDatas} data={data} index={index} />
        ) )
     }, [ sendDatas, onClick ])

    return (
            <>
            {child}
            </>
    )
}

function StateButtonComponent ({replaceData, index, onClick, sendDatas, data}) {
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
    function deleteData (ids) {
        onClick(
            sendDatas.filter( (deleteUser) => {
                return deleteUser.id !== ids;
            } )
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