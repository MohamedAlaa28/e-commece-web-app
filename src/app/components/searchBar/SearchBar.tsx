import { Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { ExpandMore, StoreSharp } from "@mui/icons-material";
import { StyledBadge, StyledInputBase, SearchIconWrapper, Search } from "./muiSearchBarStyle";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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

  const options = [t("All Categories"), t("CAR"), t("Clothes"), t("Electronics")];

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      {desktop &&
        <Stack alignItems={"center"} direction={"row"} gap={1}>
          <StoreSharp />
          <Typography variant="body1">Mercado</Typography>
        </Stack>
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
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
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
                  width: 93,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
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
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                  flexDirection: i18n.language == "ar" ? "row-reverse" : "row",
                  textAlign: i18n.language == "ar" ? " right" : "left"
                }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  )
}

export default SearchBar