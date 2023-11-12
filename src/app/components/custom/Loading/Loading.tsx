import { Spin } from "antd/lib"

import styles from "./styles/loading.module.scss"

const Loading = () => {
    return (
        <div className={styles.loading}>
            <Spin size={"large"} />
        </div>
    )
}

export default Loading;