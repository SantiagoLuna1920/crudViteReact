import { createContext, useContext, useReducer } from "react"


const sendDatasContext = createContext(null);
const dispatchContext = createContext(null);

export function useSendDatas () {
    return useContext(sendDatasContext);
}

export function useDispatch() {
    return useContext(dispatchContext);
}

export function DatasProvider ( { children } ) {
    const [ sendDatas, dispatch ] = useReducer(datasReducer, []);

    return (
        <sendDatasContext.Provider value={sendDatas}>
            <dispatchContext.Provider value={dispatch}>
                { children }
            </dispatchContext.Provider>
        </sendDatasContext.Provider>
    );
}



export default function datasReducer ( datas, options ) {

    switch(options.type) {
        case 'Add_data': {
        return [
            ...datas, 
            { ...options.data, id: options.nextId },
        ]
    }
    case 'Edit_data': {
        return datas.map( e => {
            if ( e.id === options.data.id ) {
                return options.data
            } else {
                return e
            }
        } )
    }
    case 'Delete_data': {
        return datas.filter( d => {
            return d.id !== options.id;
        } )
    }
    default: {
        throw Error('Unknown options: ' + options.type);
    }
    }

}