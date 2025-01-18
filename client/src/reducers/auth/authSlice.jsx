import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPassword,
  logIn,
  logOut,
  signUp,
  verifyEmail,
  resetPassword,
} from "./asyncThunk";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isCheckingAuth: true,
  error: null,
  message: {},
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.message = {
    type: "failed",
    text: action.payload,
  };
};

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
      .addCase(signUp.pending, handlePending)
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
        handleRejected(state, action);
      });
    builder
      .addCase(verifyEmail.pending, handlePending)
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
        handleRejected(state, action);
      });
    builder
      .addCase(logIn.pending, handlePending)
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
      .addCase(logOut.pending, handlePending)
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
    builder
      .addCase(forgotPassword.pending, handlePending)
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = {
          type: "success",
          text: action.payload.message,
        };
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = {
          type: "failed",
          text: action.payload.message,
        };
      });
    builder
      .addCase(resetPassword.pending, handlePending)
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = {
          type: "success",
          text: action.payload.message,
        };
      })
      .addCase(resetPassword.rejected, (state, action) => {
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
