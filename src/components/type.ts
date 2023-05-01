// ---------------------------member type -----------------------------------
export interface MemberResultType {
    created_at: string;
    date_of_birth: string;
    end_date: string;
    fullname: string;
    gender: string;
    id: number;
    membership_type: string;
    moderator_id: number;
    phone: string;
    status: string;
    updated_at: string;
}
export interface MemberDataType {
    limit: number;
    page: number;
    result: MemberResultType[];
    total: number;
}
export interface MemberType {
    data: MemberDataType;
}
// post
export interface MemberPostType {
    fullname: string;
    phone: string;
    gender: string;
    date_of_birth: string;
}
// edit
export interface membersEditI {
    id: number | null;
    fullname: string;
    gender: string;
    phone: string;
    date_of_birth: string;
    type: string;
}

// --------------------mmeberShip ---------------------------------------------
export interface MemberShipResultType {
    created_at: string;
    end_date: string;
    id: number;
    member_id: number;
    start_date: string;
    status: string;
    term: string;
    updated_at: string;
}
export interface MemberShipDataType {
    limit: number;
    page: number;
    result: MemberShipResultType[];
    total: number;
}
export interface MemberShipType {
    data: MemberShipDataType;
}

// membership type interface
export interface MemberShipTypeResultI {
    created_at: string;
    id: number;
    moderator_id: number;
    name: string;
    price: string;
    status: string;
    term: string;
}
export interface MemberShipTypeDataI {
    limit: number;
    page: number;
    result: MemberShipTypeResultI[];
    total: number;
}
export interface MemberShipTypeI {
    data: MemberShipTypeDataI;
}
// membershipType post
export interface MemberShipTypePostI {
    name: string;
    price: number;
    term: string;
}
// membership post
export interface MemberShipTypePostI {
    membership_type_id: number;
    member_id: number;
    term: string;
    start_date: string;
    end_date: string;
    payment_method: string;
}
// membership edit
export interface MemberShipTypeEditI {
    id: number | null;
    membership_type: MemberShipIdMembershipTypeI;
    term: string;
    start_date: string;
    end_date: string;
    payment_method: string;
}

// membershipId--------------------
export interface MemberShipIdMembershipTypeI {
    action_message: string;
    created_at: string;
    discount_percent: number;
    id: number;
    moderator_id: number;
    name: string;
    price: string;
    status: string;
    updated_at: string;
}
export interface MembershipIdMembershipsType {
    action_message: string;
    created_at: string;
    end_date: string;
    id: number;
    moderator_id: number;
    start_date: string;
    status: string;
    term: string;
    updated_at: string;
    membership_type: MemberShipIdMembershipTypeI;
}
export interface MembershipIdDataType {
    action_message: string;
    created_at: string;
    date_of_birth: string;
    fullname: string;
    gender: string;
    id: number;
    moderator_id: number;
    phone: string;
    status: string;
    updated_at: string;
    memberships: MembershipIdMembershipsType[];
}
export interface MembershipIdType {
    data: MembershipIdDataType;
}
// ----------------------Payment----------------------

export interface PaymentType {
    created_at: string;
    for_what: string;
    id: number;
    moderator_id: number;
    payment_method: string;
    status: string;
    total: string;
    updated_at: string;
}
export interface PaymentMemberI {
    fullname: string;
    id: number;
}
export interface PaymentResultI {
    created_at: string;
    for_what: string;
    id: number;
    moderator_id: number;
    paid_status: string;
    payment_method: string;
    status: string;
    total: string;
    member: PaymentMemberI;
}
export interface PaymentDataI {
    limit: number;
    page: number;
    result: PaymentResultI[];
    total: number;
}

export interface PaymentI {
    data: PaymentDataI;
}
// --------------------History get type-----------------------
export interface HistoryResult {
    id: number;
    checked_in_by: string;
    created_at: string;
    date: string;
    moderator_id: number;
    updated_at: string;
}
export interface HistoryDataI {
    limit: number;
    page: number;
    result: HistoryResult[];
    total: number;
}
export interface HistoryI {
    data: HistoryDataI;
}

// --------------Product Type -------------------------------
export interface ProductResultI {
    id: number;
    photo: string;
    product_type: string;
    price: string;
    product_name: string;
    quantity: number;
    supplier: string;
}
export interface ProductDataI {
    limit: number;
    page: number;
    result: ProductResultI[];
    total: number;
}
export interface ProductI {
    data: ProductDataI;
}
// post
export interface ProductPostI {
    product_type_id: number;
    product_name: string;
    supplier: string;
    photo: string;
    price: number;
    discount_percent: number;
}
// edit
export interface ProductEditI {
    id: number;
    product_type_id: number;
    product_name: string;
    supplier: string;
    photo: string;
    price: number;
    discount_percent: number;
}
// product type
export interface ProductTypeResultI {
    id: number;
    moderator_id: number;
    name: string;
    status: string;
}
export interface ProductTypeDataI {
    limit: number;
    page: number;
    result: ProductTypeResultI[];
    total: number;
}
export interface ProductTypeI {
    data: ProductTypeDataI;
}
// post
export interface ProductTypePostI {
    name: string;
}

// -----------Inventory-----------------
export interface InventoryResultI {
    id: number;
    product_name: string;
    product_type: string;
    status: string;
    stocks: number;
    supplier: string;
}
export interface InventoryDataI {
    limit: number;
    page: number;
    result: InventoryResultI[];
    total: number;
}

export interface InventoryI {
    data: InventoryDataI;
}

// -----------------Statistic----------------
export interface StatisticTypeI {
    created_at: string;
    for_what: string;
    id: number;
    paid_status: string;
    payment_method: string;
    status: string;
    total: string;
}

export interface StatisticI {
    activeMembers: number;
    inactiveMembers: number;
    outOufStockProducts: number;
    statistics: StatisticTypeI[];
    todaysVisits: number;
}

export interface StatisticPageI {
    response: StatisticI | undefined;
}

export interface StatisticTotalI {
    total: StatisticTypeI[] | undefined;
}
