import { useMemo } from "react";
import { useState } from "react";
import { DatasComponent } from "./DatasComponent";

let nextId = 0;

export function PrincipalComponent () {

    const [ datas, setDatas ] = useState({});
    const [ sendDatas, setSendDatas ] = useState([]);

    function sendData (e) {
        e.preventDefault();
        setSendDatas([
            ...sendDatas, { ...datas, id: nextId++ }
        ]);
        setDatas({name: "", lastName: "", country: ""});    
    }

    function replaceData ( data ) {
        setSendDatas(
            sendDatas.map((u) => {
                if ( u.id === data.id ) {
                    return data;
                } else {
                    return u;
                }
            })
        )
    }
    //useMemo para evitar renderizado de un componente
    const child = useMemo(()=> {
        return <DatasComponent replaceData={replaceData} onClick={ setSendDatas } sendDatas={sendDatas} />
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