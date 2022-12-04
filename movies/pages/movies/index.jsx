import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import MovieCart from '../../Components/MovieCart';
import { Box, Heading } from '@chakra-ui/react';
import MovieCart from '../../compounts/MovieCart';

// import WatchList from '../../Components/watchlist';

const Page = ({ movies }) => {
    // console.log(movies);//array of movies;

    const router = useRouter();
    // console.log(router) //here we see pathname=/movies

    const handleClick = (id) => {
        router.push(`/movies/${id}`); //router.push(pathname/${id})
    }
    
    return (
        <div>
            <Head>
                <title>Movies page {movies.length}</title>
                <meta title='description'></meta>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <h1>Movies: {movies.length}</h1>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2%", textAlign: "center" }}>
                    {movies && movies.map((ele) =>
                        <MovieCart key={ele.id} id={ele.id} Title={ele.Title} Language={ele.Language} Year={ele.Year} Type={ele.Type} Director={ele.Director} image={ele.Images[0]} handleClick={handleClick} />
                    )}
                </div>
            </main>
        </div>
    );
}


export async function getStaticProps() {
    let res = await fetch(`http://localhost:8080/movies`);
    let data = await res.json(); //data is array of objects;
    return {
        props: {
            movies: data
        }
    }
}

export default Page;