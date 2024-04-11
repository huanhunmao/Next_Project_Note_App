import Head from "next/head"
import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostFileNames } from "../../lib/posts-util"


function PostDetailPage(props){
    return (
        <>
                <Head>
                    <title>{props.post.title}</title>
                    <meta name="description" content={props.post.excerpt}/>
                </Head>
                <PostContent post={props.post}/>
        </>
    )
}

// 准备预渲染数据 
export function getStaticProps(context){
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug+'.md')

    return {
        props:{
            post: postData
        },
        revalidate: 600
    }
}

// 准备预渲染的 paths 
export function getStaticPaths(){
    const postFileNames  = getPostFileNames()

    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}

export default PostDetailPage