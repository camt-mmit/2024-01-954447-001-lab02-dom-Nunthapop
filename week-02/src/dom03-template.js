function createComponent(template) {
  return template.content.cloneNode(true).firstElementChild;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".app-cmd-input-list");
  const template = document.querySelector("template.app-tmpl-input");

  /**
   * Calculate the sum of all number inputs in the page and
   * update the result output element.
   */
  const computeResult = () => {
    const inputComponents = [
      ...document.querySelectorAll("input[type='number'].app-elem-input"),
    ];
    const result = inputComponents.reduce((result, input) => {
      return result + (input.valueAsNumber || 0); // Handle empty inputs gracefully
    }, 0);

    const output = document.querySelector("output.app-elem-result");
    output.value = result;
  };

  const addComponent = () => {
    const inputComponent = createComponent(template);
    const title = inputComponent.querySelector(".app-elem-title");
    title.textContent = `Number ${
      container.querySelectorAll(".app-cmd-input").length + 1
    }`;
    container.append(inputComponent);
    inputComponent
      .querySelector("input")
      .addEventListener("input", computeResult);
    computeResult();
  };

  document
    .querySelector(".app-cmd-add-input")
    .addEventListener("click", addComponent);

  // Add the first input component on page load
  // addComponent();
});
