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
import styled from "styled-components";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useSelector(
    (state: RootState) => state.gameQuery.gameQuery.genreId
  );
  const dispatch = useDispatch();
  const Wrapper = styled.div`
    margin-top: 20%;
  `;
  //   if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Wrapper>
      <Heading fontSize="2xl" marginBottom={3}>
        Home
      </Heading>
      <Heading fontSize="2xl" marginBottom={3}>
        Reviews
      </Heading>
      <Heading fontSize="2xl" marginBottom={3}>
        New Releases
      </Heading>
      <List>
        <ListItem padding="5px">Last 30 days</ListItem>
      </List>
      <Heading fontSize="2xl" marginBottom={3}>
        Top
      </Heading>
      <List>
        <ListItem padding="5px">Best of the year</ListItem>
      </List>
      <Heading fontSize="2xl" marginBottom={3}>
        AllGames
      </Heading>

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
    </Wrapper>
  );
};

export default GenreList;
