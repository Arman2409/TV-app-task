"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

import styles from "./styles/trendingCarousel.module.scss"
import movies from "./data/trendingMovies.json"
import { getWatchedIds } from "./utils/functions"
import { changeChosenMovie } from "../../../../store/moviesSlice"
import type { Movie } from "../../../../types/pages"

const movieImagesPath = "/assets/movieDescription/";

const TrendingCarousel = () => {
    const dispatch = useDispatch();
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
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
        const watchedIds = getWatchedIds();
        let newMovies:Movie[] = [];
        watchedIds.forEach((Id:string) => {
           const watchedMovie =  movies.find(({Id:movieId}:Movie) =>  movieId === Id);
           if(!watchedMovie){
               console.warn("no movie found with id", Id);
               return;
           }
           newMovies.push(watchedMovie);
        });
        movies.forEach((movie:Movie) => {
            if(watchedIds.includes(movie.Id)) return;
            newMovies.push(movie);
        })
        setTrendingMovies([...newMovies]);
    }, [setTrendingMovies, movies, getWatchedIds])

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
                        width: movies.length * 12 + "%"
                    }}>
                    {trendingMovies.length && trendingMovies.map((movie) => (
                        <div
                            key={movie.Id}
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