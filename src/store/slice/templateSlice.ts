import { createSlice } from "@reduxjs/toolkit";

const template: any = {
  templates: [],
  searchData: [],
  isSearching: false,
};

const templateSlice = createSlice({
  name: "template",
  initialState: template,
  reducers: {
    setTemplate: (state, action) => {
      state.templates = action.payload;
    },
    setSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    getSearchData: (state, action) => {
      state.searchData = state.templates.filter((ele: any) =>
        ele.name.match(new RegExp(`${action.payload}`, "gi")) || ele._id == action.payload
      );
      return state;
    },
    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(
        (state: any) => state._id !== action.payload
      );
      return state;
    },
    addTemplate: (state, action) => {
      state.templates = [action.payload, ...state.templates];
      return state;
    },
    addMoreTemplate: (state, action) => {
      state.templates = [...state.templates, ...action.payload];
      return state;
    }
  },
});

export const { setTemplate, setSearching, getSearchData, deleteTemplate, addTemplate, addMoreTemplate } =
  templateSlice.actions;
export { templateSlice };