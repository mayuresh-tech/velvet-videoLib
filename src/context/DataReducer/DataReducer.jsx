export const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_VIDEO":
      return { ...state, videos: action.payload };
    case "LOAD_CATEGORY":
      return { ...state, categories: action.payload };
    case "LOAD_LIKED":
      localStorage.setItem("liked", JSON.stringify(action.payload));
      return { ...state, liked: action.payload };
    case "LOAD_WATCHLATER":
      localStorage.setItem("watchlater", JSON.stringify(action.payload));
      return { ...state, watchlater: action.payload };
    case "LOAD_HISTORY":
      localStorage.setItem("history", JSON.stringify(action.payload));
      return { ...state, history: action.payload };
    case "LOAD_PLAYLIST":
      localStorage.setItem("playlist", JSON.stringify(action.payload));
      return { ...state, playlist: action.payload };
    case "LOAD_GAMES":
      return {
        ...state,
        games: !state.games,
        family: false,
        nature: false,
        comedy: false,
        songs: false,
        food: false,
        motivational: false,
      };
    case "LOAD_FAMILY":
      return {
        ...state,
        family: !state.family,
        games: false,
        nature: false,
        comedy: false,
        songs: false,
        food: false,
        motivational: false,
      };
    case "LOAD_NATURE":
      return {
        ...state,
        nature: !state.nature,
        games: false,
        family: false,
        comedy: false,
        songs: false,
        food: false,
        motivational: false,
      };
    case "LOAD_COMEDY":
      return {
        ...state,
        comedy: !state.comedy,
        games: false,
        family: false,
        nature: false,
        songs: false,
        food: false,
        motivational: false,
      };
    case "LOAD_SONGS":
      return {
        ...state,
        songs: !state.songs,
        games: false,
        family: false,
        nature: false,
        comedy: false,
        food: false,
        motivational: false,
      };
    case "LOAD_FOOD":
      return {
        ...state,
        food: !state.food,
        games: false,
        family: false,
        nature: false,
        comedy: false,
        songs: false,
        motivational: false,
      };
    case "LOAD_MOTIVATIONAL":
      return {
        ...state,
        motivational: !state.motivational,
        games: false,
        family: false,
        nature: false,
        comedy: false,
        songs: false,
        food: false,
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        games: false,
        family: false,
        nature: false,
        comedy: false,
        songs: false,
        food: false,
        motivational: false,
      };
    case "LOAD_FILTERED":
      return { ...state, filtered: action.payload };
    case "LOGOUT":
      return {
        ...state,
        liked: [],
        watchlater: [],
        history: [],
        playlist: [],
      };
    default:
      return state;
  }
};
