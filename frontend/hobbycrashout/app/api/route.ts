import fs from "fs"
import path from "path"

type Submission = {
  id: string
  blurb: string
  photoUrl: string
}

// File to store submissions persistently
const dataFile = path.join(process.cwd(), "submissions.json")

// Helper to read existing submissions from disk
function readSubmissions(): Submission[] {
  if (!fs.existsSync(dataFile)) return []
  const data = fs.readFileSync(dataFile, "utf-8")
  try {
    return JSON.parse(data) as Submission[]
  } catch {
    return []
  }
}

// Helper to save submissions to disk
function saveSubmissions(submissions: Submission[]) {
  fs.writeFileSync(dataFile, JSON.stringify(submissions, null, 2))
}

// POST handler: receive new submission
export const POST = async (req: Request) => {
  const formData = await req.formData()
  const blurb = formData.get("blurb") as string
  const photo = formData.get("photo") as File

  if (!blurb || !photo) {
    return new Response(
      JSON.stringify({ error: "Missing blurb or photo" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    )
  }

  // Only allow certain image types
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
  if (!allowedTypes.includes(photo.type)) {
    return new Response(
      JSON.stringify({ error: "Invalid file type. Please upload an image." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    )
  }

  // Save the uploaded image
  const uploadDir = path.join(process.cwd(), "public/uploads")
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

  const timestamp = Date.now()
  const ext = path.extname(photo.name)
  const base = path.basename(photo.name, ext)
  const filename = `${base}-${timestamp}${ext}`
  const photoPath = path.join(uploadDir, filename)

  const buffer = Buffer.from(await photo.arrayBuffer())
  fs.writeFileSync(photoPath, buffer)

  const photoUrl = `/uploads/${filename}`

  // Read existing submissions, add new, save to disk
  const submissions = readSubmissions()
  const submission: Submission = { id: `item-${timestamp}`, blurb, photoUrl }
  submissions.push(submission)
  saveSubmissions(submissions)

  return new Response(JSON.stringify(submission), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}

// GET handler: return all submissions
export const GET = async () => {
  const submissions = readSubmissions()
  return new Response(JSON.stringify(submissions), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
