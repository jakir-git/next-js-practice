import getPost from "@/app/lib/getPost";
import getComments from "@/app/lib/getComments";
import Comments from "@/app/components/comments";
import { Suspense } from "react";

export async function generateMetadata({params}){
    const {id} = params;
    const post = await getPost(id);
    return{
        title: post.title,
        description: post.body 
    }
}

export default async function postSingle({params}){
    const {id} = params;
    const postPromise = getPost(id);
    const commentsPromise = getComments(id);

    //const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    const post = await postPromise;

    return(
        <div className="mt-5">
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Suspense fallback="<h1>Loading...</h1>">
                <Comments promise={commentsPromise}/>
            </Suspense>
        </div>
    )
}