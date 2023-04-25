import {
    HistoryI,
    InventoryI,
    membersEditI,
    MembershipIdType,
    MemberShipResultType,
    MemberShipTypeEditI,
    MemberShipTypeI,
    MemberType,
    PaymentI,
    ProductEditI,
    ProductI,
    ProductResultI,
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

export interface InventoryDraverI {
    open: boolean;
    onClose: () => void;
    req: () => void;
}

export interface ProductDriver {
    open: boolean;
    onClose: () => void;
    editProduct: ProductResultI | null;
    req: () => void;
}

export interface MemberShipDraverI {
    open: boolean;
    onClose: () => void;
    data: MembershipIdType | undefined;
    req: () => void;
    memberShipEdit: MemberShipTypeEditI | null;
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
    req: () => void;
    editMemberShip: (item: any) => void;
    showDrawer: () => void;
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
// product table
export interface ProductTableI {
    response: ProductI | undefined;
    loading: boolean;
    pageTo: (to: any) => void;
    setEditProduct: (item: any) => void;
    showDrawer: () => void;
    req: () => void;
}
// inventory
export interface InventoryTableI {
    response: InventoryI | undefined;
    pageTo: (to: any) => void;
    loading: boolean;
}
// inventory post
export interface InventoryPostI {
    product_id: number;
    quantity: number;
}
