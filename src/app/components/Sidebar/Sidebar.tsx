"use client"
import { Suspense, useCallback, useEffect, useState } from 'react'
import { Menu, Avatar } from "antd/lib"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles/sidebar.module.scss'
import { getUser } from './utils/functions'
import menuItems from './data/menuItems'
import Loading from '../custom/Loading/Loading'
import { changeChosenPage, updateStatus } from '../../store/sidebarSlice'
import SidebarFooter from './components/SidebarFooter/SidebarFooter'
import type { User } from '../../types/components'
import type { IRootState } from '../../store/store'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'


const Sidebar = () => {
  const [inlineCollapsed, setInlineCollapsed] = useState<boolean>(true);
  const [user, setUser] = useState<User>({} as User);
  const [loaded, setLoaded] = useState<boolean>(false)
  const [clickedNavigationItem, setClickedNavigationItem] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { chosenPage } = useSelector((state: IRootState) => state.sidebar);

  const clickNavigationItem = useCallback((key: string) => {
    setClickedNavigationItem(key);
    dispatch(changeChosenPage(key));
  }, [setClickedNavigationItem, router])

  useEffect(() => {
    setUser(getUser());
  }, [setUser, getUser])

  const changeInlineStatus = useCallback((status: boolean) => {
    setInlineCollapsed(status)
    dispatch(updateStatus(!status))
  }, [setInlineCollapsed, updateStatus, dispatch]);

  useEffect(() => {
    if (chosenPage) setClickedNavigationItem(chosenPage);
  }, [chosenPage, setClickedNavigationItem])

  useEffect(() => {
    window.onload = () => setLoaded(true);
  }, [window, setLoaded])

  return (

    <Suspense fallback={<Loading
      height='100vh'
      width="80px" />}
    >
      {loaded ? <div
        onMouseEnter={() => changeInlineStatus(false)}
        onMouseLeave={() => changeInlineStatus(true)}
        className={inlineCollapsed ? styles.sidebar_collapsed : styles.sidebar}>
        <div
          className={inlineCollapsed ? styles.sidebar_user_info_hidden : styles.sidebar_user_info}>
          <Avatar
            alt="image"
            src={user.image}
            className={styles.sidebar_user_info_avatar}
          />
          {user.name}
        </div>
        <Menu
          mode="vertical"
          className={styles.sidebar_navigation}
          inlineCollapsed={inlineCollapsed}
        >
          {menuItems.map(({ label, key, icon }: MenuItemType) => (
            <Menu.Item
              key={key}
              title=""
              onClick={() => clickNavigationItem(key as string)}
              children={
                <div
                  className={inlineCollapsed ? styles.sidebar_navigation_item_content_collapsed
                    : styles.sidebar_navigation_item_content}>
                  <img
                    className={inlineCollapsed ? styles.sidebar_navigation_item_content_collapsed_image
                      : styles.sidebar_navigation_item_content_image}
                    src={icon as string} />
                  <p className={inlineCollapsed ? styles.sidebar_navigation_item_content_collapsed_text
                    : styles.sidebar_navigation_item_content_text}>
                    {label}
                  </p>
                </div>
              }
              className={clickedNavigationItem === key ? styles.sidebar_navigation_item_clicked
                : styles.sidebar_navigation_item}
            />
          ))}
        </Menu>
        <SidebarFooter inlineCollapsed={inlineCollapsed} />
      </div>
        : <Loading
          height='100vh'
          width="80px" />}
    </Suspense>
  )
}

export default Sidebar;