
import ReactMarkDown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'

const  DUMMY_POSTS = 
    {
        slug:'getting-started-with-nextjs',
        title:'Getting Started With NextJs',
        image:'getting-started-nextjs.png',
        content:'# It is content',
        date:'2024-4-9',
    }

function PostContent(){
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return(
        <article className={classes.content}>
        <PostHeader  image={imagePath} title={DUMMY_POSTS.title}/>
        <ReactMarkDown>
        {DUMMY_POSTS.content}
        </ReactMarkDown>
        </article>
    )
}

export default PostContent