// import React from 'react'
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const DocumentSort = ({ title, variants }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const variantsMap = variants.map((item, i) => <MenuItem value={i * 10}>{item}</MenuItem>)
    return (
        <ul className="sort">
            <p className="sort-title">{title}</p>
            <FormControl sx={{ m: 0, minWidth: 120 }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    {variantsMap}
                </Select>
            </FormControl>
        </ul>
    )
}
