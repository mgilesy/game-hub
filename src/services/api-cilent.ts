import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "defbd57e5a9d4e79b585951632567672",
  },
});
