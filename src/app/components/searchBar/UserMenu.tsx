import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Tooltip } from "@mui/material"
import i18n from "i18n";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function UserMenu() {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Stack sx={{ direction: i18n.resolvedLanguage == "ar" ? "ltr" : "rlt" }}>
            <Stack alignItems={"center"}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            <Image src="/images/profile-pic.png" alt="product" width={32} height={32} />
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Stack>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: i18n.resolvedLanguage == "ar" ? undefined : 14,
                            left: i18n.resolvedLanguage == "ar" ? 14 : undefined,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: i18n.resolvedLanguage == "ar" ? 'left' : 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: i18n.resolvedLanguage == "ar" ? 'left' : 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} sx={{ display: "flex", gap: 1, textAlign: "center", flexDirection: i18n.resolvedLanguage == "ar" ? "row-reverse" : "row" }}>
                    <Avatar className="profile-avatar" sx={{ width: 30, height: 30 }}>
                        <Image src="/images/profile-pic.png" alt="product" width={30} height={30} />
                    </Avatar>
                    {t("Mohamed Alaa")}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{ display: "flex", gap: 1, textAlign: "center", flexDirection: i18n.resolvedLanguage == "ar" ? "row-reverse" : "row" }}>
                    <ListItemIcon sx={{ minWidth: '15px !important' }}>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    {t("Add another account")}
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ display: "flex", gap: 1, textAlign: "center", flexDirection: i18n.resolvedLanguage == "ar" ? "row-reverse" : "row" }}>
                    <ListItemIcon sx={{ minWidth: '15px !important' }}>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    {t("Settings")}
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ display: "flex", gap: 1, textAlign: "center", flexDirection: i18n.resolvedLanguage == "ar" ? "row-reverse" : "row" }}>
                    <ListItemIcon sx={{ minWidth: '15px !important' }}>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {t("Logout")}
                </MenuItem>
            </Menu>
        </Stack>
    )
}

export default UserMenu