import React from 'react'

export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!res.ok){
        throw new Error("falied to fetch data");
    }
    return res.json();
}
