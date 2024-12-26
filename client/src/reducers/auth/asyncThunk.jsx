import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

axios.defaults.withCredentials = true;

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
      });
      const data = response.data.user;
      return { user: data.user, message: data.message };
    } catch (error) {
      const message = error.response?.data?.message || "Failed to sign up.";
      return rejectWithValue(message);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (otpCode, rejectWithValue) => {
    try {
      const response = await axios.post(`${API_URL}/verify-email`, {
        verificationToken: otpCode,
      });
      const data = response.data.user;
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Email verification failed!";
      return rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      const data = response.data.user;
      return { user: data.user, message: data.message };
    } catch (error) {
      const message = error.response?.data?.message || "Login failed!";
      return rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/logout`);
      const data = response.data;
      return data;
    } catch (error) {
      const message = "Error logging out!";
      return rejectWithValue(message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Password reset link failed to send!";
      rejectWithValue(message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ password, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Password reset link failed to send!";
      rejectWithValue(message);
    }
  }
);
