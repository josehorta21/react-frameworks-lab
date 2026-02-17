type PageProps = {
    params: Promise<{ id: string }>;
  };
  
  export default async function UserProfilePage({ params }: PageProps) {
    const { id } = await params;
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      cache: "no-store",
    });
  
    const user = await res.json();
  
    if (!user?.id) {
      return (
        <main style={{ padding: 40 }}>
          <h1>User not found</h1>
          <a href="/users">← Back to Users</a>
        </main>
      );
    }
  
    return (
      <main style={{ padding: 40, lineHeight: 1.6 }}>
        <h1>{user.name}</h1>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>
        <br />
        <a href="/users">← Back to Users</a>
      </main>
    );
  }