"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "antd/lib"
import { CaretRightOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"

import styles from "./styles/movieDescription.module.scss"
import { addToWatched, getHoursAndMinutes } from "./utils/functions"
import defaultMovie from "./data/default.json"
import type { IRootState } from "../../../../store/store"
import type { Movie } from "../../../../types/pages"

const movieImagesPath = "/assets/movieDescription/";

const MovieDescription = () => {
    const [videoAddress, setVideoAddress] = useState<string>("");
    const playTimeout = useRef<any>(null);
    const { chosenMovie } = useSelector((state: IRootState) => state.movies);

    const { Category,
        CoverImage,
        TitleImage,
        Description,
        Title,
        Duration,
        MpaRating,
        Id,
        VideoUrl,
        ReleaseYear }: Movie = chosenMovie.Id ? { ...chosenMovie } : { ...defaultMovie };

    useEffect(() => {
        setVideoAddress("")
        clearTimeout(playTimeout.current);
        playTimeout.current = setTimeout(() => {
            setVideoAddress(VideoUrl)
        }, 2000);
        addToWatched(Id);
    }, [Id, VideoUrl, setVideoAddress, addToWatched])

    return (
        <div
            className={styles.description_main}
        >
            <div className={styles.description_main_data}>
                <div className={styles.description_main_data_content}>
                    <p className={styles.description_main_data_content_category}>
                        {Category.toUpperCase()}
                    </p>
                    {TitleImage ?
                        <img
                            className={styles.description_main_data_content_image}
                            src={movieImagesPath + TitleImage}
                        />
                        : <p>{Title}</p>}
                    <div className={styles.description_main_data_content_details}>
                        {ReleaseYear + "  " + MpaRating + "  " + getHoursAndMinutes(Number(Duration))}
                    </div>
                    <p>
                        {Description}
                    </p>
                    <div className={styles.description_main_data_content_buttons}>
                        <Button
                            className={styles.description_main_data_content_buttons_play}
                            icon={<CaretRightOutlined />}>
                            Play
                        </Button>
                        <Button
                            className={styles.description_main_data_content_buttons_more}
                        >
                            More Info
                        </Button>
                    </div>
                </div>
            </div>
            {videoAddress ? <video
                className={styles.description_main_media}
                autoPlay
            >
                <source src={videoAddress} />
            </video>
                : <img
                    className={styles.description_main_media}
                    src={movieImagesPath + CoverImage}
                />}
        </div>
    )
}

export default MovieDescription;