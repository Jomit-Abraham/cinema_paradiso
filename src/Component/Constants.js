const api_key = '08853ad8f67bde441e00d0b7763418d0'
const genersurl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=08853ad8f67bde441e00d0b7763418d0&language=en-US'
const moviewithgener = 'https://api.themoviedb.org/3/discover/movie?api_key=08853ad8f67bde441e00d0b7763418d0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=<<<id>>>&with_watch_monetization_types=flatrate'
const moviewithoutgener = 'https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=1&with_watch_monetization_types=flatrate'
export const imgurl = "https://image.tmdb.org/t/p/original"