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
    discount_percent: number;
    id: number;
    moderator_id: number;
    name: string;
    price: string;
    status: string;
    updated_at: string;
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
// membership post
export interface MemberShipTypePostI {
    membership_type_id: number;
    member_id: number;
    term: string;
    start_date: string;
    end_date: string;
}
// membership edit
export interface MemberShipTypeEditI {
    id: number | null;
    membership_type: MemberShipIdMembershipTypeI;
    term: string;
    start_date: string;
    end_date: string;
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
export interface PaymentResultI {
    created_at: string;
    for_what: string;
    id: number;
    moderator_id: number;
    payment_method: string;
    status: string;
    total: string;
    updated_at: string;
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
    poduct_type: string;
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
