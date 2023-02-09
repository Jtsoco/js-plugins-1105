import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["reset", "clickme"]

  connect() {
    console.log("Hello from our first Stimulus controller")
    console.log(this.resetTarget)
    console.log(this.clickmeTarget)
  }

  disable(event) {
    console.log("clicked")
    const clickedButton = event.currentTarget
    clickedButton.innerText = "👾"
    clickedButton.disabled = true

    this.resetTarget.classList.remove("d-none")
  }

  enable(event) {
    console.log("enable!!")
    const clickMe = this.clickmeTarget
    clickMe.innerText = "Click me again!"
    clickMe.disabled = false

    // this.resetTarget.classList.add("d-none")
    event.currentTarget.classList.add("d-none")
  }
}