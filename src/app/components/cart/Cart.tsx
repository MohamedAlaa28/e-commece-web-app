import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from 'react';
import { Button, Container, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { StyledBadge } from '../searchBar/muiSearchBarStyle';
import { useTranslation } from "react-i18next";
import { Close } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CartItem from './CartItem';
import { AppDispatch, RootState } from '@/state/store';
import { useDispatch, useSelector } from 'react-redux';
import { Anchor } from '@/app/types';
import { cartToggle } from '@/state/cartSlice';

function Cart() {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch<AppDispatch>();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        dispatch(cartToggle(open))
    };

    const [anchor, setAnchor] = useState<Anchor>('right');

    useEffect(() => {
        i18n.language == "ar" ? setAnchor('left') : setAnchor('right');
    }, [i18n.language])

    const [isHovered, setIsHovered] = useState(false);

    const cartProducts = useSelector((state: RootState) => state.cart);

    const calcPrice = () => {
        let totalPrice = 0;
        let index = 0;

        cartProducts.cartItems.forEach(item => {
            totalPrice += (item.item.attributes.productPrice * item.count);
            index++;
        });

        return (totalPrice).toFixed(2);
    }

    return (
        <Stack>
            <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
                <StyledBadge badgeContent={cartProducts.cartItems.length} color="primary" sx={{ padding: 0, ".MuiBadge-badge": { backgroundColor: "#d23f57" } }}>
                    <ShoppingCartIcon sx={{ padding: 0 }} />
                </StyledBadge>
            </IconButton>

            <Drawer
                anchor={anchor}
                open={cartProducts.cartState}
                onClose={() => dispatch(cartToggle(false))}
                sx={{
                    "& .MuiPaper-root": {
                        // @ts-ignore
                        bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
                        borderBottomLeftRadius: i18n.language === "ar" ? 0 : 8,
                        borderTopLeftRadius: i18n.language === "ar" ? 0 : 8,
                        borderBottomRightRadius: i18n.language === "ar" ? 8 : 0,
                        borderTopRightRadius: i18n.language === "ar" ? 8 : 0,
                        direction: i18n.language == "ar" ? "rtl" : "ltr",
                        width: { xs: "100%", md: 375 },
                    },
                }}
            >
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} mt={3.25} mx={2}>
                    <Box />

                    <Typography variant='h5'>{t("Cart")}</Typography>

                    <IconButton
                        sx={{
                            ":hover": { color: "#d23f57", rotate: "180deg" },
                            backgroundColor: "rgba(233, 69, 96, 0.2)",
                            transition: "0.3s"
                        }}
                        size='small'
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Close />
                    </IconButton>
                </Stack>

                <Divider sx={{ my: 3.25 }} />

                <CartItem />

                <Divider sx={{ my: 3.25 }} />

                <Button
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        textTransform: "capitalize",
                        padding: theme.spacing(3),
                        // @ts-ignore
                        color: theme.palette.bg.main,
                        backgroundColor: "#D23F57", "&:hover": { backgroundColor: "#9D4352" },
                        width: "60%",
                        marginInline: 'auto',
                        position: "relative",
                    }}
                    variant="contained"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    disabled={cartProducts.cartItems.length == 0}
                >
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                        sx={{
                            position: "absolute",
                            opacity: isHovered ? 0 : 1,
                            transition: "opacity 0.3s",
                        }}
                    >
                        <Typography
                            variant="h6"
                        >
                            {t("Subtotal")} :
                        </Typography>
                        <Typography
                            variant="h6"
                        >
                            ${calcPrice()}
                        </Typography>
                    </Stack>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                        sx={{
                            position: "absolute",
                            opacity: isHovered ? 1 : 0,
                            transition: "opacity 0.3s",
                        }}
                    >
                        <ShoppingCartCheckoutIcon />
                        <Typography
                            variant="h6"
                        >
                            {t("Check out")}
                        </Typography>
                    </Stack>
                </Button>

            </Drawer>

        </Stack>
    );
}

export default Cart