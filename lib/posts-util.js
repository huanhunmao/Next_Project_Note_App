import fs from 'fs';
import path from 'path';
const matter = require('gray-matter');

// process.cwd() 当前工作目录
const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostFileNames(){
    return fs.readdirSync(postsDirectory)
}

export function getPostData(fileName){
    const filePath = path.join(postsDirectory,fileName)
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

export function getAllPosts(){
    const postFiles = getPostFileNames()

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)
    console.log('featuredPosts222',featuredPosts);

    return featuredPosts
}