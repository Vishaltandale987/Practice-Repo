import { Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
// import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Icon } from '@chakra-ui/react';

const Page = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // setData(JSON.parse(localStorage.getItem("watchlists"))

    useEffect(() => {
        watchListHandle()
    }, [])
    

    const watchListHandle = () => {
        let watchArr = JSON.parse(localStorage.getItem("watchlists"));
        setData(watchArr);
    }

    // watchListHandle()
    const handleDelete = (index) => {
        data.splice(index, 1);
        localStorage.setItem("watchlists", JSON.stringify(data));
        setData(data);
        setLoading(true);
        setInterval(() => {
            setLoading(false);
        }, 1000);
    }
    // console.log(data);
    return (
        <div>
            <Box display={"flex"} gap="50%">
                <Button onClick={watchListHandle}>WatchLists</Button>
                <Box display={"flex"}>
                    <Heading>count:</Heading>
                    <Heading color={"goldenrod"}>{data.length}</Heading>
                </Box>
            </Box>
            {loading && <h1>Loading.....</h1>}
            <Box display="grid" gridTemplateColumns="repeat(3,1fr)" gap="2%" textAlign="center">
                {data && data.map((ele, index) =>
                    <Box key={ele.id}>
                        <Image src={ele.Images[0]} alt=''></Image>
                        <Heading>{ele.Title}</Heading>
                        <Text>{ele.Language}</Text>
                        <Text>{ele.Type}</Text>
                        <Text>{ele.Director}</Text>
                        <Text>{ele.Year}</Text>
                        <Button onClick={() => handleDelete(index)}>Delete</Button>
                    </Box>
                )}
            </Box>
        </div>
    );
}

export default Page;