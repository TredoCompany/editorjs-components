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
      typeInfo: data.typeInfo || "",
      // withBackground:
      //   data.withBackground !== undefined ? data.withBackground : false,
      // stretched: data.stretched !== undefined ? data.stretched : false,
    };

    // добавляем кнопки для выбора типа сообщения
    this.settings = [
      {
        name: "info",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" class="svg-inline--fa fa-info fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>`,
      },
      {
        name: "warning",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>`,
      },
      {
        name: "success",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>`,
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
        name: "info",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" class="svg-inline--fa fa-info fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>`,
      },
      {
        name: "warning",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>`,
      },
      {
        name: "success",
        icon: `<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>`,
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
        // console.log("tune name", tune.name);
      });
    });

    return wrapper;
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
      const message = this._createMessage(
        this.data.title,
        this.data.content,
        this.data.typeInfo
      );
      this.wrapper.appendChild(message);
    }

    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      const { target } = e;
      const [$title, $content] = target;

      $form.style.display = "none";

      const message = this._createMessage(
        $title.value,
        $content.value,
        this.data.typeInfo
      );
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
    // console.log("validate savedData", savedData);
    if (!savedData.title.trim()) {
      return false;
    }
    if (!savedData.content.trim()) {
      return false;
    }

    return true;
  }

  _createMessage(title, content, currentClass) {
    // console.log("create message ", title, content);
    // Вызываем метод htmlToJs - для рендера html из шаблона (шаблон toMessage, с передачей параметов)
    const message = htmlToJs(toMessage(title, content, currentClass));
    // message
    //   .querySelector("div.messages-wrapper > .message > .header")
    //   .querySelector("div.messages-wrapper > .message > p");
    // .addEventListener("click", ({ target }) => {
    //   target.classList.toggle("active");
    //   target.nextElementSibling?.classList.toggle("active");
    // });
    return message;
  }

  /**
   * @private
   * Click on the Settings Button
   * @param {string} tune — tune name from this.settings
   * При клике добавить название кнопки в тип this.data.typeInfo
   */
  _toggleTune(tune) {
    this.data.typeInfo = tune;
    // console.log("on click tune is", tune, this.data);

    let currentLabel = this.wrapper.querySelector(
      ".messages-wrapper > .message > .header"
    );
    let currentContent = this.wrapper.querySelector(
      ".messages-wrapper > .message > p"
    );

    const message = this._createMessage(
      currentLabel.innerHTML,
      currentContent.innerHTML,
      this.data.typeInfo
    );
    this.wrapper.innerHTML = "";
    this.wrapper.appendChild(message);

    // console.log("Image tune clicked", tune, this.data);
  }
}
