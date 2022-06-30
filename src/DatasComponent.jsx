import { useMemo } from "react";
import { DataListComponent } from "./DataListComponent";


export function DatasComponent ({sendDatas, replaceData, deleteData}) {

    const child = useMemo(() => {
        return <DataListComponent replaceData={replaceData} sendDatas={sendDatas} deleteData={deleteData}/>
    },[ sendDatas ])

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