import React from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Githubbb() {
  const data = useLoaderData()
  return(
    <div>Github Followers: {data.followers}
    <img src={data.avatar_url} alt=""  width={300}/>
    </div>
  )
}

export const GithubInfo = async ()=>{
  const response = await fetch("https://api.github.com/users/zakiabduo");
  return response.json()
}