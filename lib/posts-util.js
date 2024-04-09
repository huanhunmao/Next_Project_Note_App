import fs from 'fs';
import path from 'path';
const matter = require('gray-matter');

// process.cwd() 当前工作目录
const postsDirectory = path.join(process.cwd(), 'posts')

function getPostData(fileName){
    const filePath = path.join(process.cwd(),fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const {data, content} = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, '')  // 去掉文件扩展名

    const postData ={
        slug:postSlug,
        ...data,
        content,
    }

    return postData
}

function getAllPosts(){
    const postFiles = fs.readdirSync(postsDirectory)

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts
}

function getFeaturedPosts(){
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)

    return featuredPosts
}