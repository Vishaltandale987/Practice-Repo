import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import { useRouter } from 'next/router';

const Page = ({ blogs }) => {
  const router = useRouter();
  // console.log(router);
  
  const handleClick = (id) => {
    router.push(`/${id}`);
  }
  return (
    <div>
      <Head>
        <title>Blogs page</title>
        <meta title='description'></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {blogs && blogs.map((ele) =>
          <div key={ele.id}>
            <h1 onClick={() => handleClick(ele.id)}>{ele.title}</h1>
          </div>
        )}
      </main>
    </div>
  );
}


export async function getStaticProps() {
  let res = await fetch(`http://localhost:8080/blogs`);
  let data = await res.json();
  return {
    props: {
      blogs: data
    }
  }
}
export default Page;
