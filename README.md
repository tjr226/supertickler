# supertickler

DATA STRUCTURES for v0.1, Aug. 8 2019
BRANCH: backend-alpha

Users:
id, integer
email, string, 256 chars
password, string, 256 chars

Tasks:
id, integer
task_text, string, 1024 chars
completed_boolean, integer
hidden_boolean, integer
sequence_unix_timestamp, integer
user_id, integer, FK

# ENDPOINTS
(Token will include user_id)

## Users

Register
POST api/auth/register
Expects: { email: string, password: string }

Login
POST api/auth/login
Expects: { email: string, password: string }

## Tasks

Create
POST api/tasks/add
Expects: { task_text: string, OPTIONAL sequence_unix_timestamp: integer }
(sequence_unix_timestamp will default to current timestamp)

Complete
PUT api/tasks/:id/complete
Will change completed_boolean for task_id from 0 to 1

Hide All
PUT api/tasks/hide_all
Will change hidden_boolean to 1 for all uncompleted tasks for the logged in user

Hide one task
PUT api/tasks/:id/hide
Will change hidden_boolean from 0 to 1 for the specified task

Unhide All
PUT api/tasks/unhide_all
Will change hidden_boolean to 0 for all uncompleted tasks for the logged in user

Unhide next 24 hours
PUT api/tasks/unhide_next_24hrs
Will change hidden_boolean to 0 for all tasks that are earlier in time than current timestamp + 24hrs
Will also change hidden_boolean to 1 for all tasks that are later in time than current timestamp + 24hrs

Push and hide task
PUT api/tasks/:id/push
Expects 