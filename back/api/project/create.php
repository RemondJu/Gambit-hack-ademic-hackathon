<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
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
$post->name = $data->name;
$post->description = $data->description;
$post->image = $data->image;
$post->goal = $data->goal;
$post->balance = $data->balance;
$post->category_id = $data->category_id;
// Create project
if($post->create()) {
    echo json_encode(
        array('message' => 'Project added')
    );
} else {
    echo json_encode(
        array('message' => 'Project hasn\'t been added')
    );
}