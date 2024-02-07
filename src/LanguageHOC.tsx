import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ApplicationMessages } from './models/language';
import { Messagecontext } from './data/context';

type Props = {
    children: React.ReactNode
}

export default function LanguageHOC({ children }: Props) {
    const [language, setLanguage] = useState<string>('english');
    const [message, setMessage] = useState<ApplicationMessages>({ heading: "" });
    useEffect(() => {
        import('./languages/' + language + '.json')
            .then(x => {
                // console.log(x.default)
                setMessage(x.default)
            })
            
    }, [language])

    useEffect(() => {
        console.log("EFFECT")
    }, [])

    useLayoutEffect(() => {
        console.log("LAYOUT")
    }, [])
    return (
        <Messagecontext.Provider value={message}>
            <select onChange={e => setLanguage(e.target.value)}>
                <option value={'marathi'}>Marathi</option>
                <option value={'english'}>English</option>
            </select>
            <hr />
            {children}
        </Messagecontext.Provider>

    )
}