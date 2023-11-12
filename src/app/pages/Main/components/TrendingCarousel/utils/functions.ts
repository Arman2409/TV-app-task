export const getWatchedIds = () => {
    let viewedMovies:any = sessionStorage.getItem("viewed_movies");
    if (viewedMovies) {
        viewedMovies = JSON.parse(viewedMovies);
    } else {
        viewedMovies = [];
    }
    return viewedMovies;
}