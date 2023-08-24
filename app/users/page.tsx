import getAllUsers from '@/lib/getAllUsers'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users List',
    description: 'You can find all users.',
}


export default async function Users() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData
    console.log('Hello');
    const content = (
        <section className='container mx-auto'>
            <h2>
                <Link href="/">Home</Link>
            </h2>
            <div className="flex justify-center">
            {users.map(user =>{
                return(
                    <>
                    <p className='p-6' key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </p>
                    </>
                )
            })}
</div>
        </section>
    )
  return content;
}
