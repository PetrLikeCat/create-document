import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Item } from "./Item";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';


export const Table = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const date = [
        "Адрес", "Долг", "срок", "пр. ЕПД", "долг. ЕПД", "судебная работа", "соглашения", "коментарии"
    ]

    return (
        <table className="table">
            <thead>
                <tr>
                    <Link to="/CreateDoc" className="table__title"><th>Адрес</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th>Долг</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th>срок</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th>пр. ЕПД</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th>долг. ЕПД</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th>судебная работа</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th>соглашения</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th>коментарии</th></Link>
                    <Link to="/CreateDoc" className="table__title"><th><Checkbox {...label} style={{ "appearance": "none" }} /></th></Link>
                    <Link to="/CreateDoc" className="table__title"><th><StarBorderIcon /></th></Link>
                </tr>
            </thead>
            <Item StarBorderIcon={<StarBorderIcon />} />
        </table>
    );
}

