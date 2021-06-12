import React from 'react'
import Link from 'next/link'
const UseDetail = ({ data }) => {
    return (
        <div className="container">
            <h1>User detail</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.address.street}</td>
                        <td>{data.phone}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};
export default UseDetail;

export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return { props: { data } }
}



