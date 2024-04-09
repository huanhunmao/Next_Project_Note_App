import AllPosts from "../../components/posts/all-posts"

const  DUMMY_POSTS = [
    {
        slug:'getting-started-with-nextjs',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        date:'2024-4-9',
    },
    {
        slug:'getting-started-with-nextjs1',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        date:'2024-4-9',
    },
    {
        slug:'getting-started-with-nextjs2',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        date:'2024-4-9',
    },
    {
        slug:'getting-started-with-nextjs3',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        excerpt:'NextJs is good fullstack app',
        date:'2024-4-9',
    }
]

function AllPostsPage(){
    return (
        <AllPosts posts={DUMMY_POSTS}/>
    )
}

export default AllPostsPage