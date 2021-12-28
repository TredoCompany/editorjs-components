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
    // this.data = data;
    this.wrapper = null;
    this.view = {};
    // this._buildView();

    this.data = {
      title: data.title || "",
      content: data.content || "",
      typeInfo: data.typeInfo !== undefined ? data.typeInfo : false,
      withBackground:
        data.withBackground !== undefined ? data.withBackground : false,
      stretched: data.stretched !== undefined ? data.stretched : false,
    };

    // добавляем кнопки для выбора типа сообщения
    this.settings = [
      {
        name: "typeInfo",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" class="svg-inline--fa fa-info fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>`,
      },
      {
        name: "stretched",
        icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`,
      },
      {
        name: "withBackground",
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`,
      },
    ];
  }

  // _buildView() {
  // this.view.form = htmlToJs(toForm());
  // }
  renderSettings() {
    // список кнопок
    const settings = [
      {
        name: "typeInfo",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" class="svg-inline--fa fa-info fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>`,
      },
      {
        name: "stretched",
        icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`,
      },
      {
        name: "withBackground",
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`,
      },
    ];
    // обертка для списка кнопок
    const wrapper = document.createElement("div");
    // каждая кнопка
    settings.forEach((tune) => {
      let button = document.createElement("div");

      button.classList.add("cdx-settings-button");
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);
      // обрабатываем название кнопки при клике на нее
      button.addEventListener("click", () => {
        this._toggleTune(tune.name);
        button.classList.toggle("cdx-settings-button--active");
      });
    });

    return wrapper;
  }

  /**
   * @private
   * Click on the Settings Button
   * @param {string} tune — tune name from this.settings
   */
  _toggleTune(tune) {
    this.data[tune] = !this.data[tune];
    console.log("Image tune clicked", tune, this.data);
  }

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

    // находим введенный текст
    const $content = blockContent.querySelector(
      ".messages-wrapper > .message > p"
    );
    // title: $label.innerHTML,
    // content: $content.innerHTML,
    return Object.assign(this.data, {
      title: $label.innerHTML,
      content: $content.innerHTML,
    });
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
