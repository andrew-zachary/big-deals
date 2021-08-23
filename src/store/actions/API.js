import { createAction } from "@reduxjs/toolkit";

export const apiCallStarted = createAction("api/callStarted");
export const apiCallEnded = createAction("api/callEnded");
export const apiCallFailed = createAction("api/callFailed");