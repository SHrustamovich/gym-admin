export interface modalI {
    isModalOpen: boolean;
    handleCancel: () => void;
}

export interface draverI {
    open: boolean;
    onClose: () => void;
}
