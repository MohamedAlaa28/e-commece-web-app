import { Badge, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";


export const Search = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: "22px",
  justifyContent: "space-between",
  // flexGrow: 0.4,
  position: "relative",
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  // width: "266px",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    // width: "330px",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    placeholder: "Search…",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
  ".ar & .MuiInputBase-input": {
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: 0,
  }
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
