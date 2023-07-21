<?php
if (isset($_POST['task'])) {
  $task = $_POST['task'];

  // Here you can add code to store the task in a database or perform other actions for hotel management

  // In this example, we will just return the task as a JSON response
  $response = array('status' => 'success', 'task' => $task);
  echo json_encode($response);
} else {
  $response = array('status' => 'error', 'message' => 'Task not provided.');
  echo json_encode($response);
}
?>
