import { createSlice } from "@reduxjs/toolkit";

const template: any = {
  templates: [{
    name:"John Doe",
    _id:'134141',
    role:'Full stack developer',
    date:'1/23/2004'
  }],
};

const templateSlice = createSlice({
  name: "template",
  initialState: template,
  reducers: {
    setTemplate: (state, action) => {
      state.templates = action.payload;
    },
    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(
        (state: any) => state._id !== action.payload
      );

      return state;
    },
    addTemplate: (state, action) => {
      state.templates = [...state.templates, action.payload];
      return state;
    },
  },
});

export const { setTemplate, deleteTemplate, addTemplate } =
  templateSlice.actions;
export { templateSlice };