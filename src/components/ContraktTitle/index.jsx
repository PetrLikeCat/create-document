import React from 'react'
import { Link } from 'react-router-dom'

export const ContraktTitle = () => {
    return (
        <div className="contract-title">
            <h1 className="contract-title__item">Какой тип договоров вас интересует?</h1>
            <div className="contract-title__btn">
                <Link to="#"><button>Взыскание задолжнностей</button></Link>
                <Link to="#"><button>Исковое заявления</button></Link>
                <Link to="#"><button>Трудовые</button></Link>
                <Link to="#"><button>Недвижимость</button></Link>
                <Link to="#"><button>Автомобили</button></Link>
            </div>
        </div>
    )
}
