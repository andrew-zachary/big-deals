import { createSlice } from "@reduxjs/toolkit";

const browsing = {
  items: [],
  canPaginate: true,
  currentPage: 1
};

const searching = {
  items: [],
  canPaginate: true,
  currentPage: 1,
  searchingStr: "",
  newSearch: true
};

const productSelected = {};

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    browsing,
    searching,
    productSelected
  },
  reducers: {
    singleProductSelected:(state, action)=>{
      return {
        ...state,
        productSelected:{
          ...action.payload.itemData
        }
      }
    },
    newSearchStarted:(state, action)=>{
      return {
        ...state,
        searching:{
          ...searching,
          searchingStr:action.payload.searchingStr
        }
      }
    },
    itemsReceivedAfterSearch: (state, action) => {
      return {
        ...state,
        searching: {
          items: state.searching.items.concat(action.payload.data),
          canPaginate: action.payload.data.length > 0?true:false,
          currentPage: state.searching.currentPage +1,
          searchingStr: state.searching.searchingStr,
          newSearch:false
        }
      };
    },
    itemsReceivedAfterBrowse: (state, action) => {
      return {
        ...state,
        browsing:{
          items: state.browsing.items.concat(action.payload.data),
          canPaginate: action.payload.data.length > 0?true:false,
          currentPage: state.browsing.currentPage +1
        }
      };
    },
  },
});

export const { singleProductSelected, newSearchStarted, itemsReceivedAfterSearch, itemsReceivedAfterBrowse } = productsSlice.actions;

export default productsSlice.reducer;