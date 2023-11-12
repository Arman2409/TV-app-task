import { Button } from "antd/lib"
import { CaretRightOutlined } from "@ant-design/icons"

import styles from "./styles/movieDescription.module.scss"
import { getHoursAndMinutes } from "./utils/functions"

const movie = {
    "Id": "1",
    "Title": "The Irishman",
    "CoverImage": "FeaturedCoverImage.png",
    "TitleImage": "FeaturedTitleImage.png",
    "Date": "2021-10-24T12:16:50.894556",
    "ReleaseYear": "2021",
    "MpaRating": "18+",
    "Category": "Movie",
    "Duration": "6000",
    "Description": "Info About it"
}

const movieImagesPath = "/assets/movieDescription/";

const MovieDescription = () => {
    const { Category, CoverImage, TitleImage, Description, Title, Duration, MpaRating, ReleaseYear } = { ...movie };

    return (
        <div className={styles.description_main}>
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