import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TestElement = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:5000/reactProject/dashboardData';

        fetch(apiUrl)
            .then(response => response.json())
            .then(resultData => {
                setData(resultData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Typography variant='body5' sx={{color: (theme) => theme.palette.primary.dark}}>Hello</Typography>
        </>
    )
}

export default TestElement;