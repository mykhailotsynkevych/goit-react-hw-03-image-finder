import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '28586147-3ab4251b0e4522a1aabc38539';

export const fetchPhotos = (query) => {
  return     axios.get("?", {
    params: {
      q: query,
      page: 1,
      key: API_KEY,
      image_type: "photo",
      orientation: "horizontal",}
    }).then((response) => response.data.hits);
}




