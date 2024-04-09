import { Fragment } from "react";
import Hero from '../components/home-page/hero'
import FeaturedPosts from "../components/home-page/featured-posts";

const  DUMMY_POSTS = [
    {
        slug:'getting-started-with-nextjs',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        data:'2024-4-9',
    },
    {
        slug:'getting-started-with-nextjs1',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        data:'2024-4-9',
    },
    {
        slug:'getting-started-with-nextjs2',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        data:'2024-4-9',
    },
    {
        slug:'getting-started-with-nextjs3',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        data:'2024-4-9',
    }
]

function HomePage(){
    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    )
}

export default HomePage