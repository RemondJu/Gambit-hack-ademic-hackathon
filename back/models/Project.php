<?php
/**
 * Created by PhpStorm.
 * User: vladimir
 * Date: 24/11/18
 * Time: 01:19
 */

class Project {
    private $conn;
    private $table = "projects";

    public $id;
    public $category_id;
    public $category_name;
    public $name;
    public $description;
    public $image;
    public $goal;
    public $balance;
    public $distance;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function read()
    {
        //Query
        $query = 'SELECT c.name as category_name, p.id, p.category_id, p.name, p.description, p.image, p.goal, p.balance, p.distance
                                FROM ' . $this->table . ' p
                                LEFT JOIN
                                  categories c ON p.category_id = c.id';

        //Prepare statement
        $statement = $this->conn->prepare($query);

        $statement->execute();

        return $statement;
    }

    public function selectOneById(){
        //Query
        $query = 'SELECT c.name as category_name, p.id, p.category_id, p.name, p.description, p.image, p.goal, p.balance, p.distance
                                FROM ' . $this->table . ' p
                                LEFT JOIN
                                  categories c ON p.category_id = c.id WHERE p.id = ? LIMIT 0,1';

        //Prepare statement
        $statement = $this->conn->prepare($query);

        $statement->bindParam(1, $this->id);

        $statement->execute();

        $row = $statement->fetch(PDO::FETCH_ASSOC);

        $this->name = $row['name'];
        $this->description = $row['description'];
        $this->image = $row['image'];
        $this->goal = $row['goal'];
        $this->balance = $row['balance'];
        $this->distance = $row['distance'];
        $this->category_id = $row['category_id'];
        $this->category_name = $row['category_name'];
    }

    // Create Project
    public function create() {
        // Create query
        $query = 'INSERT INTO ' . $this->table . ' SET name = :name, description = :description, image = :image, goal = :goal, balance = :balance, distance = :distance, category_id = :category_id';
        // Prepare statement
        $statement = $this->conn->prepare($query);
        // Clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->image = htmlspecialchars(strip_tags($this->image));
        $this->goal = htmlspecialchars(strip_tags($this->goal));
        $this->balance = htmlspecialchars(strip_tags($this->balance));
        $this->distance = htmlspecialchars(strip_tags($this->distance));
        $this->category_id = htmlspecialchars(strip_tags($this->category_id));
        // Bind data
        $statement->bindParam(':name', $this->name);
        $statement->bindParam(':description', $this->description);
        $statement->bindParam(':image', $this->image);
        $statement->bindParam(':goal', $this->goal);
        $statement->bindParam(':balance', $this->balance);
        $statement->bindParam(':distance', $this->distance);
        $statement->bindParam(':category_id', $this->category_id);
        // Execute query
        if($statement->execute()) {
            return true;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $statement->error);
        return false;
    }

    // Update Project
    public function update() {
        // Create query
        $query = 'UPDATE ' . $this->table . ' SET name = :name, description = :description, image = :image, goal = :goal, balance = :balance, category_id = :category_id, distance = :distance
                                WHERE id = :id';
        // Prepare statement
        $statement = $this->conn->prepare($query);
        // Clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->image = htmlspecialchars(strip_tags($this->image));
        $this->goal = htmlspecialchars(strip_tags($this->goal));
        $this->balance = htmlspecialchars(strip_tags($this->balance));
        $this->distance = htmlspecialchars(strip_tags($this->distance));
        $this->category_id = htmlspecialchars(strip_tags($this->category_id));
        $this->id = htmlspecialchars(strip_tags($this->id));
        // Bind data
        $statement->bindParam(':name', $this->name);
        $statement->bindParam(':description', $this->description);
        $statement->bindParam(':image', $this->image);
        $statement->bindParam(':goal', $this->goal);
        $statement->bindParam(':balance', $this->balance);
        $statement->bindParam(':distance', $this->distance);
        $statement->bindParam(':category_id', $this->category_id);
        $statement->bindParam(':id', $this->id);
        // Execute query
        if($statement->execute()) {
            return true;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $statement->error);
        return false;
    }

    // Delete Project
    public function delete() {
        // Create query
        $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';
        // Prepare statement
        $statement = $this->conn->prepare($query);
        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));
        // Bind data
        $statement->bindParam(':id', $this->id);
        // Execute query
        if($statement->execute()) {
            return true;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $statement->error);
        return false;
    }
}