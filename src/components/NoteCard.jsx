import React from "react";

export const NoteCard = () => {
    return (
        <div className="border-2 p-4 rounded-lg shadow">
            <div className=" min-h-[120px]">Content</div>
            <div className="flex gap-4">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}