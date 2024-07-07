import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

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
    toast.success("Successfully created!");
    return data;
  } catch (e) {
    toast.error("This is an error! Please try again.");
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const { data } = await axios.delete(`contacts/${contactId}`);
    toast.success("Successfully deleted!");
    return data;
  } catch (e) {
    toast.error("This is an error! Please try again.");
    return thunkAPI.rejectWithValue(e.message);
  }
});
