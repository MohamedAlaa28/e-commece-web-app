import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type props = {
    value: number;
}
function CircularProgressWithLabel({ value }: props) {
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
            <CircularProgress variant="determinate" value={value} />
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
                >{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
}

export default CircularProgressWithLabel;