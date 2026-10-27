// Only variables prefixed with VITE_ are exposed to the client.
export const env = {
  apiUrl: import.meta.env.VITE_API_URL as string | undefined,
}
