export default async function getUserPost(userId:String) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if(!res.ok) throw new Error("Failed to fetch User Posts");
      return res.json();
    }