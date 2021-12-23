import { toAccordion, toForm } from "./templates";
import { htmlToJs } from "../utils";

import "./index.css";

export default class Accordion {
  static get toolbox() {
    return {
      title: "Accordion",
      icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-square-up" class="svg-inline--fa fa-caret-square-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 432V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48zm355.515-140.485l-123.03-123.03c-4.686-4.686-12.284-4.686-16.971 0L92.485 291.515c-7.56 7.56-2.206 20.485 8.485 20.485h246.059c10.691 0 16.045-12.926 8.486-20.485z"></path></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
    this.wrapper = null;
    this.view = {};
    this._buildView();
  }

  _buildView() {
    // this.view.form = htmlToJs(toForm());
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("accordion-wrapper");
    this.wrapper.appendChild(
      htmlToJs(toForm(this.data.title, this.data.content))
    );

    const $form = this.wrapper.querySelector("form");
    if (this.data.title && this.data.content) {
      $form.style.display = "none";
      const accordion = this._createAccordion(
        this.data.title,
        this.data.content
      );
      this.wrapper.appendChild(accordion);
    }

    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      const { target } = e;
      const [$title, $content] = target;

      $form.style.display = "none";

      const accordion = this._createAccordion($title.value, $content.value);
      this.wrapper.appendChild(accordion);
    });

    return this.wrapper;
  }

  save(blockContent) {
    const $label = blockContent.querySelector(".accordion > .title");
    const $content = blockContent.querySelector(
      ".accordion > .content > p[contenteditable=true]"
    );
    return {
      title: $label.innerText,
      content: $content.innerHTML,
    };
  }

  validate(savedData) {
    console.log("validate savedData", savedData);
    if (!savedData.title.trim()) {
      return false;
    }
    if (!savedData.content.trim()) {
      return false;
    }

    return true;
  }

  _createAccordion(title, content) {
    const accordion = htmlToJs(toAccordion(title, content));
    accordion
      .querySelector("div.accordion > .title")
      .addEventListener("click", ({ target }) => {
        target.classList.toggle("active");
        target.nextElementSibling?.classList.toggle("active");
      });
    return accordion;
  }
}
