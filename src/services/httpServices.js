const services = {
  async postRequest(url, payload) {
    const response = await fetch(url, {
      method: 'POST',
      body: payload
    })
    return await response.json()
  }
}

export default services