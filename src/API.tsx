
const baseUrl = 'http://192.168.42.37:8080';

export default {
  solid: (c: String) =>
    fetch(`${baseUrl}/led/solid?color=${c}`, {
      method: 'POST',
    })
}