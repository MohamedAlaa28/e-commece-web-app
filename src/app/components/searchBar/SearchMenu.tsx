import React, { useState } from 'react';
import { StyledInputBase } from './muiSearchBarStyle';
import { ListItem, ListItemText, Paper, Grow } from '@mui/material';
import { useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { searchFor } from 'state/productsSlice';
import { AppState } from 'app/types';
import { AppDispatch } from 'state/store';

export const SearchMenu = () => {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const searchedProducts = useSelector((state: AppState) => state.products.searchedProducts);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    dispatch(searchFor(value));
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    // Delay hiding the menu to allow time for click event processing
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const showResults = searchedProducts.length > 0 && input.length > 0 && isFocused;

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }} className="search-bar-container">
      <StyledInputBase
        placeholder="Type to search..."
        inputProps={{ "aria-label": "search" }}
        value={input}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Grow in={showResults}>
        <Paper sx={{
          width: '100%',
          position: 'absolute',
          overflow: 'auto',
          top: 50,
          borderRadius: 1,
          zIndex: 3,
          boxShadow: "0 0 1px rgba(0, 0, 0, 0.25)",
          display: showResults ? 'block' : 'none',
        }}>
          {searchedProducts.map((result, index) => (
            <ListItem key={index}
              onClick={() => {
                setInput("");
                setIsFocused(false);
              }}
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                ":hover": {
                  // @ts-ignore
                  background: theme.palette.favColor.main
                }
              }}>
              <ListItemText primary={result.attributes.productTitle} />
            </ListItem>
          ))}
        </Paper>
      </Grow>
    </div>
  );
};
