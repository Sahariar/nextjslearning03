import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import {Suspense} from "react"
import UserPosts from "./components/UserPosts"
import { Metadata } from "next"
type Params = {
  params:{
    userId:string
  }
}
export async function generateMetadata({params:{userId}}:Params):Promise<Metadata> {
  const userData:Promise<User> = getUser(userId)
  const user:User = await userData

  return {
    title:user.name,
    description:`This is ${user.name}`
  }
}
export default async function User({params:{userId}}:Params) {
  const userData:Promise<User> = getUser(userId)
  const userPostData:Promise<Post[]> = getUserPost(userId);
  // const[user, userPosts] = await Promise.all([
  //   userData,userPostData
  // ])
  const user = await userData
  return (
    <>
    <div className="container mx-auto">
      <h2 className="text-2xl">
        {user.name}
      </h2>
      <Suspense fallback={<h2 className="text-xl"> Loading....</h2>}>
        <UserPosts promise = {userPostData} />  
      </Suspense>
    </div>
    </>
  )
}
