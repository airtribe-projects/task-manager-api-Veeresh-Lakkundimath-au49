The "task-manager-api" project contains the API related to Create, Read, Update and Delete the Tasks(present in memory).The directory "task-manager-api" contains the entry point "index.js" for the express server. 

Project setup:
0. Install node into your local machine.
1. Create a directory "task-manager-api"
2. Initialize the directory with nom init
3. Install express.js by running "nom install express" or "npm i express".
4. After successfully installing express , create a "index.js" file, import the express module,setup the server(
by creating a express instance) and create the API's related to task management

API details

1. Get All Tasks
endpoint: /tasks
httpMethod: GET
usage: Retrieves all tasks from the database.

2. Get Task by ID and Level
endpoint: /tasks/:id?/level
httpMethod: GET
usage: Retrieves a specific task by ID.
params:
id (required): The ID of the task to retrieve.
body: None

3.Create a New Task
endpoint: /tasks
httpMethod: POST
usage: Creates a new task.
body:{
  "title": "New Task Title",
  "description": "Description of the new task",
  "completed": true/false
}
Response: {
  "message": "task created successfully!"
}


4. Delete Task by ID
endpoint: /tasks/:id
httpMethod: DELETE
usage: Deletes a task by ID.
params:
id (required): The ID of the task to delete.

Response:{
  "message": "task deleted successfully!"
}

If id does not exists
{
  "message": "no data found"
}

5. Update Task by ID
endpoint: /tasks/:id
httpMethod: PUT
usage: Updates a task by ID.
params:
id (required): The ID of the task to update.

body:{
  "id": 1,
  "title": "Updated Task Title",
  "description": "Updated Description",
  "completed": true/false,
  "priority": "low/medium/high"
}

Response:{
  "message": "Tasks updated successfully!"
}

If the tast ID does not exist
{
  "message": "ID does not exist"
}

6. Get Tasks by Completion Status
endpoint: /tasks/?completed
httpMethod: GET
usage: Retrieves tasks filtered by their completion status.
params:
completed (required): Boolean value (true or false) indicating whether to retrieve completed or incomplete tasks.

Response:{
"tasks": [
{
"id": 1,
"title": "Set up environment",
"description": "Install Node.js, npm, and git",
"completed": true,
"priority": "low",
"creaatedAt": "2025-03-07T00:00:00.000Z"
}
]
    }

If an invalid completed value is provided:
{
  "message": "Invalid input"
}


   

