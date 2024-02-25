import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import { HomeItems, pagesItems, userAccountItems, vendorAccountItems } from "./NavBarDataLinks";


const Items = (item: string) => {
    switch (item) {
        case "Vendor Account":
            return vendorAccountItems;
        case "User Account":
            return userAccountItems;

        case "Pages":
            return pagesItems;

        case "Home":
            return HomeItems;
        default:
            return vendorAccountItems;
    }
}

type prop = {
    title: string;
}
function NavBarLinks({ title }: prop) {

    const items = Items(title);

    return (
        <Box sx={{ position: "relative", display: "flex", alignItems: "center", ":hover .hover-menu": { display: "block" } }}>
            <Typography variant="body1">
                {title}
            </Typography>

            <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

            <Box className="hover-menu" sx={{ zIndex: "2", position: "absolute", top: "100%", minWidth: "170px", transform: "TranslateX(-50%)", left: "50%", display: "none" }}>
                <Paper sx={{ mt: 2 }}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            {items.map((item) => (
                                <ListItem
                                    key={item.id}
                                    sx={{
                                        ":hover .sub-link": { display: item.subLinks.length > 0 ? "block" : "none" },
                                        position: "relative",
                                    }}
                                    disablePadding
                                >
                                    <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                        <ListItemText
                                            sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                            primary={item.title}
                                        />
                                        <Box flexGrow={1} />
                                        {item.subLinks.length > 0 && <KeyboardArrowRightOutlined fontSize="small" />}
                                    </ListItemButton>
                                    {item.subLinks.length > 0 && (
                                        <Box
                                            className="sub-link"
                                            sx={{ display: "none", position: "absolute", top: 0, left: "100%" }}
                                        >
                                            <Paper sx={{ ml: 1, minWidth: item.title === "Shop" ? 166 : 150 }}>

                                                <nav aria-label={`${item.title} sub menu`}>
                                                    <List>
                                                        {item.subLinks.map((subLink) => (
                                                            <ListItem key={subLink.id} disablePadding>
                                                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                                                    <ListItemText
                                                                        sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                                                        primary={subLink.title}
                                                                    />
                                                                    <Box flexGrow={1} />
                                                                </ListItemButton>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </nav>
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
    )
}

export default NavBarLinks