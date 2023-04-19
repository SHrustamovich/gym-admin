// domen
export const domen = "https://unitor-gym-api.main-gate.appx.uz";

// auth

export const authRefresh = "/api/auth/refresh";
export const authLogin = "/api/auth/login";
export const getauth = "/api/auth";

// members
export const memberGetU = "/api/member";
export const memberGet = `/api/member/list`;
export const memberPost = "/api/member";
export const membershipGet = "/api/membership?detail=true";
export const membersDelete = (id: number) => `api/member/${id}`;
export const membersPut = (id: number) => `api/member/${id}`;

// membership
export const memberShipGet = "/api/membership";
export const memberShipPost = "/api/membership"
export const memberShipDelete = (id: number) => `api/membership/${id}`
export const memberShipPut = (id:number) => `api/membership/${id}`

// membership type
export const membershipType = "/api/membership-types"

// history
export const historyGet = "/api/visit";

// payment

export const paymentGet = "/api/payment";

// inventory
export const inventoryGet = "/api/inventory?detail=true";

// logout

export const logout ="/api/auth/logout"
