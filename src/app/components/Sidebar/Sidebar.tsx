"use client"
import { useCallback, useEffect, useState } from 'react'
import { Menu, Avatar } from "antd/lib"
import { useRouter } from 'next/navigation'

import styles from './styles/sidebar.module.scss'
import { getUser } from './utils/functions'
import menuItems from './data/menuItems'
import footerItems from './data/footerItems'
import type { ItemType } from '../../types/sidebar'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'


const Sidebar = () => {
  const [inlineCollapsed, setInlineCollapsed] = useState<boolean>(false);
  const [user, setUser] = useState<any>({ name: "", image: "" });
  const [clickedNavigationItem, setClickedNavigationItem] = useState<string>("");
  const router = useRouter();

  const clickNavigationItem = useCallback((key: string) => {
    setClickedNavigationItem(key);
    router.push(key)
  }, [setClickedNavigationItem, router])

  useEffect(() => {
    setUser(getUser);
  }, [getUser, setUser])

  return (
      <div
        onMouseEnter={() => setInlineCollapsed(false)}
        onMouseLeave={() => setInlineCollapsed(true)}
        className={inlineCollapsed ? styles.sidebar_collapsed : styles.sidebar}>
        <div
          className={inlineCollapsed ? styles.sidebar_user_info_hidden : styles.sidebar_user_info}>
          <Avatar
            alt={""}
            src={user.image}
            className={styles.sidebar_user_info_avatar}
          />
          {user.name}
        </div>
        <Menu
          mode="vertical"
          className={styles.sidebar_navigation}
          inlineCollapsed={inlineCollapsed}
          onMouseEnter={() => setInlineCollapsed(false)}
          onMouseLeave={() => setInlineCollapsed(true)}
        >
          {menuItems.map(({ label, key, icon, path }: ItemType) => (
            <Menu.Item
              key={key}
              onClick={() => clickNavigationItem(path)}
              children={
                <div
                  className={inlineCollapsed ? styles.sidebar_navigation_item_content_collapsed : styles.sidebar_navigation_item_content}>
                  <img
                    className={inlineCollapsed ? styles.sidebar_navigation_item_content_collapsed_image : styles.sidebar_navigation_item_content_image}
                    src={icon as string} />
                  <p  className={inlineCollapsed ? styles.sidebar_navigation_item_content_collapsed_text : styles.sidebar_navigation_item_content_text}>
                    {label}
                  </p>
                </div>
              }
              className={clickedNavigationItem === key ? styles.sidebar_navigation_item_clicked : styles.sidebar_navigation_item}
            />
          ))}
        </Menu>
        <Menu
          className={inlineCollapsed ? styles.sidebar_footer_hidden :  styles.sidebar_footer}>
          {footerItems.map(({ label, key }: MenuItemType) => (
            <Menu.Item
              key={key}
              className={styles.sidebar_footer_item}>
              {label}
            </Menu.Item>
          ))}
        </Menu>
      </div>
  )
}

export default Sidebar;