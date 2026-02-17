import * as React from "react"

const projects = [
  {
    title: "Next.js Landing Page",
    description: "Landing page with dynamic routing and API fetching."
  },
  {
    title: "Remix Blog",
    description: "Blog with nested routing and dynamic pages."
  },
  {
    title: "Gatsby Portfolio",
    description: "Static portfolio site using Gatsby."
  }
]

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>My Portfolio</h1>
      <p>This portfolio showcases my React framework projects.</p>

      <h2 style={{ marginTop: 30 }}>Projects</h2>

      {projects.map((project, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  )
}