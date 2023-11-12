"use client"
import { Button } from "antd/lib"
import { CaretRightOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"

import styles from "./styles/movieDescription.module.scss"
import { getHoursAndMinutes } from "./utils/functions"
import defaultMovie from "./data/default.json"
import type { IRootState } from "../../../../store/store"
import type { Movie } from "../../../../types/pages"


const movieImagesPath = "/assets/movieDescription/";

const MovieDescription = () => {
    const { isOpened } = useSelector((state: IRootState) => state.sidebar);
    const { chosenMovie } = useSelector((state: IRootState) => state.movies);

    const { Category,
        CoverImage,
        TitleImage,
        Description,
        Title,
        Duration,
        MpaRating,
        ReleaseYear }: Movie = chosenMovie.Id ? { ...chosenMovie } : { ...defaultMovie };

    return (
        <div
            className={styles.description_main}
            style={{
                opacity: isOpened ? 0.2 : 1,
            }}>
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
            <img
                className={styles.description_main_image}
                src={movieImagesPath + CoverImage}
            />
        </div>
    )
}

export default MovieDescription;