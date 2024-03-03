import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import Image from "next/image";
import { Product } from "../../types";
import { useState } from "react";
import { AppDispatch, RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartToggle, countChange } from "@/state/cartSlice";

interface Props {
    selectedProduct: Product;
    handleClose: () => void;
}
function ProductDetails({ selectedProduct, handleClose }: Props) {
    const theme = useTheme();

    const [selectedImage, setSelectedImage] = useState(0);

    const dispatch = useDispatch<AppDispatch>();

    const cartProducts = useSelector((state: RootState) => state.cart);

    return (
        <Box display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            bgcolor={
                // @ts-ignore
                theme.palette.bg.main}>
            <Box sx={{ display: "flex" }}>
                <Image src={selectedProduct.attributes.productImage.data[selectedImage].attributes.url} alt="product" width={325} height={400}
                    style={{
                        borderRadius: 3,
                        boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                    }}
                />
            </Box>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, p: 2 }}>
                <Typography variant="h5">
                    {selectedProduct.attributes.productTitle}
                </Typography>
                <Typography variant="h6" my={0.4} fontSize={"22px"} color={"crimson"} >
                    ${selectedProduct.attributes.productPrice}
                </Typography>
                <Typography variant="body1">
                    {selectedProduct.attributes.productDescription}
                </Typography>

                <Stack direction={"row"} gap={1} my={2} sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>
                    <ToggleButtonGroup
                        color="error"
                        value={selectedImage}
                        exclusive
                        sx={{
                            '.MuiToggleButton-root.Mui-selected': {
                                // @ts-ignore
                                // color: `${theme.palette.bg.main} !important`,
                                border: "1px solid #D23F57 !important",
                                borderRadius: "3px !important",
                                opacity: 1,
                            },
                        }}
                    >
                        {
                            selectedProduct.attributes.productImage.data.map((image, index) => (
                                <ToggleButton
                                    key={index}
                                    value={index}
                                    sx={{
                                        mx: 1,
                                        p: "0",
                                        opacity: "0.5",
                                    }}

                                >
                                    <Image src={image.attributes.url} alt="product" width={90} height={100}
                                        style={{
                                            borderRadius: 3,
                                            boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                                        }}
                                        onClick={() => setSelectedImage(index)}
                                    />
                                </ToggleButton>
                            ))
                        }
                    </ToggleButtonGroup>
                </Stack>

                <Button
                    sx={{
                        mb: { xs: 1, sm: 0 },
                        textTransform: "capitalize",
                        backgroundColor: "#D23F57",
                        "&:hover": { backgroundColor: "#9D4352" },
                    }}
                    variant="contained"
                    onClick={() => {
                        dispatch(addToCart({ item: selectedProduct, imageIndex: selectedImage }));
                        handleClose();
                        dispatch(cartToggle(true));
                    }}
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>

            </Box>
        </Box >
    )
}

export default ProductDetails
