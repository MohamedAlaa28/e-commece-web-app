import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from 'react';
import { Button, Container, Divider, IconButton, InputBase, Stack, Typography, useTheme } from '@mui/material';
import { StyledBadge } from '../searchBar/muiSearchBarStyle';
import { useTranslation } from "react-i18next";
import { Close, Delete } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CartItem from './CartItem';

type Anchor = 'left' | 'right';

function Cart() {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const [state, setState] = useState({
        left: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const [anchor, setAnchor] = useState<Anchor>('right');

    useEffect(() => {
        i18n.language == "ar" ? setAnchor('left') : setAnchor('right');
    }, [i18n.language])
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Container>
            <IconButton aria-label="cart" onClick={toggleDrawer(anchor, true)}>
                <StyledBadge badgeContent={4} color="primary" sx={{ ".MuiBadge-badge": { backgroundColor: "#d23f57" } }}>
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>

            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                sx={{
                    "& .MuiPaper-root": {
                        // @ts-ignore
                        backgroundColor: theme.palette.bg.main,
                        borderBottomLeftRadius: i18n.language === "ar" ? 0 : 8,
                        borderTopLeftRadius: i18n.language === "ar" ? 0 : 8,
                        borderBottomRightRadius: i18n.language === "ar" ? 8 : 0,
                        borderTopRightRadius: i18n.language === "ar" ? 8 : 0,
                        direction: i18n.language == "ar" ? "rtl" : "ltr"
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
                        onClick={toggleDrawer(anchor, false)}
                    >
                        <Close />
                    </IconButton>
                </Stack>

                <Divider sx={{ my: 3.25 }} />

                <CartItem />

                <Button
                    sx={{
                        backgroundColor: "rgba(233, 69, 96, 0.75)",
                        "&:hover": { backgroundColor: "#9D4352" },
                        minWidth: "30px",
                        width: "30px",
                        height: "30px",
                        padding: 0,
                        textAlign: "center",
                        marginRight: i18n.language == "ar" ? "auto" : 4,
                        marginLeft: i18n.language == "ar" ? 4 : "auto",
                        "& .MuiButton-startIcon": {
                            margin: 0,
                        },
                    }}
                    variant="contained"
                    startIcon={<Delete fontSize="small" sx={{}} />}
                />

                <Divider sx={{ my: 3.25 }} />

                {/* <Divider sx={{width: "80%", marginInline: 'auto'}}/> */}
                <Button
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        border: theme.palette.mode === 'dark' ? "1px solid #434D5B" : "1px solid #DAE2ED",
                        textTransform: "capitalize",
                        padding: theme.spacing(3),
                        color: "#d23f57",
                        backgroundColor: "initial",
                        "&:hover": { backgroundColor: "initial" },
                        width: "60%",
                        marginInline: 'auto',
                        position: "relative"
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                        sx={{
                            // width: "fit-content",
                            position: "absolute",
                            opacity: isHovered ? 0 : 1,
                            transition: "opacity 0.3s",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: theme.palette.text.primary,
                            }}
                        >
                            {t("Subtotal")} :
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#d23f57",
                            }}
                        >
                            $90
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
                        <ShoppingCartCheckoutIcon sx={{ color: "#d23f57" }} />
                        <Typography
                            variant="h6"
                            sx={{
                                color: theme.palette.text.primary,
                            }}
                        >
                            {t("Check out")}
                        </Typography>
                    </Stack>
                </Button>
                {/* <Divider sx={{width: "80%", marginInline: 'auto'}}/> */}

            </Drawer>

        </Container>
    );
}

export default Cart