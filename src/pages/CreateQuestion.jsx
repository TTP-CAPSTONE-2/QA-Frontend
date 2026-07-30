import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CreateQuestion.css"

const API_URL = "http://localhost:3000"

function CreateQuestion() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!title.trim() || !body.trim()) {
      setError("Please enter both a title and a body.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(`${API_URL}/api/questions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim(), body: body.trim() }),
      })

      if (!response.ok) {
        throw new Error("Failed to create question")
      }

      const createdQuestion = await response.json()
      const questionId = createdQuestion?.id

      navigate("/")
    } catch (err) {
      setError(err.message || "Unable to create question. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="create-question-page">
      <div className="create-question-card">
        <div className="create-question-header">
          <h1>Create a question</h1>
          <p>Use the form below to submit a new question to the community.</p>
        </div>

        {error && <div className="create-question-error">{error}</div>}

        <form className="create-question-form" onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter a short question title"
            />
          </label>

          <label>
            Body
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="Describe the question in more detail"
              rows={6}
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Posting..." : "Post question"}
          </button>
        </form>
      </div>
    </main>
  )
}

export default CreateQuestion
