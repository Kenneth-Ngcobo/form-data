function handleSubmit(event) {
  event.preventDefault()
  console.log(event)
  
  /**
   * Below is a fast way of gettting form input data from multiple inputs
   */
  const form = new FormData(event.target)
  const data = Object.fromEntries(form)
  console.log(data)
}