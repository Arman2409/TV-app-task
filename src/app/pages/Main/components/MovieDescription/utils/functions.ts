export const getHoursAndMinutes = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    return `${hours ? hours + "h" : ""} ${minutes ? minutes + "m" : ""}`;
}

export const addToWatched = (id:string) => {
    let viewedMovies:any = sessionStorage.getItem("viewed_movies");
    if (viewedMovies) {
        viewedMovies = JSON.parse(viewedMovies);
    } else {
        viewedMovies = [];
    }
    if(viewedMovies.includes(id)) return;
    viewedMovies.push(id);
    sessionStorage.setItem("viewed_movies", JSON.stringify(viewedMovies));
}