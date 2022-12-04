import { Button } from "@chakra-ui/react";
import Link from "next/link"
import React from 'react'

function Navbar() {

    const watchListHandle = () => {
        let watchArr = JSON.parse(localStorage.getItem("watchlists"));
        // setData(watchArr);
    }
  return (
    <div 
    style={{"display":"flex", gap:"20px"}}
    >
        <Link href="/">Home</Link>
        <Link href="/movies">Movies</Link>
        <Link href="/watchlist">
        <Button onClick={watchListHandle}>WatchLists</Button>

        </Link>
    </div>
  )
}

export default Navbar