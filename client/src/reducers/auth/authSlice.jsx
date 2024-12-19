import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

axios.defaults.withCredentials = true;

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isCheckingAuth: true,
  error: null,
  message: {},
};

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.message = {
          type: "success",
          text:
            action.payload.message ||
            "Account created successfully! Please verify your email.",
        };
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = {
          type: "failed",
          text: action.payload,
        };
      });
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.message = {
          type: "success",
          text: "Email verified successfully!",
        };
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = {
          type: "failed",
          text: action.payload,
        };
      });
    builder
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.message = {
          type: "success",
          text: action.payload.message || "Login successfully!",
        };
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = {
          type: "failed",
          text: action.payload,
        };
      });
    builder
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.message = {
          type: "success",
          text: action.payload.message,
        };
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = {
          type: "failed",
          text: action.payload.message,
        };
      });
  },
});

export const { clearMessage } = authSlice.actions;

export default authSlice.reducer;
