import { useContext, useEffect, useState } from 'react';
import { Box, Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ColorModeContext } from '../../../../public/mui/useMode';
import { useTranslation } from "react-i18next";
import i18n from 'i18n';

const options = ["EN", "AR", "GR"];

const socialIcons = [
    { Icon: TwitterIcon, sx: { fontSize: "16px", color: "#fff" } },
    { Icon: FacebookIcon, sx: { fontSize: "16px", mx: 1, color: "#fff" } },
    { Icon: InstagramIcon, sx: { fontSize: "16px", color: "#fff" } },
];

function Header() {
    const { t } = useTranslation();

    const colorMode = useContext(ColorModeContext);
    if (!colorMode) {
        throw new Error('ColorModeContext not found');
    }

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        // Access localStorage only after component mounts to ensure it's client-side
        const savedLanguage = localStorage.getItem('language');
        const initialIndex = options.findIndex(option => option.toLowerCase() === savedLanguage?.toLowerCase());
        setSelectedIndex(initialIndex >= 0 ? initialIndex : 0);
    }, []);

    const open = Boolean(anchorEl);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        const selectedLanguage = options[index].toLowerCase();
        localStorage.setItem('language', selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
        // console.log(index);
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Box sx={{ bgcolor: "#2b3445", px: "4px", borderBottomRightRadius: "4px", borderBottomLeftRadius: "4px" }}>

            <Container>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography
                        sx={{
                            mr: i18n.language === "ar" ? 0 : 2,
                            ml: i18n.language === "ar" ? 2 : 0,
                            p: "4px 10px",
                            bgcolor: "#D23F57",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        {t('Hot')}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        {t('Free Express Shipping')}
                    </Typography>

                    <Box flexGrow={1} />
                    <div>
                        {theme.palette.mode === 'light' ? (
                            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
                            </IconButton>
                        ) : (
                            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                                <DarkModeOutlined sx={{ fontSize: "16px" }} />
                            </IconButton>
                        )}
                    </div>

                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ p: 0, m: 0 }}
                    >
                        <ListItem
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClickListItem}
                            sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
                        >
                            <ListItemText
                                sx={{
                                    ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                                }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
                        </ListItem>
                    </List>

                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "lock-button",
                            role: "listbox",
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => {
                                    handleMenuItemClick(event, index);
                                    i18n.changeLanguage(option.toLowerCase());
                                }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>

                    {socialIcons.map(({ Icon, sx }, index) => (
                        <Icon key={index} sx={sx} />
                    ))}
                </Stack>
            </Container>

        </Box>

    );
};

export default Header;
