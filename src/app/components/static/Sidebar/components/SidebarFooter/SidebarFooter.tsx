import { Menu } from "antd/lib"
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'

import styles from "./styles/sidebarFooter.module.scss"
import footerItems from '../../data/footerItems'
import type { SidebarFooterProps } from "../../../../../types/components"

const SidebarFooter = ({inlineCollapsed}:SidebarFooterProps) => (
        <Menu
        className={inlineCollapsed ? styles.sidebar_footer_hidden : styles.sidebar_footer}>
        {footerItems.map(({ label, key }: MenuItemType) => (
          <Menu.Item
            key={key}
            className={styles.sidebar_footer_item}>
            {label}
          </Menu.Item>
        ))}
      </Menu>
)

export default SidebarFooter;