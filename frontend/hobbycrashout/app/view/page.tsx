"use client"
import { useState, useEffect } from "react"

type Submission = {
  id: string
  blurb: string
  photoUrl: string
}

export default function Home() {
  const [submissions, setSubmissions] = useState<Submission[]>([])

  useEffect(() => {
    fetch("/api/submit")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched submissions:", data)
        setSubmissions(data)
      })
      .catch(err => console.error("Error fetching submissions:", err))
  }, [])

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mt-6">
      {submissions.length === 0 ? (
        <p className="text-center text-gray-500">No submissions yet.</p>
      ) : (
        submissions.map(s => (
          <div key={s.id} className="border p-2 rounded">
            <p className="font-bold">{s.blurb}</p>
            {s.photoUrl && (
              <img
                src={s.photoUrl}
                alt={s.blurb}
                className="mt-2 w-full object-cover rounded"
              />
            )}
          </div>
        ))
      )}
    </div>
  )
}
