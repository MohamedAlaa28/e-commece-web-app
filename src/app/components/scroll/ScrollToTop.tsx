import { KeyboardArrowUp } from "@mui/icons-material"
import { Fab, Zoom, useScrollTrigger } from "@mui/material"

function ScrollToTop() {
    return (
        <Zoom in={useScrollTrigger({ threshold: 100 })}>
            <Fab sx={{ position: "fixed", bottom: 33, right: 33, backgroundColor: "#d23f57","&:hover":{backgroundColor: "#9D4352"} }}
                size="small" variant="extended" color="primary" aria-label="add"
                onClick={() => scrollTo(0, 0)}>
                <KeyboardArrowUp />
            </Fab>
        </Zoom>
    )
}

export default ScrollToTop