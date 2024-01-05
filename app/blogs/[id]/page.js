import Link from "next/link";

export default function BlogSingle({params}){
    const {id} = params;
    return(
        <main className="flex flex-col p-24">
            <Link href="/blogs">Back</Link>
            <h1>Blog Single {id}</h1>
        </main>
    )
}