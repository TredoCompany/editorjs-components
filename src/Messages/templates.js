export const toForm = function (label = "", content = "") {
  return `
    <form id="messages-form" class="ui form">
      <div class="field">
        <label for="messages-form-title">Заголовок        
          <input type="text" id="messages-form-title" name="title" value="${label}">
        </label>
      </div>
      <div class="field">
        <label for="messages-form-content">Содержимое</label>
        <textarea id="messages-form-content" name="content">${content}</textarea> 
      </div>      
      <button class="ui button" type="submit">Добавить</button>
    </form>
  `;
};

export const toMessage = function (label = "", content = "") {
  return `
  <div class="ui message">
      <div class="header">${label}</div>
      <p>${content}</p>
    </div>
    
  `;
};
