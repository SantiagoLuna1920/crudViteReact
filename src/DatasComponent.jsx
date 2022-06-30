import { useMemo } from "react";
import { DataListComponent } from "./DataListComponent";


export function DatasComponent ({sendDatas, onClick, replaceData, sendDataa, deleteData}) {

    const child = useMemo(() => {
        return <DataListComponent replaceData={replaceData} sendDatas={sendDatas} onClick={ onClick } sendDataa={sendDataa} deleteData={deleteData}/>
    },[ sendDataa ])

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Counntry</th>
                    <th>Identifier</th>
                    <th>Interactive</th>
                </tr>
            </thead>
            <tbody>
                { child } 
            </tbody>
        </table>
    )
}