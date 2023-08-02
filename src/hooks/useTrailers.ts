import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  useQuery({
    queryKey: ["movies", gameId],
    queryFn: () => apiClient.getAll,
  });
};
export default useTrailers;
