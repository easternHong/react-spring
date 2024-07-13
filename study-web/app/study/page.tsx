'use client'
import React from "react";

export default function StudyLayoutSub({params}: { params: { productId: string }; }) {
    console.log('StudyUi', params)
    return (
        <div className=' content-center bg-red-950 items-center justify-center'>
            study center
        </div>
    )
}