import type { MenuItemType } from 'antd/es/menu/hooks/useItems'

export interface ItemType extends MenuItemType {
    path: string
}

export type SidebarFooterProps = {
    inlineCollapsed: boolean
}