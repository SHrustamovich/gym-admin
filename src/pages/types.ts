export interface modalI {
    isModalOpen: boolean;
    handleCancel: () => void;
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
}
