export const toForm = function (label = "", content = "") {
  return `
    <form id="accordion-form" class="ui form">
      <div class="field">
        <label for="accordion-form-title">Заголовок        
          <input type="text" id="accordion-form-title" name="title" value="${label}">
        </label>
      </div>
      <div class="field">
        <label for="accordion-form-content">Содержимое</label>
        <textarea id="accordion-form-content" name="content">${content}</textarea> 
      </div>      
      <button class="ui button" type="submit">Добавить</button>
    </form>
  `;
};

export const toAccordion = function (label = "", content = "") {
  const id = `id-${new Date().getTime()}`;
  return `
    <div class="ui styled accordion">
      <div id="${id}" class="title">
        <i class="dropdown icon"></i>
        ${label}
      </div>
      <div class="content">
        <p contenteditable="true">${content}</p>
      </div>
  `;
};
