import React from 'react'

const PostDetail = ({ post }) => {
    return (
        <div className="container">
            <h1>Post Detail</h1>
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
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default PostDetail;


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
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
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()

    return { props: { post } }
}

