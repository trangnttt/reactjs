import React from 'react'
import Link from 'next/link'
import PostService from '@/services/Post'
const Post = ({ posts }) => {
    return (
        <div className="container">
            <h1>Post</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 ?
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>
                                    <Link href={`/post/${post.id}`}>
                                        <a>{post.email}</a>
                                    </Link>
                                </td>
                                <td>{post.first_name}</td>
                                <td>{post.last_name}</td>
                            </tr>
                        ))
                        : null}

                </tbody>
            </table>
        </div>
    );
};
export default Post;


export async function getStaticProps() {
    const res = await PostService.getAll()
    const posts = res.data.data;

    return {
        props: {
            posts: posts,
        },
    };
}