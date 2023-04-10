import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import cress from "./../img/крестик.svg"
import cress1 from "./../img/крестик (1).svg"

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Court } from '../components/Сourt'
import { CreateSort } from '../components/CreateSort';
import { InputSort } from '../components/InputSort';
import { InputPeriod } from '../components/DocumentTime/InputPeriod';
import { PopupDuty } from '../components/PopupDuty';
import Rectangle from "..//img/Rectangle 2.svg"


export const CreateDocument = () => {
    const date =
        ["Все дела", "Без статуса", "В банках", "Претензии",
            "Соглашения", "Действующие соглашения",
            "Исключить действующие соглашения",
            "Неотработанные", "Комментарии"]


    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [popup, setPopup] = React.useState(false)
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };
    return (
        <div>
            <Header />
            <div className="create">
                <h1>Карта  дела</h1>
                <div className="side">
                    <Court />
                </div>
                <div className="create-subtitle">
                    <h2>Данные по делу</h2>
                </div>

                <div className="create-sort">
                    <div>
                        <CreateSort variants={date} />
                        <img className='create__cress' src={cress} alt="cress" />
                        <img className='create__cress' src={cress1} alt="cress" />
                    </div>
                    <button className='create-sort__btn'>Документы</button>
                </div>
                <div className='create-button'>
                    <button>Судебная работа</button>
                    <button>Соглашения</button>
                </div>

                <div className="create-variant">
                    <p>Вид производства</p>
                    <CreateSort variants={date} />
                </div>
                <div style={{
                    "display": "flex",
                    "marginTop": "56px"
                }}>
                    <div style={{
                        "width": "600px",
                        "marginLeft": "40px",

                    }}>
                        <p className='create__text'>Наименования суда</p>
                        <InputSort placeholder={"Наименования суда"} />
                    </div>
                    <div style={{
                        "width": "150px",
                        "marginLeft": "60px"
                    }}>
                        <p className='create__text'>Участок</p>
                        <InputSort placeholder={"Номер"} />
                    </div>
                    <div style={{
                        "width": "150px",
                        "marginLeft": "60px"
                    }}>
                        <p className='create__text'>Судья</p>
                        <InputSort placeholder={"Судья"} />
                    </div>
                </div>

                <div style={{ "marginTop": "30px" }}>
                    <div style={{
                        "width": "600px",
                        "marginLeft": "40px",

                    }}>
                        <p className='create__text'>Наименования суда</p>
                        <InputSort placeholder={"Наименования суда"} />
                    </div>
                </div>

                <div style={{
                    "display": "flex",
                    "marginLeft": "40px",
                    "marginTop": "20px",
                }}>
                    <div>
                        <p className='create__text'>Период взыскание</p>
                        <InputPeriod
                            startDate={startDate}
                            handleStartDateChange={handleStartDateChange}
                            endDate={endDate}
                            handleEndDateChange={handleEndDateChange} />
                    </div>

                    <div style={{
                        "width": "250px",
                        "marginLeft": "60px",
                        "marginTop": "53px",
                    }}>
                        <InputSort placeholder={"Период взыскание (комм.)"} />
                    </div>
                </div>
                <div style={{ "display": "flex", "marginTop": "20px", }}>
                    <div style={{
                        "width": "150px",
                        "marginLeft": "40px",

                    }}>
                        <p className='create__text'>Основная сумма</p>
                        <InputSort placeholder={"сумма"} />
                    </div>
                    <div style={{
                        "width": "130px",
                        "marginLeft": "60px"
                    }}>
                        <p className='create__text'>Пени</p>
                        <InputSort placeholder={" сумма"} />
                    </div>

                    <div style={{
                        "width": "150px",
                        "marginLeft": "60px"
                    }}>
                        <p className='create__text'>Прочее</p>
                        <InputSort placeholder={"сумма"} />
                    </div>

                    <div style={{
                        "width": "200px",
                        "marginLeft": "60px"
                    }}>
                        <p className='create__text'>Сумма+ пени + прочее</p>
                        <InputSort placeholder={"сумма"} />
                    </div>

                    <div style={{
                        "width": "240px",
                        "marginLeft": "60px"
                    }}>
                        <p className='create__text'>Госпошлина <span className='create__duty' onClick={() => setPopup(true)}><img src={Rectangle} alt="span" />Рассчитать тут</span></p>
                        <PopupDuty popup={popup} setPopup={setPopup} />
                        <InputSort placeholder={"сумма"} />
                    </div>
                </div>

                <div style={{
                    "marginTop": "30px",
                }}>
                    <div style={{
                        "width": "1064px",
                        "marginLeft": "40px",
                        "marginTop": "20px",
                    }}>
                        <p className='create__text'>Примечания</p>
                        <textarea className='create__note' type="text" placeholder="" />
                    </div>
                </div>

                <div style={{
                    "display": "flex",
                    "justify-content": "space-between",
                    "marginTop": "40px",
                    "marginLeft": "40px"
                }}>
                    <div>
                        <button className='create-button__back'>Назад</button>
                        <button className='create-button__new'>Создать</button>
                    </div>
                    <button className='create-button__new'>сохранить</button>
                </div>
            </div>
            <div style={{
                "marginTop": "40px",
            }}>
                <Footer />
            </div>

        </div>
    )
}
