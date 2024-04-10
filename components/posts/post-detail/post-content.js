
import ReactMarkDown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'

function PostContent(props){
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return(
        <article className={classes.content}>
        <PostHeader  image={imagePath} title={post.title}/>
        <ReactMarkDown>
        {post.content}
        </ReactMarkDown>
        </article>
    )
}

export default PostContent