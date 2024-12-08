function createComponent() {
  const Component = document.createElement("div");
  Component.classList.add("app-cmd-add-input");

  const label = document.createElement("label");

  const title = document.createElement("b");
  title.classList.add("app-elem-input-title");

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("value", "0");
  input.classList.add("app-elem-input");

  Component.append(label);
  label.append(title, input);

  return Component;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".app-cmd-input-list");

  const ComPutResult = () => {
    const inputComponents = [
      ...document.querySelectorAll("input[type='number'].app-elem-input"),
    ];
    const result = inputComponents.reduce((result, input) => {
      return result + input.valueAsNumber;
    }, 0);

    const output = document.querySelector("output.app-elem-result");
    output.value = result;
  };

  const addComponent = () => {
    const inputComponent = createComponent();
    const title = inputComponent.querySelector(".app-elem-input-title");
    title.textContent = `Number ${
      container.querySelectorAll(".app-cmd-add-input").length + 1
    }`;
    container.append(inputComponent);
    inputComponent
      .querySelector("input")
      .addEventListener("change", ComPutResult);
    ComPutResult();
  };

  document
    .querySelector(".app-cmd-add-input")
    .addEventListener("click", addComponent);

  addComponent();
});
