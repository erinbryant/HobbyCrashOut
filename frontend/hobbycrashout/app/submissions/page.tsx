"use client"
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"


export default function SubmitPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const router = useRouter() // <-- initialize router

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch("/api/submit", { method: "POST", body: formData })
    const result = await response.json()

    if (!response.ok) {
      setError(result.error)
      return
    }

    setSuccess("Submission successful!")

    // Reset form safely
    if (form) form.reset()

    // Redirect to another page
    router.push("/submissions") // <-- redirect here
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full max-w-sm">
      <textarea name="blurb" placeholder="Enter a blurb" required className="border p-2 rounded" />
      <input type="file" name="photo" accept="image/*" required />
      <button type="submit" className="rounded-full ...">Submit</button>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  )
}
