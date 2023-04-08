import { Spin } from "antd";
import { FC } from "react";

export const Loading: FC = () => {
    return (
        <div className="loading">
            <Spin/>
        </div>
    )
}