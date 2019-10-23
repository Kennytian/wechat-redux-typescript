let nextTodoId = 4;

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id,
});
