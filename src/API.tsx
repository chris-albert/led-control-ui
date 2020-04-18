
const baseUrl = 'http://192.168.42.37:8080';

export default {
  solid: (r: number, g: number, b: number) =>
    fetch(`${baseUrl}/led/solid?r=${r}&g=${g}&b=${b}`, {
      method: 'POST',
    }),

  brightness: (b: number) =>
    fetch(`${baseUrl}/led/brightness/${b}`, {
      method: 'POST',
    }),
  animate: (name: string, o: object) => {
    const arr = [];
    for (let [key, value] of Object.entries(o)) {
      arr.push(`${key}=${value.toString()}`)
    }
    fetch(`${baseUrl}/led/animate/${name}?${arr.join('&')}`, {
      method: 'POST',
    })
  },
  stopAnimate: () =>
    fetch(`${baseUrl}/led/animate/stop`, {
      method: 'POST',
    })
}