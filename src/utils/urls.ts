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
export const memberShipPost = "/api/membership";
export const memberShipDelete = (id: number) => `api/membership/${id}`;
export const memberShipPut = (id: number) => `api/membership/${id}`;

// membership type
export const membershipTypeUrl = "/api/membership-types";
export const membershipTypepost = "/api/membership-types";
export const membershipTypeDelete = (id: number) =>
    `/api/membership-types/${id}`;
export const membershipTypeEdit = (id: number) => `/api/membership-types/${id}`;

// history
export const historyGet = "/api/visit";

// payment

export const paymentGet = "/api/payment";

// inventory
export const inventoryGet = "/api/inventory";
export const inventoryPost = "/api/inventory";

// logout

export const logout = "/api/auth/logout";

// product
export const productGet = "/api/product";
export const productPost = "/api/product";
export const productPut = (id: number) => `/api/product/${id}`;
export const productDelete = (id: number) => `/api/product/${id}`;

// product-type
export const productType = "/api/product-type";
export const productTypePost = "/api/product-type";
export const productTypeDelete = (id: number) => `/api/product-type/${id}`;
export const productTypeEditUrl = (id: number) => `/api/product-type/${id}`;

// statistics
export const statisticsGet = "/api/statistics";

// payment
export const paymentList = "/api/payment";
