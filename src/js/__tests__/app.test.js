import { JSDOM } from "jsdom";
import { Popover } from "../app";

describe("Popover widget dynamic creation", () => {
  let button, popoverInstance;

  beforeEach(() => {
    document.body.innerHTML = `
      <button 
        id="popoverBtn" 
        class="btn" 
        data-title="Test Title"
        data-content="Test content"
      >
        Click
      </button>
    `;
    button = document.getElementById("popoverBtn");
    popoverInstance = new Popover(button);
  });

  test("popover is not in DOM initially", () => {
    expect(document.querySelector(".popover")).toBeNull();
  });

  test("popover appears after first click", () => {
    button.click();
    const popover = document.querySelector(".popover");
    expect(popover).not.toBeNull();
    expect(popover.classList.contains("hidden")).toBe(false);
  });

  test("popover hides on second click", () => {
    button.click();
    button.click();
    const popover = document.querySelector(".popover");
    expect(popover.classList.contains("hidden")).toBe(true);
  });
});
