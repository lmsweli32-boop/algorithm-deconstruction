# algorithm-deconstruction
# Algorithm Deconstruction: Task Priority Scoring, Sorting & Filtering

## Description
This project demonstrates a task prioritization algorithm that calculates a dynamic score based on multiple factors such as priority, due date, task status, tags, and recent updates. The algorithm then sorts tasks based on their importance and returns the highest priority tasks.

---

## 1. Overview

This algorithm is designed to intelligently rank and organize tasks based on their importance. Instead of simply sorting tasks by a fixed priority, it calculates a dynamic **task score** using multiple factors.

The algorithm then sorts tasks based on this score and returns the most important tasks. This approach reflects how real-world task management systems prioritize work.

---

## 2. Inputs and Outputs

### Input Example
```json
[
  {
    "task": "Finish project report",
    "priority": "HIGH",
    "dueDate": "2026-03-20",
    "status": "IN_PROGRESS",
    "tags": ["critical"],
    "updatedAt": "2026-03-19"
  },
  {
    "task": "Clean desk",
    "priority": "LOW",
    "status": "DONE",
    "tags": [],
    "updatedAt": "2026-03-10"
  }
]
Output Example
[
  {
    "task": "Finish project report",
    "score": 63
  }
]
The algorithm calculates a score for each task. Tasks with higher scores are more important. Completed tasks receive lower scores, while urgent and recently updated tasks receive higher scores.

Step-by-Step Algorithm Breakdown
The algorithm receives a list of tasks
Each task is passed into a scoring function
A score is calculated based on:
Priority level
Due date urgency
Task status
Tags
Last updated time
All tasks are sorted based on their scores (highest first)
The top tasks are selected based on a specified limit
The final prioritized list is returned

Visual Representation
