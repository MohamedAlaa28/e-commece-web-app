import { Box, Button, Container, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import HeaderLinks from "../navBar/NavBarLinks";
import { useTranslation } from "react-i18next";
import { menuItems } from "./NavBarDataLinks";
import NavBarMenu from "./NavBarMenu";
import i18n from "i18n";

function NavBar() {
  const theme = useTheme();
  const { t } = useTranslation();

  const desktop = useMediaQuery('(min-width:1200px)');
  const mobile = useMediaQuery('(max-width:1200px)');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container sx={{
      display: "flex", flexDirection: "row",
      alignItems: "center", justifyContent: "space-between"
    }}>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: theme.palette.header.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            {t("Categories")}
          </Typography>
          <Box flexGrow={1} />

          <KeyboardArrowRightOutlinedIcon sx={{ rotate: i18n.resolvedLanguage == "ar" ? "180deg" : "0deg" }} />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.header.main,
            },
          }}
        >
          {menuItems.map(({ text, Icon }, index) => (
            <MenuItem key={index} onClick={handleClose} sx={{ direction: i18n.resolvedLanguage === "ar" ? "rtl" : "ltr", textAlign: i18n.resolvedLanguage === "ar" ? "right" : "left" }}>
              <ListItemIcon>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{t(text)}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {desktop &&
        <Stack gap={4} alignItems={"center"}>
          <HeaderLinks />
        </Stack>
      }

      {mobile &&
        <NavBarMenu />
      }

    </Container>
  )
}

export default NavBar
