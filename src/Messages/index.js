import { toMessage, toForm } from "./templates";
import { htmlToJs } from "../utils";

import "./index.css";

export default class Message {
  static get toolbox() {
    return {
      title: "Messages",
      icon: '<svg aria-hidden="true" width="16" focusable="false" data-prefix="fas" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
    this.wrapper = null;
    this.view = {};
    // this._buildView();
  }

  // _buildView() {
  // this.view.form = htmlToJs(toForm());
  // }

  render() {
    // рендерим форму для ввода данных
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("messages-wrapper");
    this.wrapper.appendChild(
      htmlToJs(toForm(this.data.title, this.data.content))
    );

    const $form = this.wrapper.querySelector("form");
    if (this.data.title && this.data.content) {
      $form.style.display = "none";
      const message = this._createMessage(this.data.title, this.data.content);
      this.wrapper.appendChild(message);
    }

    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      const { target } = e;
      const [$title, $content] = target;

      $form.style.display = "none";

      const message = this._createMessage($title.value, $content.value);
      this.wrapper.appendChild(message);
    });

    return this.wrapper;
  }

  save(blockContent) {
    // blockContent - весь отрендеренный блок
    // console.log("block content ", blockContent);
    // находим введенный заголовок
    const $label = blockContent.querySelector(
      ".messages-wrapper > .message > .header"
    );
    console.log("check label ", $label.innerHTML);
    // находим введенный текст
    const $content = blockContent.querySelector(
      ".messages-wrapper > .message > p"
    );

    return {
      title: $label.innerHTML,
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

  _createMessage(title, content) {
    console.log("create message ", title, content);
    const message = htmlToJs(toMessage(title, content));
    // message
    //   .querySelector("div.messages-wrapper > .message > .header")
    //   .querySelector("div.messages-wrapper > .message > p");
    // .addEventListener("click", ({ target }) => {
    //   target.classList.toggle("active");
    //   target.nextElementSibling?.classList.toggle("active");
    // });
    return message;
  }
}
