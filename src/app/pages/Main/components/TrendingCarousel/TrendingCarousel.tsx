"use client"
import React, { useCallback, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import styles from "./styles/trendingCarousel.module.scss"
import movies from "./data/trendingMovies.json"
import { changeChosenMovie } from "../../../../store/moviesSlice"
import type { Movie } from "../../../../types/pages"

const movieImagesPath = "/assets/movieDescription/";

const TrendingCarousel = () => {
    const dispatch = useDispatch();
    const carouselSlides = useRef<any>(null);

    const updateChosenMovie = useCallback((movie: Movie) => {
        dispatch(changeChosenMovie({ ...movie }));
    }, [dispatch, changeChosenMovie])

    useEffect(() => {
        carouselSlides.current.addEventListener('wheel', (e: WheelEvent) => {
            e.preventDefault();
            const { left } = carouselSlides.current.style;
            const currentLeft = Number(left.slice(0, -1));
            if (e.deltaY < 0) {
                if(currentLeft > -12) {
                    return;
                }
                carouselSlides.current.style.left = currentLeft + 12 + "%"
            } else {
                if(currentLeft <=  movies.length * -12 + (8 * 12)) {
                    return;
                }
                carouselSlides.current.style.left = currentLeft - 12 + "%"
            }
        })
    }, [])

    return (
        <div
            className={styles.carousel}
            >
            <h5 className={styles.carousel_title}>
                Trending Now
            </h5>
            <div
                className={styles.carousel_slider}>
                <div
                    ref={carouselSlides}

                    className={styles.carousel_slider_slides}
                    style={{
                        left: "0%",
                        width: movies.length * 12 + "%"
                    }}>
                    {movies.map((movie) => (
                        <div
                            onClick={() => updateChosenMovie(movie)}
                            className={styles.carousel_slider_slides_slide}
                        >
                            <img
                                src={movieImagesPath + movie.CoverImage}
                                className={styles.carousel_slider_slides_slide_image}
                            />
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default TrendingCarousel;