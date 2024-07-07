import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"];
};

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post(`users/signup`, userData);
    setAuthHeader(data.token);
    toast.success("Registration successful!");
    return data;
  } catch (e) {
    toast.error(`${e.message}. Please try again.`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post(`users/login`, userData);
    toast.success("Login successful!");
    setAuthHeader(data.token);
    return data;
  } catch (e) {
    toast.error(`${e.message}. Please try again.`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(`users/logout`);
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get("users/current");
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
