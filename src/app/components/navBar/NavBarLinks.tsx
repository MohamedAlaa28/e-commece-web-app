import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { HomeItems, pagesItems, userAccountItems, vendorAccountItems } from "./NavBarDataLinks";
import { useTranslation } from "react-i18next";

const navItems = [
    { title: "Home", data: HomeItems },
    { title: "Pages", data: pagesItems },
    { title: "User Account", data: userAccountItems },
    { title: "Vendor Account", data: vendorAccountItems },
];

function NavBarLinks() {
    const { t, i18n } = useTranslation();

    return (
        <Stack direction={"row"} gap={4} alignItems={"center"}>
            {navItems.map((link) => (
                <Box
                    key={link.title}
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        ":hover .hover-menu": { display: "block" },
                    }}
                >
                    <Typography variant="body1">{t(link.title)}</Typography>
                    <ExpandMore sx={{ fontSize: "16px" }} />
                    <Box
                        className="hover-menu"
                        sx={{
                            zIndex: "2",
                            position: "absolute",
                            top: "100%",
                            minWidth: "170px",
                            transform: "TranslateX(-50%)",
                            left: "50%",
                            display: "none",
                        }}
                    >
                        <Paper sx={{ mt: 2 }}>
                            <nav aria-label={`${link.title} submenu`}>
                                <List>
                                    {link.data.map((item) => (
                                        <ListItem
                                            key={item.id}
                                            sx={{
                                                ":hover .sub-link": { display: item.subLinks.length > 0 ? "block" : "none" },
                                                position: "relative",
                                            }}
                                            disablePadding
                                        >
                                            <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                                <ListItemText sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300, textAlign: i18n.language === "ar" ? "right" : "left" } }} primary={t(item.title)} />
                                                {item.subLinks.length > 0 && <KeyboardArrowRightOutlined fontSize="small" sx={{ rotate: i18n.language === "ar" ? "180deg" : "0deg" }} />}
                                            </ListItemButton>
                                            {item.subLinks.length > 0 && (
                                                <Box className="sub-link" sx={{ display: "none", position: "absolute", top: 0, right: i18n.language === "ar" ? "100%" : undefined, left: i18n.language !== "ar" ? "100%" : undefined }}>
                                                    <Paper sx={{ ml: i18n.language !== "ar" ? 1 : 0, mr: i18n.language !== "ar" ? 0 : 1, minWidth: (item.title === "Shop" && i18n.language !== "ar") ? 166 : 150 }}>
                                                        <List>
                                                            {item.subLinks.map((subLink) => (
                                                                <ListItem key={subLink.id} disablePadding>
                                                                    <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                                                        <ListItemText sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300, textAlign: i18n.language === "ar" ? "right" : "left" } }} primary={t(subLink.title)} />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Paper>
                                                </Box>
                                            )}
                                        </ListItem>
                                    ))}
                                </List>
                            </nav>
                        </Paper>
                    </Box>
                </Box>
            ))
            }
        </Stack >
    );
}

export default NavBarLinks;
