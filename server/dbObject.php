<?php
header('Content-type: application/json; charset=UTF-8');
error_reporting(E_ALL);
error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', 1);
error_reporting(E_ALL | E_STRICT);
set_error_handler("var_dump");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Expose-Headers: X-Total-Count");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Credentials');
header('Access-Control-Request-Headers: Access-Control-Allow-Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Credentials');

//class init
class sqlinit
{
    private $conn;

    public function __construct()
    {
        $dbUser = "lharpuradmin";
        $dbPass = "km0OuRBJJVBJbZB8";
        $this->conn = new PDO("mysql:host=localhost;dbname=retailapp;", $dbUser, $dbPass);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function inputFilter($data)
    {
        try {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function log()
    {
        try {
            $this->conn
                ->prepare("INSERT INTO logdb (ip_address, referer, url_referer, method_type, log_created) VALUES ( :ip_address, :referer, :url_referer, :method_type,  :log_created)")
                ->execute([
                    'ip_address' => $_SERVER['REMOTE_ADDR'],
                    'referer' => $_SERVER['HTTP_REFERER'],
                    'url_referer' => $_SERVER['REQUEST_URI'],
                    'method_type' => $_SERVER['REQUEST_METHOD'],
                    'log_created' => date('Y-m-d H:i:s'),
                ]);
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function addUser($fname, $lname, $email, $password)
    {
        try {
            $this->conn
                ->prepare("INSERT INTO userdb (fname, lname, password, email ) VALUES (:fname, :lname, :password, :email)")
                ->execute([
                    'fname' => $fname,
                    'lname' => $lname,
                    'password' => $password,
                    'email' => $email
                ]);
        } catch (PDOException $e) {
            throw $e;
        }
    }

    // Logging Functions

    public function login($email, $password)
    {
        try {
            $stmt = $this->conn
                ->prepare('SELECT userId, email, password FROM userdb WHERE email = :email');
            $stmt->execute([
                ':email' => $email
            ]);
            $rows = $stmt->fetch();
            if (password_verify($password, $rows['password'])) {
                $_SESSION['email'] = $email;
                $_SESSION['userId'] = $rows['userId'];
                $_SESSION['logged'] = true;
            } else {
                throw new Exception("Log in failed");
            }
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function logout()
    {
        session_unset();
        session_destroy();
        session_start();
    }

    public function usercheck()
    {
        return array_key_exists('userId', $_SESSION);
    }

    //Admin Functions

    public function addAlbum($title, $artist, $image, $format, $cat, $label, $price, $releaseDate, $quantity, $copies_sold)
    {
        try {
            $this->conn
                ->prepare("INSERT INTO albums (title, artist, image, format, cat, label, price, releaseDate, quantity, copies_sold) VALUES (:title, :artist, :image, :format, :cat, :label, :price, :releaseDate, :quantity, :copies_sold)")
                ->execute([
                    'title' => $title,
                    'artist' => $artist,
                    'image' => $image,
                    'format' => $format,
                    'cat' => $cat,
                    'label' => $label,
                    'price' => $price,
                    'releaseDate' => $releaseDate,
                    'quantity' => $quantity,
                    'copies_sold' => $copies_sold
                ]);
        } catch (PDOException $e) {
            throw $e;
        }
    }
    //Finish Update Function
    public function updateAlbum($title, $artist, $image, $format, $cat, $label, $price, $releaseDate, $quantity, $copies_sold)
    {
        try {
            $this->conn
                ->prepare("UPDATE albums (title, artist, image, format, cat, label, price, releaseDate, quantity, copies_sold) VALUES (:title, :artist, :image, :format, :cat, :label, :price, :releaseDate, :quantity, :copies_sold)  WHERE title = :title")
                ->execute([
                    'title' => $title,
                    'artist' => $artist,
                    'image' => $image,
                    'format' => $format,
                    'cat' => $cat,
                    'label' => $label,
                    'price' => $price,
                    'releaseDate' => $releaseDate,
                    'quantity' => $quantity,
                    'copies_sold' => $copies_sold
                ]);
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function displayProduct($title)
    {
        try {
            $stmt = $this->conn->prepare('SELECT  title, artist, image, format, cat, label, album_id, price, releaseDate, quantity, copies_sold FROM albums WHERE title = :title');
            $stmt->execute([
                'title' => $title
            ]);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
            return json_encode($result);
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function displayProducts()
    {
        try {
            $stmt = $this->conn
                ->prepare('SELECT title, artist, image, format, cat, label, album_id, price, releaseDate, quantity, copies_sold FROM albums');
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
            return json_encode($result);
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function displayUser()
    {
        try {
            $stmt = $this->conn
                ->prepare('SELECT fname, lname, email FROM userdb');
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
            return json_encode($result);
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function updatePopulate($title)
    {
        try {
            $stmt = $this->conn
                ->prepare('SELECT title, artist, image, format, cat, label, price, releaseDate, quantity, copies_sold FROM albums WHERE title = :title');
            $stmt->execute([
                'title' => $title
            ]);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
            return json_encode($result);
        } catch (PDOException $e) {
            throw $e;
        }
    }

    public function selectPopulate()
    {
        try {
            $stmt = $this->conn
                ->prepare('SELECT title, album_id FROM albums');
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
            return json_encode($result);
        } catch (PDOException $e) {
            throw $e;
        }
    }


    public function deleteProducts($title)
    {
        try {
            $stmt = $this->conn
                ->prepare('DELETE FROM albums WHERE title = :title');
            $stmt->execute([
                'title' => $title
            ]);
        } catch (PDOException $e) {
            throw $e;
        }
    }
}
