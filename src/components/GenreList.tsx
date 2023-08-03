import {
  List,
  HStack,
  Image,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { RootState, setGenreId } from "../redux";
import { useDispatch, useSelector } from "react-redux";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useSelector((state:RootState)=>state.gameQuery.gameQuery.genreId);
  const dispatch = useDispatch();

  //   if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>

      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} padding="5px">
            {" "}
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => {
                  dispatch(setGenreId(genre.id));
                }}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
              {genre.name}
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
