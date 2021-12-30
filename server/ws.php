<?php
//Headers

//Errors and Exceptions
header('Content-type: application/json; charset=UTF-8');
error_reporting(E_ALL);
error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', 1);
error_reporting(E_ALL | E_STRICT);
set_error_handler("var_dump");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Expose-Headers: X-Total-Count");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Credentials');
header('Access-Control-Request-Headers: Access-Control-Allow-Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Credentials');
// Includes
include('./dbObject.php');

//Init Class
$sqlaction = new sqlinit;
//Session

session_start();

//Switch Case

if (isset($_POST['form_post'])) {
    switch ($_POST['form_post']) {
        case 'register':
            try {
                if (!empty($_POST['fname'])) {
                    $fname = $sqlaction->inputFilter(($_POST['fname']));
                } else {
                    throw new exception("Error - Issue with first name");
                }
                if (!empty($_POST['lname'])) {
                    $lname = $sqlaction->inputFilter(($_POST['lname']));
                } else {
                    throw new exception("Error - Issue with last name");
                }
                if (!empty($_POST['email'])) {
                    $email = $sqlaction->inputFilter(($_POST['email']));
                } else {
                    throw new exception("Error - Issue with E-mail");
                }
                if (!empty($_POST['password'])) {
                    $password = $sqlaction->inputFilter(($_POST['password']));
                } else {
                    throw new exception("Error - Issue with password");
                }

                if (!empty($_POST['verify_password']) && $password == $_POST['verify_password']) {
                    $password = password_hash($password, PASSWORD_DEFAULT);
                } else {
                    throw new Exception("passwords don't match");
                }
            } catch (\Exception $e) {

                echo json_encode(array(
                    "error" => 'Registration Error',
                    "Message" => $e->getMessage()
                ));
                return;
            }
            try {
                $sqlaction->addUser($fname, $lname, $email, $password);
                $sqlaction->log();
                echo json_encode(array("Success" => "User Added"));
            } catch (\Exception $e) {
                echo json_encode(array(
                    "error" => 'Registration failed',
                    "Message" => $e->getMessage()
                ));
                return;
            }
            break;

        case 'login':
            try {
                $email = $sqlaction->inputFilter(($_POST['email']));
                $password = $sqlaction->inputFilter(($_POST['password']));
                $sqlaction->login($email, $password);
                $sqlaction->log();
                echo json_encode(array("Success" => "User Logged In"));
                $_SESSION['logged'] = true;
                $_SESSION['username'] = $email;
                if ($_SESSION['logged'] = true) {
                    $sqlaction->usercheck();
                }
            } catch (\Exception $e) {
                echo json_encode(array("Error" => "Login Unsuccessful"));
                return;
            }
            break;

        case 'logout':
            try {
                $sqlaction->logout();
                $sqlaction->log();
                echo json_encode(array("Success" => "User Logged Out"));
            } catch (\Exception $e) {
                echo json_encode(array(
                    "Error" => "Logout Failed",
                    "Message" => $e->getMessage()
                ));
            }
            break;

        case 'addAlbum':
            try {

                if (isset($_FILES['file'])) {
                    $uploadDir = './images';
                    $errors = [];
                    $fileExtensionsPermitted = ['JPEG', 'JPG', 'PNG'];
                    $fileName = $_FILES['file']['name'];
                    $fileSize = $_FILES['file']['size'];
                    $fileTmpName = $_FILES['file']['tmp_name'];
                    $fileType = $_FILES['file']['type'];
                    $tmp = explode('.', $fileName);
                    $fileExtension = end($tmp);
                    $uploadPath = $uploadDir . basename($fileName);
                    $_POST['file'] = $uploadPath;
                    if (!in_array($fileExtension, $fileExtensionsPermitted)) {
                        echo json_encode(array("Error" => "File Extension Forbidden"));
                    }
                    if ($fileSize > 4000000) {
                        echo json_encode(array("Error" => "File Size Exceeded"));
                    }
                    if (empty($errors)) {
                        $fileUploaded = move_uploaded_file($fileTmpName, $uploadPath);
                        if ($fileUploaded) { } else {
                            echo json_encode(array("Error" => "Upload failed"));
                        }
                    } else {
                        foreach ($errors as $errors) {
                            echo json_encode($errors);
                        }
                    }

                    if (!empty($_POST['title'])) {
                        $title = $sqlaction->inputFilter(($_POST['title']));
                    } else {
                        throw new exception("Error - Issue with title");
                    }
                    if (!empty($_POST['artist'])) {
                        $artist = $sqlaction->inputFilter(($_POST['artist']));
                    } else {
                        throw new exception("Error - Issue with artist");
                    }

                    if (isset($_FILES['file'])) {
                        $image = $sqlaction->inputFilter(($_POST['file']));
                    } else {
                        throw new Exception("Image Path Invalid");
                    }
                }
                if (!empty($_POST['format'])) {
                    $format = $sqlaction->inputFilter(($_POST['format']));
                } else {
                    throw new exception("Error - Issue with format");
                }
                if (!empty($_POST['cat'])) {
                    $cat = $sqlaction->inputFilter(($_POST['cat']));
                } else {
                    throw new exception("Error - Issue with cat");
                }
                if (!empty($_POST['label'])) {
                    $label = $sqlaction->inputFilter(($_POST['label']));
                } else {
                    throw new exception("Error - Issue with label");
                }
                if (!empty($_POST['price'])) {
                    $price = $sqlaction->inputFilter(($_POST['price']));
                } else {
                    throw new exception("Error - Issue with price");
                }
                if (!empty($_POST['releaseDate'])) {
                    $releaseDate = $sqlaction->inputFilter(($_POST['releaseDate']));
                } else {
                    throw new exception("Error - Issue with release date");
                }
                if (!empty($_POST['quantity'])) {
                    $quantity = $sqlaction->inputFilter(($_POST['quantity']));
                } else {
                    throw new exception("Error - Issue with quantity");
                }
                if (!empty($_POST['copies_sold'])) {
                    $copies_sold = $sqlaction->inputFilter(($_POST['copies_sold']));
                } else {
                    throw new exception("Error - Issue with copies sold");
                }
            } catch (\Exception $e) {

                echo json_encode(array(
                    "Error" => "Failed To Add Product",
                    "Message" => $e->getMessage()
                ));
                return;
            }
            try {
                $sqlaction->addAlbum($title, $artist, $image, $format, $cat, $label, $price, $releaseDate, $quantity, $copies_sold);
                $sqlaction->log();
                echo json_encode(array("Success" => "Product Added"));
            } catch (\Exception $e) {
                echo json_encode(array(
                    "Error" => "Failed To Add Product",
                    "Message" => $e->getMessage()
                ));
                return;
            }
            break;

        case 'productDelete':
            if (!empty($_POST['title'])) {
                $title = $sqlaction->inputFilter(($_POST['title']));
                $sqlaction->deleteProducts($title);
                $sqlaction->log();
                echo json_encode(array("Success" => "Product Deleted"));
            } else {
                echo json_encode(array("Error" => "Unable To Delete Product"));
            }
            break;
    }
}

