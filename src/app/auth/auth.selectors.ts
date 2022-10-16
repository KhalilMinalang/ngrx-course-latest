import { createSelector } from "@ngrx/store";

export const isLoggedIn = createSelector(
  (state) => state["auth"],
  // projector function
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  // combined
  isLoggedIn,
  (loggedIn) => !loggedIn
);
