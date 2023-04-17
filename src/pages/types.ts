import {
    HistoryI,
    membersEditI,
    memberShipI,
    MembershipIdType,
    MemberShipResultType,
    MemberType,
    PaymentI,
} from "../components/type";
import { SortDataI } from "../utils/data";

export interface modalI {
    isModalOpen: boolean;
    handleCancel: () => void;
    request?: () => void;
    editMembers?: membersEditI | null;
}

export interface draverI {
    open: boolean;
    onClose: () => void;
}

export interface deleteModalI {
    title: string;
    visible: boolean;
    onOkDelete: () => void;
    onCancel: () => void;
}

export interface tableI {
    showModal: () => void;
    response: MemberType | undefined;
    loading: boolean;
    request: () => void;
    setEditMembers: (item: any) => void;
    pageTo: (to: any) => void;
}

export interface filterI {
    filterData: SortDataI[];
}

export interface MemberShipTableI {
    response: MembershipIdType | undefined;
}
// history table
export interface HistoryTableI {
    response: HistoryI | undefined;
    loading: boolean;
    pageTo: (to: any) => void;
}
// payment table
export interface PaymentTableI {
    response: PaymentI | undefined;
}
