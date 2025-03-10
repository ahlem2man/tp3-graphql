let tasks = [
    {
      id: '1',
      title: 'Développement Front-end',
      description: 'Créer une interface React pour un site e-commerce.',
      completed: false,
    },
    {
      id: '2',
      title: 'Développement Back-end',
      description: "Implémenter une API avec Node.js et Express.",
      completed: false,
    },
    {
      id: '3',
      title: 'Tests et Qualité',
      description: 'Réaliser des tests unitaires et fonctionnels.',
      completed: false,
    },
  ];
  
  const taskResolver = {
    Query: {
      task: (_, { id }) => tasks.find(task => task.id === id),
      tasks: () => tasks,
    },
    Mutation: {
        addTask: (_, { title, description, completed, duration }) => {
            const task = { id: String(tasks.length + 1), title, description, completed, duration };
            tasks.push(task);
            return task;
          },
          
      completeTask: (_, { id }) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
          tasks[taskIndex].completed = true;
          return tasks[taskIndex];
        }
        return null;
      },
      changeDescription: (_, { id, description }) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
          task.description = description;
          return task;
        }
        return null;
      },
      
      deleteTask: (_, { id }) => {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
          tasks.splice(index, 1);
          return true;
        }
        return false;
      },
      
      
      
    },
  };
  
  module.exports = taskResolver;
  