import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

const Page = ({ movie }) => {
    // console.log(movie); //it is object;

    const router = useRouter();
    console.log(router); // {pathname: '/movies/[id]', query: {id: '1'}}

    return (
        <div>
            <h1>Page: {router.query.id}</h1>
            <img src={movie.Images[0]} alt="" width={"500px"} height={"500px"}></img>
            <h2>{movie.Rated}</h2>
            <h2>{movie.Type}</h2>
            <p>{movie.Language}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Director}</p>
            <h1>{movie.Year}</h1>
            <p>{movie.Runtime}</p>
            <p>{movie.Genre}</p>
            <h3>{movie.Country}</h3>
            {movie.imdbRating}
            {movie.imdbVotes}
            {movie.Awards}
            <br></br>
            <br></br>
            <Button onClick={() => router.back()}>Go Back</Button>
        </div>
    );
};

export async function getStaticPaths() { //it is for creating static paths;
    let res = await fetch(`http://localhost:8080/movies`);
    let data = await res.json(); //data is array of objects;
    return {
        paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
        fallback: false
    }
}
export async function getStaticProps(context) {
    const { params: { id } } = context;
    let res = await fetch(`http://localhost:8080/movies/${id}`);
    let data = await res.json(); //data is an object;
    return {
        props: {
            movie: data
        }
    }
}

export default Page;