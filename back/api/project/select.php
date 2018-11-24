<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include_once '../../config/DatabaseConnect.php';
include_once '../../models/Project.php';
// Instantiate DB & connect
$database = new DatabaseConnect();
$db = $database->connect();
// Instantiate blog project object
$post = new Project($db);
// Blog project query
$result = $post->read();
// Get row count
$num = $result->rowCount();
// Check if any posts
if($num > 0) {
    // Project array
    $posts_arr = array();
    // $posts_arr['data'] = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        //ar_dump($row);
        //die();
        extract($row);
        $post_item = array(
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'image' => $image,
            'category_id' => $category_id,
            'category_name' => $category_name,
            'goal' => $goal,
            'balance' => $balance,
        );
        // Push to "data"
        array_push($posts_arr, $post_item);
        // array_push($posts_arr['data'], $post_item);
    }
    // Turn to JSON & output
    echo json_encode($posts_arr);
} else {
    // No Posts
    echo json_encode(
        array('message' => 'No Posts Found')
    );
}