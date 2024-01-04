import Link from "next/link"

export default function Blogs(){
    const blogs = [
        {
            id: 1,
            title: 'Blog title 1',
            desc: 'Blog description'
        },
        {
            id: 2,
            title: 'Blog title 2',
            desc: 'Blog description'
        },
        {
            id: 3,
            title: 'Blog title 3',
            desc: 'Blog description'
        }
    ]
    return(
        <main className="flex flex-col p-24">
            <h1>Blog page</h1>
            <ul>
                {blogs.map((blog)=> (
                    <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
                ))}
            </ul>
        </main>
    )
}