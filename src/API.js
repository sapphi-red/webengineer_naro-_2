export default class API {
  constructor(userId) {
    this.userId = userId;
  }
  get baseUrl() {
    return `${API.BASE_URL}/${this.userId}`;
  }
  _fixTodo(todo) {
    const apiTodo = Object.assign({}, todo);
    delete apiTodo.waitingResponse;
    delete apiTodo.error;
    return apiTodo;
  }
  async getTodos() {
    const data = await fetch(`${this.baseUrl}/tasks`);
    return data.json();
  }
  async addTodo(todo) {
    const data = await fetch(`${this.baseUrl}/tasks`, {
      method: "POST",
      headers: API.JSON_HEADER,
      body: JSON.stringify(this._fixTodo(todo))
    });
    return data.json();
  }
  async clearTodos() {
    const data = await fetch(`${this.baseUrl}/tasks`, {
      method: "DELETE",
      mode: "cors"
    });
    return data.json();
  }
  async deleteTodo(taskId) {
    const data = await fetch(`${this.baseUrl}/tasks/${taskId}`, {
      method: "DELETE"
    });
    return data.json();
  }
  async updateTodo(taskId, todo) {
    const data = await fetch(`${this.baseUrl}/tasks/${taskId}`, {
      method: "PUT",
      headers: API.JSON_HEADER,
      body: JSON.stringify(this._fixTodo(todo))
    });
    return data.json();
  }
}
API.BASE_URL = "https://to-hutohu.trap.show/naro-todo-server";
API.JSON_HEADER = { "Content-Type": "application/json; charset=utf-8" };
