"use client"
export default function Error({error, reset}){
    return(
        <div>
            Error while loading the page {error.message}
            <button onClick={()=> reset()}>Reset</button>
        </div>
    )
}