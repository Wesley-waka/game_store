import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const axiosInstance = axios.create({
  baseURL: "",
  params: {
    key: "",
  },
});

const getPlatforms = () => {
  return axiosInstance
    .get<Platform>("/platforms/lists/parents")
    .then((res) => res.data);
};

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => getPlatforms,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
