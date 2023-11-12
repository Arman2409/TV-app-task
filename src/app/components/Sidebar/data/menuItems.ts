import type { ItemType } from "../../../types/components";

const navigationIconsPath = "/assets/sidebar/icons/";

const menuItems: ItemType[] = [
  {
    key: "search",
    label: "Search",
    icon: navigationIconsPath + "search.png",
    path: "/search"
  },
  {
    key: "home",
    label: "Home",
    icon: navigationIconsPath + "home.png",
    path: "/"
  },
  {
    key: "shows",
    label: "TV Shows",
    icon: navigationIconsPath + "shows.png",
    path: "/shows"
  },
  {
    key: "movies",
    label: "Movies",
    icon: navigationIconsPath + "movies.png",
    path: "/movies"
  },
  {
    key: "genres",
    label: "Genres",
    icon: navigationIconsPath + "genres.png",
    path: "/genres"
  },
  {
    key: "watchLater",
    label: "Watch Later",
    icon: navigationIconsPath + "later.png",
    path: "/watchLater"
  }
]

export default menuItems;