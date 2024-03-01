"use client"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { Close } from "@mui/icons-material";
import "./buttonsStyle.css";
import { useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../../state/productsData";
import CircularProgressWithLabel from "./Loading";
import { ApiResponse, Product } from "./types";
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

function Main() {
    const theme = useTheme();
    const { t } = useTranslation();

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newProductsValue: string) => {
        if (newProductsValue !== null) {
            setProductData(newProductsValue);
        }
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);


    const allProductsAPI = "products?populate=*";
    const menProductsAPI = "products?populate=*&filters[productCategory][$eq]=men";
    const womenProductsAPI = "products?populate=*&filters[productCategory][$eq]=women";

    const [productData, setProductData] = useState(allProductsAPI);

    const { data: responseData, error, isLoading } = useGetProductByNameQuery(productData);
    const data = responseData as ApiResponse;

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    if (data) {
        return (
            <Container sx={{ py: 9 }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                    <Box>
                        <Typography variant="h6">{t("Selected Products")}</Typography>
                        <Typography fontWeight={300} variant="body1">
                            {t("All our new arrivals in a exclusive brand selection")}
                        </Typography>
                    </Box>

                    <ToggleButtonGroup
                        color="error"
                        value={productData}
                        exclusive
                        aria-label="text alignment"
                        onChange={handleAlignment}
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                                color: "#d23f57",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className="toggle-Button"
                            value={allProductsAPI}
                            aria-label="left aligned"

                        >
                            {t("All Products")}
                        </ToggleButton>

                        <ToggleButton
                            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                            className="toggle-Button"
                            value={menProductsAPI}
                            aria-label="centered"

                        >
                            {t("MEN category")}
                        </ToggleButton>

                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className="toggle-Button"
                            value={womenProductsAPI}
                            aria-label="right aligned"

                        >
                            {t("Women category")}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                    <AnimatePresence>
                        {
                            data.data.map((product: Product) => (
                                <Card
                                    component={motion.section}
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ duration: 1.6, type: "spring", stiffness: 50 }}

                                    key={product.id}
                                    sx={{
                                        maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { scale: "1.05", rotate: "1deg", transition: "0.35s" },
                                        bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
                                        boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                                    }}
                                >
                                    <CardMedia
                                        sx={{ height: 277 }}
                                        image={`${product.attributes.productImage.data[0].attributes.url}`}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                            alignItems={"center"}
                                        >
                                            <Typography gutterBottom variant="h6" component="div"
                                                sx={{
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 1,
                                                }}>
                                                {t(product.attributes.productTitle)}
                                            </Typography>

                                            <Typography variant="subtitle1" component="p">
                                                ${product.attributes.productPrice}
                                            </Typography>
                                        </Stack>

                                        <Typography variant="body2" color="text.secondary"
                                            sx={{
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3,
                                            }}>
                                            {product.attributes.productDescription}
                                        </Typography>

                                    </CardContent>

                                    <CardActions sx={{ justifyContent: "space-between" }}>
                                        <Button
                                            size={t("Add To Cart").length > 10 ? "medium" : "large"}
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                handleClickOpen();
                                            }}
                                            sx={{ textTransform: "capitalize", gap: 1, color: "#d23f57" }}
                                        >
                                            <AddShoppingCartOutlinedIcon fontSize="small" />
                                            {t("Add To Cart")}
                                        </Button>
                                        <Button size="small" sx={{ "&.MuiButton-root": { direction: "ltr" } }}>
                                            <Rating name="read-only" value={product.attributes.productRating} precision={0.1} readOnly />
                                        </Button>
                                    </CardActions>

                                </Card>
                            ))
                        }
                    </AnimatePresence>
                    <Dialog
                        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <IconButton
                            sx={{
                                ":hover": { color: "#d23f57", rotate: "180deg" },
                                position: "absolute",
                                top: 11,
                                right: 11,
                                backgroundColor: "rgba(233, 69, 96, 0.2)",
                                transition: "0.3s"
                            }}
                            size='small'
                            onClick={handleClose}
                        >
                            <Close />
                        </IconButton>

                        {selectedProduct && <ProductDetails selectedProduct={selectedProduct} />}
                    </Dialog>

                </Stack>

            </Container>
        )
    }
    if (isLoading) {
        return <CircularProgressWithLabel value={progress} />;
    }
    if (error) {
        let errorMessage = 'An error occurred';

        if ('error' in error) {
        } else if ('status' in error && typeof error.status === 'number') {
            errorMessage = `Server responded with status code: ${error.status}`;
            if (typeof error.data === 'string') {
                errorMessage += ` - ${error.data}`;
            }
        }

        return (
            <Container sx={{ py: 11, textAlign: "center" }}>
                <Typography variant="h6" component="p">{errorMessage}</Typography>
                <Typography variant="h6" component="p">please try again later</Typography>
            </Container>
        )

    }
}

export default Main