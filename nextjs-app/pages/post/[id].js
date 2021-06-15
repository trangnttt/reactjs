import React from 'react'
import PostService from '@/services/Post'
const PostDetail = ({ post }) => {
    return (
        <div className="container">
            <h1>Post Detail</h1>
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
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.email}  </td>
                        <td>{post.first_name}</td>
                        <td>{post.last_name}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default PostDetail;


export async function getStaticPaths() {
    const res = await PostService.getAll()
    const posts = res.data.data;
    const paths = posts.map((post) => (
        {
            params: {
                id: `${post.id}`
            },
        }
    ))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const res = await PostService.getId(id)
    const post = res.data.data;
    return { props: { post } }
}

