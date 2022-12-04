import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

let watchArr = [];
const MovieCart = ({ id, Title, Language, image, Type, Director, Year, handleClick }) => {

    async function getStaticProps() {
        let res = await fetch(`http://localhost:8080/movies/${id}`);
        let data = await res.json(); //data is an object;
        return {
            props: {
                movie: data
            }
        }
    }

    const handleClick1 = async () => {
        let val = await getStaticProps();
        watchArr.push(val.props.movie);
        localStorage.setItem("watchlists", JSON.stringify(watchArr));
    }

    return (
        <Box>
            <Image src={image} alt=''></Image>
            <Heading onClick={() => handleClick(id)}>{Title}</Heading>
            {/* <Link href={`/movies/${id}`}>{Title}</Link> */}
            <Text>{Language}</Text>
            <Text>{Type}</Text>
            <Text>{Director}</Text>
            <Text>{Year}</Text>
            <Button onClick={handleClick1}>Add To WatchList</Button>
        </Box>
    );
};

export default MovieCart;