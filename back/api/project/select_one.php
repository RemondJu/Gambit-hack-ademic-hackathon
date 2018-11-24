<?php
/**
 * Created by PhpStorm.
 * User: vladimir
 * Date: 24/11/18
 * Time: 09:24
 */

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

$post->id = isset($_GET['id']) ? $_GET['id'] : die();

$post->selectOneById();

$post_arr = [
  'id' => $post->id,
  'name' => $post->name,
  'description' => $post->description,
  'image' => $post->image,
  'goal' => $post->goal,
  'balance' => $post->balance,
  'category_id' => $post->category_id,
  'category_name' => $post->category_name
];

echo json_encode($post_arr);