import { ExpandMore, Close } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HomeItems, pagesItems, userAccountItems, vendorAccountItems } from "./NavBarDataLinks";
import MenuIcon from "@mui/icons-material/Menu";

const drawerItems = [
    { title: "Vendor Account", data: vendorAccountItems },
    { title: "User Account", data: userAccountItems },
    { title: "Pages", data: pagesItems },
    { title: "Home", data: HomeItems },
];

function NavBarMenu() {
    const { t, i18n } = useTranslation();
    const [state, setState] = useState({ top: false });

    const toggleDrawer = (anchor: 'top' | 'left' | 'bottom' | 'right', open: boolean) =>
        (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            setState({ ...state, [anchor]: open });
        };

    return (
        <Box>
            <IconButton onClick={toggleDrawer("top", true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor={"top"} open={state["top"]}
                onClose={toggleDrawer("top", false)}
                sx={{
                    ".MuiPaper-root": {
                        minHeight: "100%",
                    }
                }}
            >
                <Box sx={{ width: "100%", mx: "auto", mt: 6, position: "relative", pt: 10 }}>
                    <IconButton
                        sx={{
                            ":hover": { color: "#d23f57", rotate: "180deg" },
                            backgroundColor: "rgba(233, 69, 96, 0.2)",
                            transition: "0.3s",
                            position: "absolute",
                            top: 0,
                            right: 10,
                        }}
                        size='small'
                        onClick={toggleDrawer("top", false)}
                    >
                        <Close />
                    </IconButton>
                    {drawerItems.map((drawerItem) => (
                        <Accordion key={drawerItem.title} elevation={0} sx={{ bgcolor: "initial" }}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography sx={{
                                    flexGrow: 1, display: "flex", alignItems: "center",
                                    flexDirection: i18n.language === "ar" ? "right" : "left",
                                    textAlign: i18n.language === "ar" ? "right" : "left"
                                }}>
                                    {t(drawerItem.title)}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <List>
                                    {drawerItem.data.map((item) => (
                                        item.subLinks.length > 0 ? (
                                            <Accordion key={item.id} elevation={0} sx={{ bgcolor: "initial" }}>
                                                <AccordionSummary expandIcon={<ExpandMore />}>
                                                    <ListItemText primary={t(item.title)} sx={{
                                                        flexGrow: 1, display: "flex", alignItems: "center",
                                                        flexDirection: i18n.language === "ar" ? "right" : "left",
                                                        textAlign: i18n.language === "ar" ? "right" : "left"
                                                    }} />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <List>
                                                        {item.subLinks.map((subLink) => (
                                                            <ListItem key={subLink.id} disablePadding
                                                                sx={{
                                                                    ":hover .sub-link": { display: item.subLinks.length > 0 ? "block" : "none" },
                                                                    position: "relative",
                                                                }}>
                                                                <ListItemButton>
                                                                    <ListItemText primary={t(subLink.title)} sx={{
                                                                        flexGrow: 1, display: "flex", alignItems: "center",
                                                                        flexDirection: i18n.language === "ar" ? "right" : "left",
                                                                        textAlign: i18n.language === "ar" ? "right" : "left"
                                                                    }} />
                                                                </ListItemButton>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </AccordionDetails>
                                            </Accordion>
                                        ) : (
                                            <ListItem key={item.id} disablePadding
                                                sx={{
                                                    ":hover .sub-link": { display: item.subLinks.length > 0 ? "block" : "none" },
                                                    position: "relative",
                                                }}>
                                                <ListItemButton>
                                                    <ListItemText primary={t(item.title)} sx={{ flexGrow: 1, textAlign: i18n.language === "ar" ? "right" : "left" }} />
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Drawer>
        </Box >
    );
}

export default NavBarMenu;
