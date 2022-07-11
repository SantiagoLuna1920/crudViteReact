import { useState } from "react";
import { useDispatch, useSendDatas } from "./helpers/datasController";

export function DataListComponent () {
    const sendDatas = useSendDatas();

    return (
            <>
            {
            sendDatas.map( (data, index) => (
            <StateButtonComponent key={data.id} data={data} index={index} />
                ) )
            }
            </>
    )
}

function StateButtonComponent ({index, data}) {
    const [ stateComponent, setStateComponent ] = useState(false);
    const dispatch = useDispatch();

    let dataContent;

    if ( stateComponent ) {
        dataContent = (
            <>
                <td><input value={ data.name } onChange={(e)=> {
                    dispatch({
                    type: 'Edit_data',
                    data: {
                    ...data,
                    name: e.target.value
                    }
        })
                } } /></td>
                <td><input value={ data.lastName } onChange={(e)=> {
                    dispatch({
                    type: 'Edit_data',
                    data: {
                    ...data,
                    lastName: e.target.value
                    }
        })
                } }  /></td>
                <td><input value={ data.country } onChange={(e)=> {
                    dispatch({
                    type: 'Edit_data',
                    data: {
                    ...data,
                    country: e.target.value
                    }
        })
                } } /></td>
                            <td>{ data.id }</td>
                            <td> <button onClick={ () => {
                                setStateComponent(false)
                                
                            } } >Save</button>
                            <button onClick={ () => {
                                dispatch({
                                type: 'Delete_data',
                id: data.id,
            }
        )
                            }} >Delete</button>
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
                            <button onClick={ () => {
                                dispatch(
            {
                type: 'Delete_data',
                id: data.id,
            }
        )
                            }} >Delete</button>
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