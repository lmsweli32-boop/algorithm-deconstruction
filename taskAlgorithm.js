Code Implementation 

function calculateTaskScore(task) {
  const priorityWeights = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    URGENT: 4
  };

  let score = (priorityWeights[task.priority] || 0) * 10;

  if (task.dueDate) {
    const now = new Date();
    const dueDate = new Date(task.dueDate);
    const daysUntilDue = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));

    if (daysUntilDue < 0) {
      score += 30;
    } else if (daysUntilDue === 0) {
      score += 20;
    } else if (daysUntilDue <= 2) {
      score += 15;
    } else if (daysUntilDue <= 7) {
      score += 10;
    }
  }

  if (task.status === "DONE") {
    score -= 50;
  } else if (task.status === "REVIEW") {
    score -= 15;
  }

  if (task.tags.some(tag => ["blocker", "critical", "urgent"].includes(tag))) {
    score += 8;
  }

  const now = new Date();
  const updatedAt = new Date(task.updatedAt);
  const daysSinceUpdate = Math.floor((now - updatedAt) / (1000 * 60 * 60 * 24));

  if (daysSinceUpdate < 1) {
    score += 5;
  }

  return score;
}

function sortTasksByImportance(tasks) {
  return [...tasks].sort((a, b) => {
    return calculateTaskScore(b) - calculateTaskScore(a);
  });
}

function getTopPriorityTasks(tasks, limit = 5) {
  const sortedTasks = sortTasksByImportance(tasks);
  return sortedTasks.slice(0, limit);
}
