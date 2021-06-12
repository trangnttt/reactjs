import React from 'react'
import Link from 'next/link'
const User = ({ datas }) => {
    return (
        <div className="container">
            <h1>Post</h1>
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
                    {datas.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.address.street}</td>
                            <td>{data.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default User;

export async function getServerSideProps() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const datas = await res.json()
    console.log('dataa', datas)

    return { props: { datas } }
}


