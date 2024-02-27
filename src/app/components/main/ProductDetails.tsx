import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material"
import Image from "next/image";

const subProduct = [
    { link: "/images/1.jpg" },
    { link: "/images/2.jpg" },
    { link: "/images/100.jpg" },
];


function ProductDetails() {
    return (
        <Box display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ display: "flex" }}>
                <Image src="/images/100.jpg" alt="product" width={300} height={400} style={{
                    borderRadius: 3,
                    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
                }} />
            </Box>

            <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, p: 2 }}>
                <Typography variant="h5">
                    WOMEN FASHION
                </Typography>
                <Typography variant="h6" my={0.4} fontSize={"22px"} color={"crimson"} >
                    $12.99
                </Typography>
                <Typography variant="body1">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>

                <Stack direction={"row"} gap={1} my={2} sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>
                    {
                        subProduct.map((image) => (
                            <Box key={image.link}>
                                <Image src={image.link} alt="product" width={90} height={100} style={{
                                    borderRadius: 3,
                                    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
                                }}
                                />
                            </Box>
                        ))
                    }
                </Stack>

                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box >
    )
}

export default ProductDetails