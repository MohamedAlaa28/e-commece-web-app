import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add'; import Image from 'next/image';
import { StyledButton, StyledInput, StyledInputRoot } from './muiCartCounterStyle';
import { Box, useTheme } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function CartItem() {
    const theme = useTheme();
    const { i18n } = useTranslation();

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue((prevValue) => prevValue + 1);
    };

    const handleDecrement = () => {
        setValue((prevValue) => prevValue - 1);
    };

    return (
        <Box
            sx={{
                width: { xs: "100%", md: 375 },
            }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Product1', 'Product2', 'Product3', 'Product4'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton disableRipple sx={{
                            gap: 1,
                            textAlign: i18n.language == "ar" ? "right" : "left",
                            "&:hover": {
                                backgroundColor:
                                    // @ts-ignore
                                    index % 2 == 0 ? theme.palette.favColor.main : theme.palette.mode == 'light' ? theme.palette.bg.main : "#3f4142",
                            },
                            backgroundColor:
                                // @ts-ignore
                                index % 2 == 0 ? theme.palette.favColor.main : theme.palette.mode == 'light' ? theme.palette.bg.main : "#3f4142",
                        }} >
                            <ListItemIcon>
                                <Box sx={{ display: "flex" }}>
                                    <Image src="https://res.cloudinary.com/dgslg1dg2/image/upload/v1709066376/Mens_NASA_Space_Bear_Print_O_Neck_Casual_Loose_Short_Sleeve_T_Shirt_aa8560cbc5.png" alt="product" width={55} height={65}
                                        style={{
                                            borderRadius: 3,
                                            boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                                        }}
                                    />
                                </Box>
                            </ListItemIcon>

                            <ListItemText primary={text} sx={{ width: 100, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} />

                            <StyledInputRoot theme={theme} sx={{ mx: 2 }}>
                                <StyledButton theme={theme} className="decrement" onClick={handleDecrement}>
                                    <RemoveIcon />
                                </StyledButton>
                                <StyledInput readOnly theme={theme} value={value} />
                                <StyledButton theme={theme} className="increment" onClick={handleIncrement}>
                                    <AddIcon />
                                </StyledButton>
                            </StyledInputRoot>

                            <ListItemText primary={"$20"} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default CartItem