if (isset($_GET['data_fetch'])) {
    switch ($_GET['data_fetch']) {

        case 'displayAlbum':
            if (isset($_GET['album_id'])) {
                $album_id = $sqlaction->inputFilter(($_GET['album_id']));
                $sqlaction->displayProduct($album_id);
                $sqlaction->log();
                echo json_encode(array("Success" => "Displaying Album"));
            } else {
                echo json_encode(array("Error" => "Unable To Find Album"));
            }

            break;

        case 'albumFetch':
            $sqlaction->displayProducts();
            break;

        case 'displayUser':
            if (isset($_GET['userId'])) {
                $userId = $sqlaction->inputFilter(($_GET['userId']));
                $sqlaction->displayUser($userId);
                $sqlaction->log();
                echo json_encode(array("Success" => "User Found"));
            } else {
                echo json_encode(array("Error" => "Unable To Find User"));
            }
            break;

        case 'selectPopulate':
            $sqlaction->selectPopulate();
            break;

        case 'updatePopulate':
            if (isset($_GET['album_id'])) {
                $album_id = $sqlaction->inputFilter(($_GET['album_id']));
                $sqlaction->updatePopulate($album_id);
                $sqlaction->log();
                echo json_encode(array("Success" => "Fetched Update List"));
            } else {
                echo json_encode(array("Error" => "Unable to Fetch Update List"));
            }
            break;
    }
}
