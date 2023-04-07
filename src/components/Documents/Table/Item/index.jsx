import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export const Item = ({ StarBorderIcon }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
            <tbody>
                {[...Array(5)].map((_, index) => (
                    <tr key={index} className="table__row">
                        <td className="table__cell">Row {index + 1}, Column 1</td>
                        <td className="table__cell">Row {index + 1}, Column 2</td>
                        <td className="table__cell">Row {index + 1}, Column 2</td>
                        <td className="table__cell">Row {index + 1}, Column 2</td>
                        <td className="table__cell">Row {index + 1}, Column 2</td>
                        <td className="table__cell">Row {index + 1}, Column 2</td>
                        <td className="table__cell">Row {index + 1}, Column 2</td>
                        <td className="table__cell">Row {index + 1}, Column 2</td>
                        <td className="table__cell"><Checkbox {...label} /></td>
                        <td className="table__cell">{StarBorderIcon}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}
