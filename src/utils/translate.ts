interface Trans {
    home: string;
    members: string;
    sales: string;
    inventory: string;
    products: string;
    history: string;
    payments: string;
    logout: string;
    add: string;
    success: string;
    wrong: string;
    newadd: string;
    name: string;
    valName: string;
    phone: string;
    bday: string;
    gender: string;
    male: string;
    female: string;
    addmem: string;
    memberType: string;
    term: string;
    date: string;
    end: string;
    status: string;
    membership: string;
    total: string;
    payment: string;
    card: string;
    summary: string;
    member: string;
    mPayment: string;
    stock: string;
}
const uz: Trans = {
    home: "Asosiy",
    members: "A'zolarni qo'shish",
    sales: "Sotish",
    inventory: "Inventarizatsiya",
    products: "Maxsulotlar",
    history: "Tarix",
    payments: "To'lovlar",
    logout: "Chiqish",
    add: "YANGI QO'SHISH",
    success: "A'ZO MUVAFFAKATLI QO'SHILDI",
    wrong: "NIMADIR NOTO'G'RI BAJARILDI",
    newadd: "YANGI A'ZO QO'SHISH",
    name: "To'liq ism",
    valName: "Iltimos, toʻliq ismingizni kiriting!",
    phone: "Telefon raqami",
    bday: "Tug'ilgan kuni",
    gender: "Jins",
    male: "Erkak",
    female: "Ayol",
    addmem: "A'ZOLIK QO'SHISH",
    memberType: "A'zolik turi",
    term: "Muddati",
    date: "Boshlanash sanasi",
    end: "Tugash sanasi",
    status: "Holat",
    membership: "A'ZOLIK QO'SHISH",
    total: "JAMI",
    payment: "To'lov usuli",
    card: "Savatchaga qo'shish",
    summary: "SOTISH XULOSASI",
    member: "A'zo",
    mPayment: "To'lovni o'tiring",
    stock: "STOK IN",
};
const ru: Trans = {
    home: "Главная",
    members: "Добавить участников",
    sales: "Продажи",
    inventory: "Инвентарь",
    products: "Продукты",
    history: "История",
    payments: "Платежи",
    logout: "Выйти",
    add: "ДОБАВИТЬ НОВОЕ",
    success: "УЧАСТНИК ДОБАВЛЕН УСПЕШНО",
    wrong: "ЧТО-ТО ПОШЛО НЕ ТАК",
    newadd: "ДОБАВИТЬ НОВОГО УЧАСТНИКА",
    name: "Полное имя",
    valName: "Пожалуйста, введите ваше полное имя!",
    phone: "Номер телефона",
    bday: "Дата рождения",
    gender: "Пол",
    male: "Мужской",
    female: "Женский",
    addmem: "ДОБАВИТЬ ЧЛЕНСТВО",
    memberType: "Тип членства",
    term: "Срок",
    date: "Дата начала",
    end: "Дата окончания",
    status: "Положение дел",
    membership: "ДОБАВИТЬ ЧЛЕНСТВО",
    total: "ОБЩИЙ",
    payment: "Способ оплаты",
    card: "В корзину",
    summary: "ОБЗОР ПРОДАЖИ",
    member: "Член",
    mPayment: "ПРОИЗВОДИТЬ ОПЛАТУ",
    stock: "В НАЛИЧИИ",
};
const eng: Trans = {
    home: "Home",
    members: "Add Members",
    sales: "Sales",
    inventory: "Inventory",
    products: "Products",
    history: "Story",
    payments: "Payments",
    logout: "Go out",
    add: "ADD NEW",
    success: "MEMBER ADDED SUCCESSFULLY",
    wrong: "SOMETHING WENT WRONG",
    newadd: "ADD NEW MEMBER",
    name: "Full Name",
    valName: "Please input your full name!",
    phone: "Phone Number",
    bday: "Date of Birth",
    gender: "Gender",
    male: "Male",
    female: "Female",
    addmem: "ADD MEMBERSHIP",
    memberType: "Membership Type",
    term: "Term",
    date: "Start Date",
    end: "End Date",
    status: "Status",
    membership: "ADD MEMBERSHIP",
    total: "TOTAL",
    payment: "Payment Method",
    card: "Add to Card",
    summary: "SALE SUMMARY",
    member: "Member",
    mPayment: "MAKE PAYMENT",
    stock: "STOCK IN",
};
interface LanguageKeyValuePairs {
    [key: string]: Trans;
}
export const languages: LanguageKeyValuePairs = { uz, ru, eng };
