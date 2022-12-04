import React from 'react';
import { useRouter } from 'next/router'

const Page = ({ blog }) => {
    const router = useRouter();

    return (
        <div>
            <h1 onClick={() => router.back()}>Go Back</h1>
            <h1>page: {router.query.id}</h1>
            <h1>{blog.author}</h1>
            <h3>{blog.title}</h3>
            <p>{blog.discription}</p>

        </div>
    );
}

export async function getStaticPaths() {
    let res = await fetch(`http://localhost:8080/blogs`);
    let data = await res.json();
    return {
        paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params: { id } } = context;
    let res = await fetch(`http://localhost:8080/blogs/${id}`);
    let data = await res.json();
    return {
        props: {
            blog: data
        }
    }
}
export default Page;