import getAllPosts from "@/app/lib/getAllPosts";
import Link from "next/link";

export default async function Posts(){
    const posts = await getAllPosts();

    return(
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map(post => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
            </ul>
        </div>
    )
}