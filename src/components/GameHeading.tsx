import { Heading } from "@chakra-ui/react";
import { RootState } from "../redux";
import { useSelector } from "react-redux";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const genreId = useSelector((s: RootState) => s.game.genreId);
  const genre = useGenre(genreId);

  const platformId = useSelector((s: RootState) => s.game.platformId);
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
