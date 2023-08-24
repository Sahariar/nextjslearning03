type Props = {
    promise:Promise<Post[]>
}
export default async function UserPosts({promise}: Props) {
    const posts = await promise
    const content = posts.map(post =>{
        return(
            <article className="flex p-6 w-50 mx-auto flex-col" key={post.id}>
                <h2 className="text-2xl py-4">{post.title}</h2>
                <p className="">{post.body}</p>
            </article>
        )
    })
    return content
}
