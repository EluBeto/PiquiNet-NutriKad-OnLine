const services = {
  async getRequest(url) {
    const response = await fetch(url)
    return await response.json()
  },
  async postRequest(url, payload) {
    const response = await fetch(url, {
      method: 'POST',
      body: payload
    })
    return await response.json()
  },
  async putRequest(url, payload) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })
    return await response.json()
  }
}

export default services