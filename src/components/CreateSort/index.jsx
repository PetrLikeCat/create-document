import React from 'react'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const CreateSort = ({ variants }) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const variantsMap = variants.map((item, i) => <MenuItem value={i * 10}>{item}</MenuItem>)
    return (
        <>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
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

            {/* <button className='create-sort__btn'>Документы</button> */}
        </>
    )
}
