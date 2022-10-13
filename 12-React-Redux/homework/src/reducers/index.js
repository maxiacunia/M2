const initialState = {
    moviesLoaded: [],
    moviesFavorites: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case 'GET_MOVIES':
            return{
                ...state,
                moviesLoaded: action.payload.Search
            };
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                movieDetail: action.payload
            }
        case 'ADD_MOVIE_FAVORITE':
            return{
                ...state,
                //lo importante es concatenar para no pisar mis pelis fav anteriores
                //tambien se puede hacer conm un spreed operator
                //[...state.moviesFavorites, action.payload]
                //no uso push porque no devuelve un nuevo arreglo me da un modificado
                moviesFavorites: state.moviesFavorites.concat(action.payload)
            }
        case 'REMOVE_MOVIE_FAVORITE':
            return{
                ...state,
                //aca se puede usar map o filter porque me devuelve un nuevo arreglo
                moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
            }
        default: return {...state};
    }
}