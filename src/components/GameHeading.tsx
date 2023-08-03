import { Heading } from "@chakra-ui/react";
import { RootState, initialState } from "../redux";
import { useSelector } from "react-redux";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const genreId = useSelector((state:RootState)=>state.gameQuery.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = initialState.gameQuery.platformId;
  const platform = usePlatform(platformId);
  // Games
  // Xbox
  // PS
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
