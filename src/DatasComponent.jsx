import { useMemo } from "react";
import { DataListComponent } from "./DataListComponent";


export function DatasComponent ({sendDatas, onClick, stateFather, setStateFather, replaceData}) {

    const child = useMemo(() => {
        return <DataListComponent replaceData={replaceData} sendDatas={sendDatas} onClick={ onClick } stateFather={stateFather} setStateFather={setStateFather}/>
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