import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://667867ac0bd45250561e907a.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("contacts");
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, number }, thunkAPI) => {
  try {
    const { data } = await axios.post(`contacts`, { name, number });
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`contacts/${id}`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
