import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { DataReducer } from "../DataReducer/DataReducer";

import {
  getVideos,
  getCategories,
  addLikedVideo,
  getLikedVideos,
  addWatchLater,
  addHistory,
  getHistory,
  addPlaylist,
  addPlaylistVideo,
  getWatchLater,
  getPlaylists,
} from "../../services/index.js";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const token = localStorage.getItem("login");
  const [id, setId] = useState(0);
  const [playlistModal, setPlaylistModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();
  const [loading, setLoading] = useState(false);
  const [loadtext, setLoadText] = useState("");
  const [showMini, setShowMini] = useState(false);
  const [data, dispatch] = useReducer(DataReducer, {
    videos: [],
    liked: [],
    watchlater: [],
    history: [],
    playlist: [],
    filtered: [],
    categories: [],
    games: false,
    family: false,
    nature: false,
    comedy: false,
    songs: false,
    food: false,
    motivational: false,
  });

  useEffect(() => {
    (async () => {
      const videoResponse = await getVideos();
      dispatch({ type: "LOAD_VIDEO", payload: videoResponse.data.videos });
      dispatch({ type: "LOAD_FILTERED", payload: videoResponse.data.videos });
      const categoryResponse = await getCategories();
      dispatch({
        type: "LOAD_CATEGORY",
        payload: categoryResponse.data.categories,
      });

      const loadLikedVideos = async () => {
        if ("login" in localStorage) {
          const likeLocalStorage = JSON.parse(localStorage.getItem("liked"));
          likeLocalStorage &&
            likeLocalStorage.map(async (item) => {
              await addLikedVideo({ video: item, encodedToken: token });
            });
          const likedVideoResponse = await getLikedVideos({
            encodedToken: token,
          });
          dispatch({
            type: "LOAD_LIKED",
            payload: likedVideoResponse.data.likes,
          });
        } else {
          // do nothing
        }
      };

      const loadWatchLaterVideos = async () => {
        if ("login" in localStorage) {
          const wacthLaterLocalStorage = JSON.parse(
            localStorage.getItem("watchlater")
          );
          wacthLaterLocalStorage &&
            wacthLaterLocalStorage.map(async (item) => {
              await addWatchLater({ video: item, encodedToken: token });
            });

          const wacthLaterResponse = await getWatchLater({
            encodedToken: token,
          });
          dispatch({
            type: "LOAD_WATCHLATER",
            payload: wacthLaterResponse.data.watchlater,
          });
        } else {
          // do nothing
        }
      };

      const loadHistoryVideos = async () => {
        if ("login" in localStorage) {
          const historyLocalStorage = JSON.parse(
            localStorage.getItem("history")
          );
          historyLocalStorage &&
            historyLocalStorage.map(async (item) => {
              await addHistory({ video: item, encodedToken: token });
            });

          const historyResponse = await getHistory({ encodedToken: token });
          dispatch({
            type: "LOAD_HISTORY",
            payload: historyResponse.data.history,
          });
        } else {
          // do nothing
        }
      };

      const loadPlayLists = async () => {
        if ("login" in localStorage) {
          const playlistLocalStorage = JSON.parse(
            localStorage.getItem("playlist")
          );
          playlistLocalStorage &&
            playlistLocalStorage.map(async (item) => {
              await addPlaylist({
                title: item.title,
                encodedToken: token,
              });
              item?.videos?.map(async (video) => {
                await addPlaylistVideo({
                  video: video,
                  playlistId: item._id,
                  encodedToken: token,
                });
              });
            });

          const playlistResponse = await getPlaylists({ encodedToken: token });
          dispatch({
            type: "LOAD_PLAYLIST",
            payload: playlistResponse.data.playlists,
          });
        } else {
          // do nothing
        }
      };

      try {
        "liked" in localStorage
          ? dispatch({
              type: "LOAD_LIKED",
              payload: JSON.parse(localStorage.getItem("liked")),
            })
          : loadLikedVideos();
        "watchlater" in localStorage
          ? dispatch({
              type: "LOAD_WATCHLATER",
              payload: JSON.parse(localStorage.getItem("watchlater")),
            })
          : loadWatchLaterVideos();
        "history" in localStorage
          ? dispatch({
              type: "LOAD_HISTORY",
              payload: JSON.parse(localStorage.getItem("history")),
            })
          : loadHistoryVideos();
        "playlist" in localStorage ? loadPlayLists() : loadPlayLists();
      } catch (e) {
        console.log("load", e);
      }
    })();
  }, []);

  const category =
    data.games ||
    data.family ||
    data.nature ||
    data.comedy ||
    data.songs ||
    data.food ||
    data.motivational;

  const gamesFilter = data.videos.filter((item) =>
    item.category === "games" && data.games ? true : false
  );

  const familyFilter = data.videos.filter((item) =>
    item.category === "family" && data.family ? true : false
  );

  const natureFilter = data.videos.filter((item) =>
    item.category === "nature" && data.nature ? true : false
  );

  const comedyFilter = data.videos.filter((item) =>
    item.category === "comedy" && data.comedy ? true : false
  );

  const songsFilter = data.videos.filter((item) =>
    item.category === "songs" && data.songs ? true : false
  );

  const foodFilter = data.videos.filter((item) =>
    item.category === "food" && data.food ? true : false
  );

  const motivationalFilter = data.videos.filter((item) =>
    item.category === "motivational" && data.motivational ? true : false
  );

  const categoryFilter = category
    ? [
        ...gamesFilter,
        ...familyFilter,
        ...natureFilter,
        ...comedyFilter,
        ...songsFilter,
        ...foodFilter,
        ...motivationalFilter,
      ]
    : data.videos;

  function getSorted(product) {
    return product;
  }

  const filtered = getSorted(categoryFilter);

  return (
    <DataContext.Provider value={{ data, dispatch, filtered }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
