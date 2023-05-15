import { Spin } from "antd";
import { FC } from "react";

export const MiniLoading: FC = () => {
    return (
        <div className="mini-loading">
            <Spin/>
        </div>
    )
}