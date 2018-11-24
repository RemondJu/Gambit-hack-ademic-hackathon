<?php
/**
 * Created by PhpStorm.
 * User: vladimir
 * Date: 24/11/18
 * Time: 00:56
 */

class DatabaseConnect {

    private $host = "localhost";
    private $db_name = "db_api";
    private $username = "root";
    private $password = "seA1942ttle!";
    private $conn;

    public function connect(){
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" .
                $this->db_name,$this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }

}
