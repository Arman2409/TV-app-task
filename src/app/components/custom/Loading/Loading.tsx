import { Spin } from "antd/lib"

import styles from "./styles/loading.module.scss"
import type { LoadingProps } from "../../../types/components"

const Loading = ({width, height}:LoadingProps) => {
    return (
        <div 
         className={styles.loading}
         style={{
            width,
            height
         }}>
            <Spin size={"large"} />
        </div>
    )
}

export default Loading;