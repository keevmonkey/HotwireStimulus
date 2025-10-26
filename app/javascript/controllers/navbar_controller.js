import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = [ 'navbarMenuItem' ]
  connect() {
    this.navbarMenuItemTargets.forEach(elem=> {
      if (this.isCurrentPage(elem)) this.setActive(elem)
    })
  }
  setActive(el) {
    el.classList.add('active')
  }
  isCurrentPage(elem) {
    return elem.getAttribute('href').split('/')[1] == window.location.pathname.split('/')[1]
  }
}
