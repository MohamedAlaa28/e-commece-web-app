"use client"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { Close } from "@mui/icons-material";
import "./buttonsStyle.css";
import { useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ProductDetails from "./ProductDetails";
import { fetchAllProducts } from "../../../state/productsSlice";
import CircularProgressWithLabel from "./Loading";
import { Product } from "../../types";
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "state/store";


function Main() {
    const theme = useTheme();
    const { t } = useTranslation();

    const ProductsState = useSelector((state: RootState) => state.products);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);


    ///product details popup
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    ///toggle buttons
    const [selectedCategory, setSelectedCategory] = useState('allProducts');

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newCategory: string) => {
        if (newCategory !== null) {
            setSelectedCategory(newCategory);
        }
    };

    const displayedProducts = useSelector((state: RootState) => {
        if (selectedCategory === 'allProducts') {
            return state.products.allProducts;
        } else if (selectedCategory === 'menProducts') {
            return state.products.menProducts;
        } else if (selectedCategory === 'womenProducts') {
            return state.products.womenProducts;
        }
    });

    ///add to cart product
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    if (ProductsState.status === 'loading') {
        return <CircularProgressWithLabel />;
    } else if (ProductsState.status === 'failed') {
        return <div>Error loading products</div>;
    } else if (ProductsState.status === 'succeeded') {
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
                        value={selectedCategory}
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
                            value="allProducts"
                            aria-label="left aligned"
                        >
                            {t("All Products")}
                        </ToggleButton>

                        <ToggleButton
                            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                            className="toggle-Button"
                            value="menProducts"
                            aria-label="centered"

                        >
                            {t("MEN category")}
                        </ToggleButton>

                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className="toggle-Button"
                            value="womenProducts"
                            aria-label="right aligned"
                        >
                            {t("Women category")}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                    <AnimatePresence>

                        {
                            displayedProducts?.map((product: Product) => (
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

                        {selectedProduct && <ProductDetails selectedProduct={selectedProduct} handleClose={handleClose} />}
                    </Dialog>

                </Stack>

            </Container>
        )
    }
}

export default Main