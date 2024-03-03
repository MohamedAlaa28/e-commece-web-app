import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import { StyledButton, StyledInput, StyledInputRoot } from "./muiCartCounterStyle";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { cartRemoveItem, countChange } from "@/state/cartSlice";

function CartItem() {
    const theme = useTheme();
    const { i18n } = useTranslation();

    const cartProducts = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch<AppDispatch>();

    return (
        <Box role="presentation">
            <List>
                {cartProducts.cartItems?.map((cartItem, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            disableRipple
                            sx={{
                                gap: 1,
                                textAlign: i18n.language == "ar" ? "right" : "left",
                                cursor: "context-menu",
                                "&:hover": {
                                    bgcolor:
                                        index % 2 == 0
                                            // @ts-ignore
                                            ? theme.palette.favColor.main
                                            : theme.palette.mode == "light"
                                                ? "#ffffff"
                                                : "#262626",
                                },
                                bgcolor:
                                    index % 2 == 0
                                        // @ts-ignore
                                        ? theme.palette.favColor.main
                                        : theme.palette.mode == "light"
                                            ? "#ffffff"
                                            : "#262626",
                            }}
                        >
                            <ListItemIcon>
                                <Box sx={{ display: "flex" }}>
                                    <Image
                                        src={cartItem.item.attributes.productImage.data[cartItem.imageIndex].attributes.url}
                                        alt="product"
                                        width={55}
                                        height={65}
                                        style={{
                                            borderRadius: 3,
                                            boxShadow:
                                                "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                                        }}
                                    />
                                </Box>
                            </ListItemIcon>

                            <ListItemText
                                primary={cartItem.item.attributes.productTitle}
                                sx={{
                                    width: 100,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            />

                            <StyledInputRoot theme={theme}>
                                <StyledButton
                                    theme={theme}
                                    className="decrement"
                                    onClick={() => dispatch(countChange({ type: "decrement", index }))}
                                >
                                    <RemoveIcon />
                                </StyledButton>
                                <StyledInput
                                    readOnly
                                    theme={theme}
                                    value={cartItem.count}
                                />
                                <StyledButton
                                    theme={theme}
                                    className="increment"
                                    onClick={() => dispatch(countChange({ type: "increment", index }))}
                                >
                                    <AddIcon />
                                </StyledButton>
                            </StyledInputRoot>

                            <ListItemText primary={`$${(cartItem.item.attributes.productPrice * cartItem.count).toFixed(2)}`}
                                sx={{ width: 50 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default CartItem;
