import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

// Load cart items from local storage if they exist
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cartItems');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
    return [];
  }
};

// Save cart items to local storage
const saveCartToLocalStorage = (cartItems) => {
  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem('cartItems', serializedCart);
  } catch (e) {
    console.warn("Could not save cart to localStorage", e);
  }
};

// Initial cart state
const initialState = {
  cartItems: loadCartFromLocalStorage(), // Load from local storage
  total: 0,
};

// Utility function to calculate total price
const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        // Use SweetAlert instead of alert
        Swal.fire({
          icon: 'success',
          title: 'Product added!',
          text: `${product.name} has been added to your cart.`,
          timer: 1500,
          showConfirmButton: false,
        });
        state.cartItems.push({ ...product, quantity: 1 });
      }

      state.total = calculateTotal(state.cartItems);
      saveCartToLocalStorage(state.cartItems); // Save to local storage whenever cart changes
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      state.total = calculateTotal(state.cartItems);
      saveCartToLocalStorage(state.cartItems); // Save to local storage whenever cart changes
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find((item) => item.id === productId);
      if (product) {
        product.quantity += 1;
        state.total = calculateTotal(state.cartItems);
        saveCartToLocalStorage(state.cartItems); // Save to local storage whenever cart changes
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total = calculateTotal(state.cartItems);
        saveCartToLocalStorage(state.cartItems); // Save to local storage whenever cart changes
      } else if (product && product.quantity === 1) {
        // If quantity is 1 and decrease is pressed, remove the product from the cart
        state.cartItems = state.cartItems.filter((item) => item.id !== productId);
        state.total = calculateTotal(state.cartItems);
        saveCartToLocalStorage(state.cartItems); // Save to local storage whenever cart changes
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      saveCartToLocalStorage([]); // Save empty cart to local storage
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
