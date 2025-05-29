export class Popover {
  constructor(button) {
    this.button = button;
    this.title = button.dataset.title;
    this.content = button.dataset.content;
    this.popover = null;

    this.button.addEventListener("click", () => this.toggle());
  }

  createPopover() {
    const wrapper = document.createElement("div");
    wrapper.className = "popover hidden";

    const header = document.createElement("div");
    header.className = "popover-header";
    header.textContent = this.title;

    const body = document.createElement("div");
    body.className = "popover-body";
    body.textContent = this.content;

    wrapper.appendChild(header);
    wrapper.appendChild(body);

    this.popover = wrapper;
    this.button.parentNode.insertBefore(wrapper, this.button.nextSibling);
  }

  toggle() {
    if (!this.popover) {
      this.createPopover();
    }
    this.popover.classList.toggle("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("popoverBtn");
  new Popover(btn);
});

