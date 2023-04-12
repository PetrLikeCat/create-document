import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Market } from '../components/Market'
import { Questions } from '../components/Questions'
import { Rates } from '../components/Rates'
import { Usefull } from '../components/Usefull'
import { UseService } from '../components/UseService'
import { Сomparison } from '../components/Сomparison'

export const Home = () => {
    const [active, setActive] = React.useState(false)
    return (
        <div className="content">
            <Header active={active} setActive={setActive}/>
            <Main active={active} setActive={setActive}/>
            <UseService />
            <Market />
            <Сomparison />
            <Usefull />
            <Rates />
            <Questions />
            <Footer />
        </div>
    )
}
