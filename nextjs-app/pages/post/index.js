import React from 'react'
import Link from 'next/link'
const Post = ({ posts }) => {
    return (
        <div className="container">
            <h1>Post</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>
                                <Link href={`/post/${post.id}`}>
                                    {post.title}
                                </Link>
                            </td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Post;


export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    };
}