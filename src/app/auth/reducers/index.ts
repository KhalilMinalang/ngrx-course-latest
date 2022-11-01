import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { AuthActions } from "../action-types";
import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    // this will trigger runtime error
    // state.user = action.user;
    // return state;

    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
