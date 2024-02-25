import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material"
import Image from "next/image";


function ProductDetails() {
    return (
        <Box display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ display: "flex" }}>
                <img src="/images/products/1 (15).jpg" alt="product" width={360} />
            </Box>

            <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, px: 2 }}>
                <Typography variant="h5">
                    WOMEN FASHION
                </Typography>
                <Typography variant="h6" my={0.4} fontSize={"22px"} color={"crimson"} >
                    $12.99
                </Typography>
                <Typography variant="body2">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>

                <Stack direction={"row"} gap={1} my={2} sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>
                    {
                        [1, 2, 3].map((image) => (
                            <Box key={image}>
                                <img height={100} width={90} src="/images/products/1 (15).jpg" alt="product" style={{ borderRadius: 3 }} />
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