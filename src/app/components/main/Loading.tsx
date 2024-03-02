import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function CircularProgressWithLabel() {

    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-flex',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress variant="determinate" value={progress} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(progress)}%`}</Typography>
            </Box>
        </Box>
    );
}

export default CircularProgressWithLabel;