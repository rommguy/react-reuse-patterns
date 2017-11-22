const getRandomColor = () => Math.floor(Math.random() * 255)


export function getRandomColorStyleValue() {
  const red = getRandomColor()
  const green = getRandomColor()
  const blue = getRandomColor()

  return `rgb(${red},${green},${blue})`
}