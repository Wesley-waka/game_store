import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c2c55f42c19f4280993b29c6e8ed1be1",
  },
});
