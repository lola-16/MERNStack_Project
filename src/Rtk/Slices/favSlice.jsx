import { createSlice } from '@reduxjs/toolkit';

// Load favorite items from local storage
const loadFavoritesFromLocalStorage = () => {
  try {
    const serializedFavorites = localStorage.getItem('favoriteItems');
    return serializedFavorites ? JSON.parse(serializedFavorites) : [];
  } catch (e) {
    console.warn("Could not load favorites from localStorage", e);
    return [];
  }
};

// Save favorite items to local storage
const saveFavoritesToLocalStorage = (favoriteItems) => {
  try {
    const serializedFavorites = JSON.stringify(favoriteItems);
    localStorage.setItem('favoriteItems', serializedFavorites);
  } catch (e) {
    console.warn("Could not save favorites to localStorage", e);
  }
};

// Initial favorites state
const initialState = {
  favoriteItems: loadFavoritesFromLocalStorage(), // Load from local storage
};

// Slice to manage favorites
const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const product = action.payload;
      const existingProduct = state.favoriteItems.find((item) => item.id === product.id);

      if (!existingProduct) {
        state.favoriteItems.push(product);
        saveFavoritesToLocalStorage(state.favoriteItems); // Save to local storage whenever favorites change
        alert("Product added to favorites!");
      }
    },
    removeFavorite: (state, action) => {
      const productId = action.payload;
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== productId);
      saveFavoritesToLocalStorage(state.favoriteItems); // Save to local storage whenever favorites change
    },
    clearFavorites: (state) => {
      state.favoriteItems = [];
      saveFavoritesToLocalStorage([]); // Save empty favorites to local storage
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favSlice.actions;

export default favSlice.reducer;
