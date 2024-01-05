export default async function Comments({promise}){
    const comments = await promise;
    return(
        <div>
            <h1 className="mt-10">Comments</h1><hr/>
            <ul>
                {comments.map(comment=> <li className="mb-4" key={comment.id}>{comment.body}</li>)}
            </ul>
        </div>
    )
}