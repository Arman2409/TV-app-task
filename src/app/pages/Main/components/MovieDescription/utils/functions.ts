export const getHoursAndMinutes = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    return `${hours ? hours + "h" : ""} ${minutes ? minutes + "m" : ""}`;
}