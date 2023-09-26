"use client"

import { useRouter } from "next/navigation";

export const NoteCard = ({ id, content }) => {
    const router = useRouter();

    async function handleDeleteNote() {
        const res = await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
            method: "DELETE",
        });
        router.refresh()
    }
    
    return (
        <div className="border-2 p-4 rounded-lg shadow">
            <div className=" min-h-[120px]">{content}</div>
            <div className="flex gap-4">
                <button>Edit</button>
                <button onClick={handleDeleteNote}>Delete</button>
            </div>
        </div>
    )
}