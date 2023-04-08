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
    membership: memberShipI;
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
// mmeberShip
export interface memberShipInterface {
    id: number;
    created_at: string;
    end_date: string;
    membership_type: memberShipType;
    moderator_id: string;
    start_date: string;
    status: string;
    term: string;
    updated_at: string;
}
export interface memberShipResI {
    limit: number;
    page: number;
    result: membersI[];
}
export interface memberShipDataI {
    limit: number;
    page: number;
    result: memberShipInterface[];
}
export interface memberShipResII {
    data: memberShipDataI;
}

export interface membersPostI {
    fullname: string;
    phone: string;
    gender: string;
    date_of_birth: string;
    membership_id: number;
}
