export default async function UsersPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
  
    return (
      <main style={{ padding: 40 }}>
        <h1>Users</h1>
  
        <ul style={{ marginTop: 20 }}>
          {users.map((user: any) => (
            <li key={user.id} style={{ marginBottom: 10 }}>
              <a href={`/users/${user.id}`}>
                {user.name}
              </a>
            </li>
          ))}
        </ul>
  
        <br />
        <a href="/">← Back Home</a>
      </main>
    );
  }