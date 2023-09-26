"use client"

import { Input } from "./Input"
import { NoteCard } from "./NoteCard"

export const NoteEditor = ({ notedData }) => {
    console.log(notedData)
    return (
        <div className=" space-y-8">
            <Input />
            <div className="space-y-4">
                {notedData.map(({content})=>{
                    return <NoteCard content={content}/>;
                })}
            </div>
            <NoteCard />
        </div>
    )
}