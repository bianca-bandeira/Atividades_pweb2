'use client'

import { useState } from "react";

export default function Input(){
    const [name, setName] = useState("");

    return (
        <input
        value = {name}
        onChange={(e) => setName(e.target.value)}
        />
    );
}