export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 40, lineHeight: 1.6 }}>
      
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>React Frameworks Lab</h1>
        <nav style={{ display: "flex", gap: 20 }}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="/users">Users</a>
        </nav>
      </header>

      <section style={{ marginTop: 40 }}>
        <h2>Welcome to my Next.js App</h2>
        <p>
          This is a simple landing page built with Next.js as part of a React frameworks comparison project.
        </p>
      </section>

      <section id="features" style={{ marginTop: 40 }}>
        <h2>Features</h2>
        <ul>
          <li>Next.js App Router</li>
          <li>Server components</li>
          <li>Dynamic routing</li>
          <li>API data fetching</li>
        </ul>
      </section>

      <section id="about" style={{ marginTop: 40 }}>
        <h2>About</h2>
        <p>
          This project explores Next.js, Remix, Gatsby, and Expo.
        </p>
      </section>

      <footer style={{ marginTop: 60, borderTop: "1px solid #ddd", paddingTop: 20 }}>
        <small>© {new Date().getFullYear()} Jose Horta</small>
      </footer>

    </main>
  );
}