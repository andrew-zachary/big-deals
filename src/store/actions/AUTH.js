import { createAction } from "@reduxjs/toolkit";

export const authLoggedin = createAction("auth/loggedin");
export const authLoggedout = createAction("auth/loggedout");