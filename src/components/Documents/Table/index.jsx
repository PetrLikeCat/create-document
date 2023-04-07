import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Item } from "./Item";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


export const Table = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const date = [
        "Адрес", "Долг", "срок", "пр. ЕПД", "долг. ЕПД", "судебная работа", "соглашения", "коментарии"
    ]

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table__title">Адрес</th>
                    <th className="table__title">Column 2</th>
                    <th className="table__title">Column 2</th>
                    <th className="table__title">Column 2</th>
                    <th className="table__title">Column 2</th>
                    <th className="table__title">Column 2</th>
                    <th className="table__title">Column 2</th>
                    <th className="table__title">Column 2</th>
                    <th className="table__title"><Checkbox {...label} style={{"appearance":"none"}} /></th>
                    <th className="table__title"><StarBorderIcon /></th>
                </tr>
            </thead>
            <Item StarBorderIcon ={<StarBorderIcon />}/>
        </table>
    );
}

