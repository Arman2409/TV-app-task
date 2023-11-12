"use client"
import { useSelector } from "react-redux"

import MovieDescription from "./components/MovieDescription/MovieDescription"
import TrendingCarousel from "./components/TrendingCarousel/TrendingCarousel"
import type { IRootState } from "../../store/store"

const Main = () => {
    const { isOpened } = useSelector((state: IRootState) => state.sidebar);

    return (
        <div
         style={{
            opacity: isOpened ? 0.2 : 1,
        }}
        >
            <MovieDescription />
            <TrendingCarousel />
        </div>
    )
}

export default Main;