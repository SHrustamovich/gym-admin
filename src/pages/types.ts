import {
    HistoryI,
    InventoryI,
    InventoryResultI,
    membersEditI,
    MembershipIdType,
    MemberShipResultType,
    MemberShipTypeDataI,
    MemberShipTypeEditI,
    MemberShipTypeI,
    MemberShipTypeResultI,
    MemberType,
    PaymentI,
    ProductEditI,
    ProductI,
    ProductResultI,
    ProductTypeI,
    ProductTypePostI,
    ProductTypeResultI,
    StatisticI,
} from "../components/type";
import { SortDataI } from "../utils/data";

export interface modalI {
    isModalOpen: boolean;
    handleCancel: () => void;
    request?: () => void;
    editMembers?: membersEditI | null;
    paymentId?: number | null;
}

export interface draverI {
    open: boolean;
    onClose: () => void;
}

export interface MemberShipTypeDrawerI {
    open: boolean;
    onClose: () => void;
    req: () => void;
    editMemberType: MemberShipTypeResultI | null;
}

export interface InventoryDraverI {
    open: boolean;
    onClose: () => void;
    req: () => void;
    editInventory: InventoryResultI | null;
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
    loading: boolean;
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
    pageTo: (to: any) => void;
    loading: boolean;
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
    setEditInventory: (item: any) => void;
    showDwawer: () => void;
    request: () => void;
}
// inventory post
export interface InventoryPostI {
    product_id: number;
    quantity: number;
}

// POS
export interface PosDrawer {
    open: boolean;
    onClose: () => void;
    load: boolean;
}
// HomeGraph

export interface HomeGraphI {
    dataGraph: StatisticI | undefined;
}

export interface StaticFilterDataI {
    id: number;
    title: string;
    path: string;
}

// SettingTable

export interface SettingTableI {
    response: MemberShipTypeI | undefined;
    load: boolean;
    setEditMemberType: (item: any) => void;
    showDrawer: () => void;
    req: () => void;
}
// product type
export interface ProductTypeTableI {
    response: ProductTypeI | undefined;
    loading: boolean;
    req: () => void;
    setProductTypeEdit: (item: any) => void;
    showModal: () => void;
}
export interface ProductTypeModalI {
    openModal: boolean;
    onCancel: () => void;
    req: () => void;
    productTypeEdit: ProductTypeResultI | null;
}
