import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { Close } from "@mui/icons-material";
import "./buttonsStyle.css";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ProductDetails from "./ProductDetails";
function Main() {
    const theme = useTheme();

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const [alignment, setAlignment] = useState("left");

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{ py: 9 }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                <Box>
                    <Typography variant="h6">Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">
                        All our new arrivals in a exclusive brand selection
                    </Typography>
                </Box>

                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    aria-label="text alignment"
                    onChange={handleAlignment}
                    sx={{
                        ".Mui-selected": {
                            border: "1px solid rgba(233, 69, 96, 0.5) !important",
                            color: "#e94560",
                            backgroundColor: "initial",
                        },
                    }}
                >
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className="toggle-Button"
                        value="left"
                        aria-label="left aligned"
                    >
                        All Products
                    </ToggleButton>

                    <ToggleButton
                        sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                        className="toggle-Button"
                        value="center"
                        aria-label="centered"
                    >
                        MEN category
                    </ToggleButton>

                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className="toggle-Button"
                        value="right"
                        aria-label="right aligned"
                    >
                        Women category
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                {
                    [1, 2, 3, 4].map((card) => (
                        <Card key={card} sx={{
                            maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { scale: "1.1", rotate: "1deg", transition: "0.35s" },
                            bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
                            boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;",
                        }}>
                            <CardMedia
                                sx={{ height: 277 }}
                                image="/images/100.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                >
                                    <Typography gutterBottom variant="h6" component="div">
                                        T-shirt
                                    </Typography>

                                    <Typography variant="subtitle1" component="p">
                                        $12.99
                                    </Typography>
                                </Stack>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>

                            </CardContent>

                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Button size="large" onClick={handleClickOpen} sx={{ textTransform: "capitalize" }}>
                                    <AddShoppingCartOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                                    Add To Cart
                                </Button>
                                <Button size="small">
                                    <Rating name="read-only" value={4.3} precision={0.1} readOnly />
                                </Button>
                            </CardActions>

                        </Card>
                    ))
                }
                <Dialog
                    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton
                        sx={{
                            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                            position: "absolute",
                            top: 11,
                            right: 11,
                        }}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>
                    <ProductDetails />
                </Dialog>
            </Stack>

        </Container>
    )
}

export default Main