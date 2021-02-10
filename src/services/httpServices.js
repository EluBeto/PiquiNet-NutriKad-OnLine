const services = {
  async getRequest(url) {
    try {
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      return { response: error }
    }
  },
  async postRequest(url, payload) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: payload
      })
      return await response.json()
    } catch (error) {
      return { response: error }
    }
  },
  async putRequest(url, payload) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload
      })
      return await response.json()
    } catch (error) {
      return { response: error }
    }
  }
}

export default services