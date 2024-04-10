
import ReactMarkDown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'

function PostContent(props){
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customRenders = {
        img(image){
            return (
                <Image
                src={`/images/posts/${post.slug}/${image.src}`}
                alt={post.slug}
                width={600}
                height={300}
                />
            )
        }
    }

    return(
        <article className={classes.content}>
        <PostHeader  image={imagePath} title={post.title}/>
        <ReactMarkDown components={customRenders}>
        {post.content}
        </ReactMarkDown>
        </article>
    )
}

export default PostContent