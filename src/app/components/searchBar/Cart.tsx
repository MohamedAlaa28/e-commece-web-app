import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { Fragment, useEffect, useState } from 'react';
import { Button, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { StyledBadge } from './muiSearchBarStyle';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import { StyledButton, StyledInput, StyledInputRoot } from './muiNumberInputStyle';
import { AddShoppingCartOutlined, Close } from '@mui/icons-material';

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

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: 375,
            }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton disableRipple sx={{ gap: 1, textAlign: "center" }} >

                            <ListItemIcon>
                                <Box sx={{ display: "flex" }}>
                                    <Image src="/images/1.jpg" alt="product" width={60} height={60}
                                        style={{
                                            borderRadius: 3,
                                            boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                                        }}
                                    />
                                </Box>
                            </ListItemIcon>

                            <ListItemText primary={text} sx={{ width: "15%", textAlign: "left" }} />

                            <BaseNumberInput
                                slots={{
                                    root: StyledInputRoot,
                                    input: StyledInput,
                                    incrementButton: StyledButton,
                                    decrementButton: StyledButton,
                                }}
                                slotProps={{
                                    incrementButton: {
                                        children: <AddIcon fontSize="small" />,
                                        className: 'increment',
                                    },
                                    decrementButton: {
                                        children: <RemoveIcon fontSize="small" />,
                                    },
                                }}
                            />
                            <ListItemText primary={"$20"} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const [anchor, setAnchor] = useState<Anchor>('right');

    useEffect(() => {
        i18n.language == "ar" ? setAnchor('left') : setAnchor('right');
    }, [i18n.language])

    return (
        <Fragment >
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
                    },
                }}
            >
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} mt={3.25} mx={2}>
                    <IconButton
                        sx={{
                            ":hover": { color: "#d23f57" },
                            backgroundColor: "rgba(233, 69, 96, 0.2)",
                            transition: "0.3s",
                            borderRadius: "3px",
                        }}
                        size='small'
                        onClick={toggleDrawer(anchor, false)}
                    >
                        <DeleteForeverIcon />Clear
                    </IconButton>


                    <Typography variant='h5'>Cart</Typography>

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

                {list(anchor)}

                <Divider sx={{ my: 3.25 }} />

                <Stack flexDirection={"row"} alignItems={"center"} marginInline={"auto"} gap={1}>
                    <Typography variant='h5'>Subtotal :</Typography>
                    <Typography variant='h5'>$90</Typography>
                </Stack>

                <Button
                    sx={{
                        textTransform: "capitalize",
                        backgroundColor: "#D23F57", "&:hover": { backgroundColor: "#9D4352" },
                        width: "40%",
                        marginInline: "auto",
                        my: 2.5,
                    }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Check out
                </Button>
            </Drawer>

        </Fragment>
    );
}

export default Cart