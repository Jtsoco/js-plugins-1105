import { Controller } from "@hotwired/stimulus";
import Sortable from "sortablejs"

export default class extends Controller {
  connect() {
    console.log("Hello from sortable controller");
    // this.element refers to the HTML element that contains the data-controller attribute (in our case <ul>)
    const results = this.element;
    Sortable.create(results, {
      ghostClass: "ghost",
      animation: 1500,
      onEnd: (event) => {
        // alert(`${event.oldIndex} moved to ${event.newIndex}`)
      },
    });
  }
}
