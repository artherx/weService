

export async function autoFetch(route: string, data: any) {
    const response = await fetch('/api/valid-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
}