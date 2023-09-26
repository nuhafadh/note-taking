"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export const Input = () => {
    const router = useRouter();
    const [content, setContent] = useState("");

    const handleCreateNote = async () => {
        const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ content: content, user: "me@nuhafadh.com"} ),
        });
        const data = await res.json();
        console.log(data);
        setContent("")
        router.refresh()
    }
    return (
        <div className="flex gap-4">
            <input value={content} onChange={(e) => setContent(e.target.value)} />
            <button className="w-fit px-12" onClick={handleCreateNote}>Create</button>
        </div>
    )
}