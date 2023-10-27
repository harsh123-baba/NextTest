import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react";

type Params = {
    params : {
        userId :string 
    }
}


export default function UserPage({params : {userId}} : Params) {
  const userData : Promise<User> = getUser(userId)
  const userPostsData : Promise<Post[]> = getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <div>
      <h2>{user.name}</h2>
      <br/>
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPosts post = {userPosts} />
      </Suspense>

    </div>
  )
}
