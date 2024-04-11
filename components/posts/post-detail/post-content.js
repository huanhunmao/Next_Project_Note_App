
import ReactMarkDown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function PostContent(props){
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customRenders = {
        // img(image){
        //     return (
                // <Image
                // src={`/images/posts/${post.slug}/${image.src}`}
                // alt={post.slug}
                // width={600}
                // height={300}
                // />
        //     )
        // }

        // 定义 p(paragraph) 渲染函数，可以优化 Markdown 中图片的展示。
        // 它允许你根据 Markdown 内容中图片的位置和属性，动态地调整图片的展示方式和样式
        p(paragraph){
            const { node } = paragraph

            if(node.children[0].tagName === 'img'){
                const image = node.children[0]

                return (
                    <div className={classes.image}>
                        <Image
                        src={`/images/posts/${post.slug}/${image.properties.src}`}
                        alt={post.alt}
                        width={600}
                        height={300}
                />
                    </div>
                )
            }
        },

        code(code){
            console.log('code222',code);
            const { children, className } = code 
        
            return (
                <SyntaxHighlighter
                style={dark}
                language={className}
                children={children}
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