import { Drawer, Form, Select } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { draverI } from "../../pages/types";

export const InventoryDrawer: FC<draverI> = ({ open, onClose }) => {
    const translate = useLanguage();
    return (
        <div className='inventory-drawer'>
            <Drawer
                placement='right'
                onClose={onClose}
                open={open}
                closable={false}
            >
                <Form>
                    <div className='inventory-drawer__item'>
                        <p className="inventory-drawer__label">
                        Product Type
                        </p>
                        <Form.Item
                            name='username'
                            rules={[
                                {
                                    required: true,
                                    message: translate("valName"),
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder='Select a person'
                                optionFilterProp='children'
                                // onChange={onChange}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: "jack",
                                        label: "Jack",
                                    },
                                    {
                                        value: "lucy",
                                        label: "Lucy",
                                    },
                                    {
                                        value: "tom",
                                        label: "Tom",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </div>
                </Form>
            </Drawer>
        </div>
    );
};
