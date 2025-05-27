describe("Popover toggle behavior", () => {
  let button, popover;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="popover-wrapper">
        <button id="popoverBtn" class="btn">Click to toggle popover</button>
        <div id="popover" class="popover hidden">
          <div class="popover-header">Popover title</div>
          <div class="popover-body">
            And here's some amazing content. It's very engaging. Right?
          </div>
        </div>
      </div>
    `;

    button = document.getElementById("popoverBtn");
    popover = document.getElementById("popover");

    button.addEventListener("click", () => {
      popover.classList.toggle("hidden");
    });
  });

  test("popover is initially hidden", () => {
    expect(popover.classList.contains("hidden")).toBe(true);
  });

  test("popover becomes visible after button click", () => {
    button.click();
    expect(popover.classList.contains("hidden")).toBe(false);
  });

  test("popover hides again on second click", () => {
    button.click();
    button.click();
    expect(popover.classList.contains("hidden")).toBe(true);
  });
});
