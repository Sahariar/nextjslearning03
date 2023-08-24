export default async function getUser(userId:String) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
        {next:{revalidate:60}});
        if(!res.ok) throw new Error("Failed to fetch User");
      return res.json();
    }