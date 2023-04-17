export interface memberShipType {
    id: number;
    created_at: string;
    discount_percent: string;
    name: string;
    moderator_id: string;
    price_per_month: string;
    status: string;
    updated_at: string;
}
export interface memberShipI {
    id: number;
    created_at: string;
    end_date: string;
    start_date: string;
    status: string;
    term: string;
    membership_type: memberShipType;
}
export interface membersI {
    id: number;
    created_at: string;
    fullname: string;
    gender: string;
    moderator_id: string;
    phone: string;
    status: string;
    memberships: memberShipI[];
}

export interface membersEditI {
    id: number | null;
    fullname: string;
    gender: string;
    phone: string;
    date_of_birth: string;
    type: string;
}

export interface membersResI {
    limit: number;
    page: number;
    result: membersI[];
    total: number;
}
export interface membersReqI {
    loading: string;
    data: membersResI;
}

// member type ---------------------------------------------------------------
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
// mmeberShip -------------------------------------------------------------------------
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
    price_per_month: string;
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
// -----------------------

// membershipId--------------------
export interface MemberShipIdMembershipTypeI {
    action_message: string;
    created_at: string;
    discount_percent: number;
    id: number;
    moderator_id: number;
    name: string;
    price_per_month: string;
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

export interface memberShipResI {
    limit: number;
    page: number;
    result: membersI[];
}
// export interface memberShipDataI {
//     limit: number;
//     page: number;
//     result: memberShipInterface[];
// }
// export interface memberShipResII {
//     data: memberShipDataI;
// }

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
export interface TypeMemberShips {
    created_at: string;
    end_date: string;
    id: number;
    start_date: string;
    status: string;
    term: string;
    updated_at: string;
}

export interface MemberShipItemI {
    fullname: string;
    gender: string;
    phone: string;
    status: string;
    id: number;
    memberships: TypeMemberShips[];
    payment: PaymentType[];
}

export interface memberShipInterfacee {
    loading: string;
    data: MemberShipItemI;
}

// history get type
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

// payment get type
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

// inventory get type
