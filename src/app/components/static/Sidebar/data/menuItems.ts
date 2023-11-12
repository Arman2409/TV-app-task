import type { MenuItemType } from "antd/es/menu/hooks/useItems";

const navigationIconsPath = "/assets/sidebar/icons/";

const menuItems: MenuItemType[] = [
  {
    key: "search",
    label: "Search",
    icon: navigationIconsPath + "search.png",
  },
  {
    key: "home",
    label: "Home",
    icon: navigationIconsPath + "home.png",
  },
  {
    key: "shows",
    label: "TV Shows",
    icon: navigationIconsPath + "shows.png",
  },
  {
    key: "movies",
    label: "Movies",
    icon: navigationIconsPath + "movies.png",
  },
  {
    key: "genres",
    label: "Genres",
    icon: navigationIconsPath + "genres.png",
  },
  {
    key: "watchLater",
    label: "Watch Later",
    icon: navigationIconsPath + "later.png",
  }
]

export default menuItems;