import { useMemo, useReducer } from "react";
import { useState } from "react";
import { DatasComponent } from "./DatasComponent";
import datasReducer from "./helpers/datasController";

let nextId = 0;

export function PrincipalComponent () {

    const [ datas, setDatas ] = useState({});
    const [ sendDatas, dispatch ] = useReducer( datasReducer, [] );

    function sendData (e) {
        e.preventDefault();
        dispatch({
            type: 'Add_data',
            data: datas,
            nextId: nextId++,
        });
        setDatas({name: "", lastName: "", country: ""});    
    }

    function replaceData ( data ) {
        dispatch({
            type: 'Edit_data',
            data: data
        })
    }

    function deleteData (ids) {
        dispatch(
            {
                type: 'Delete_data',
                id: ids,
            }
        )
        
    }

    //useMemo para evitar renderizado de un componente
    const child = useMemo(()=> {
        return <DatasComponent replaceData={replaceData} sendDatas={sendDatas} deleteData={deleteData} />
      },[sendDatas])

    return (
        <div>
        <h1>AMAZING CRUD!</h1>
        <h2>Datas</h2>
        <form onSubmit={ sendData }>
        <input value={ datas.name } onChange={ (e) => { 
            setDatas( { ...datas, name: e.target.value } )
         } } placeholder="First name" required />
        <input value={ datas.lastName } onChange={ (e) => { 
            setDatas( { ...datas, lastName: e.target.value } )
         } }  placeholder="Last name" required />
        <input value={ datas.country } onChange={ (e) => { 
            setDatas( { ...datas, country: e.target.value } )
         } } placeholder="Country" required />
        <button>Send datas</button>
        </form>
        <hr />
        { child }
        <hr />
        </div>
    );
}