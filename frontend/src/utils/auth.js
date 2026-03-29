export const getUserIdFromToken = (token) => {
  if (!token) return null

  try {
    const payload = token.split('.')[1]
    const decoded = JSON.parse(atob(payload))
    return decoded.id || decoded.userId || null
  } catch (error) {
    return null
  }
}
