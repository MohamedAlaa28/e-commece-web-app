import { Avatar, Box, Button, Container, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { ExpandMore, Logout, PersonAdd, Settings, StoreSharp } from "@mui/icons-material";
import { StyledInputBase, SearchIconWrapper, Search } from "./muiSearchBarStyle";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Cart from "../cart/Cart";
import UserMenu from "./UserMenu";

function SearchBar() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const desktop = useMediaQuery("(min-width:600px)");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["All Categories", "CAR", "Clothes", "Electronics"];

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between", gap: 1 }}>
      {desktop &&
        <Button sx={{
          display: "flex", alignItems: "center", gap: 1,
          color: theme.palette.text.primary, textTransform: "capitalize", padding: 0,
          "&:hover": {
            bgcolor: theme.palette.mode == "light"
              ? "#ffffff"
              : "#262626"
          }
        }}>
          <StoreSharp fontSize="large" sx={{ width: 32, height: 32 }} />
          <Typography variant="h6" fontWeight={500}>Mercado</Typography>
        </Button>

      }

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.header.main,
              borderBottomRightRadius: i18n.language == "ar" ? 0 : 22,
              borderTopRightRadius: i18n.language == "ar" ? 0 : 22,
              borderBottomLeftRadius: i18n.language == "ar" ? 22 : 0,
              borderTopLeftRadius: i18n.language == "ar" ? 22 : 0,
              p: "0",
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                // className="border"
                sx={{
                  minWidth: 93,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={t(options[selectedIndex])}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
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
            sx={{ ml: i18n.language === "ar" ? 1.25 : undefined }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px", direction: i18n.language === "ar" ? "rtl" : "ltr", minWidth: 130 }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {t(option)}
              </MenuItem>
            ))}
          </Menu>

        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Cart />

        {/* {desktop &&
          <IconButton>
            <Person2OutlinedIcon />
          </IconButton>
        } */}

        <UserMenu />
      </Stack>


    </Container>
  )
}

export default SearchBar