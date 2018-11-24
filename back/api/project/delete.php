<?php
/**
 * Created by PhpStorm.
 * User: vladimir
 * Date: 24/11/18
 * Time: 10:51
 */

  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  include_once '../../config/DatabaseConnect.php';
  include_once '../../models/Project.php';
  // Instantiate DB & connect
  $database = new DatabaseConnect();
  $db = $database->connect();
  // Instantiate blog project object
  $post = new Project($db);
  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  // Set ID to update
  $post->id = $data->id;
  // Delete project
  if($post->delete()) {
      echo json_encode(
          array('message' => 'Project Deleted')
      );
  } else {
      echo json_encode(
          array('message' => 'Project Not Deleted')
      );
  }