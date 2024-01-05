"use client";

export default function Button(){
    return(
        <div className="button-component">
            <button className="bg-green-500 mt-4 p-4" onClick={()=> console.log('>>>')}>Click here</button>
        </div>
    )
}