"use client"

import { Input } from "./Input"
import { NoteCard } from "./NoteCard"

export const NoteEditor = () => {
    return (
        <div className=" space-y-8">
            <Input />
            <NoteCard />
        </div>
    )
}