"use client"

import { Input } from "./Input"
import { NoteCard } from "./NoteCard"
import { Header } from "./header"

export const NoteEditor = ({ notedData }) => {
    console.log(notedData)
    return (
        <div>
            <div className=" space-y-8">
                <Header />
                <Input />
                <div className="space-y-4">
                    {notedData.map(({ id, content })=>{
                        return <NoteCard key={id} id={id} content={content}/>;
                    })}
                </div>
                <NoteCard />
            </div>
        </div>
    )
}