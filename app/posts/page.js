import getAllPosts from "@/app/lib/getAllPosts";

export default async function Posts(){
    const posts = await getAllPosts();

    return(
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}