import React, { useState } from 'react'
import { getFacts } from './apis'

export default function ApiComp() {
    const [value, setValue] = useState('Loading')
    function load() {
        // setTimeout(() => {
        //     setValue("Sagar")
        // }, 5000)
        getFacts()
        .then(x=>{
            setValue(x.data.fact)
        })
    }

    return (
        <>
            <button onClick={load}>Load Data</button>
            <div>{value}</div>
        </>
    )
}
