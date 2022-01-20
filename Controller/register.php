<?php

require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/src/Model/User.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['email']) || empty($_POST['pass']) || empty($_POST['pass2'])) {
    echo json_encode([
        "status" => false,
        "message" => "nie uzupełnione dane"
    ]);
    die();
}


$queryBuilder = $dm->createQueryBuilder();
$queryBuilder
    ->select("*")
    ->from("accounts");

$statement = $queryBuilder->execute();
$results = $statement->fetchAll();

foreach ($results as $account) {
    if ($_POST['email'] === $account["email"]){
        echo json_encode([
            "status" => false,
            "message" => "konto już istnieje"
        ]);
        die();
    }
}


$username = substr($_POST['email'], 0, strpos($_POST['email'], "@"));


$newUser = new User();
$newUser->set_name($username);

$em->persist($newUser);
$em->flush();


$queryBuilder
    ->select("*")
    ->from("users")
    ->where("name like '$username'");

$statement = $queryBuilder->execute();
$results = $statement->fetchAll();


foreach ($results as $result) {
    $userId = $result["id"];
}

$queryBuilder
    ->insert("accounts")
    ->values(
        array(
            "userId" => "?",
            "email" => "?",
            "password" => "?"
        )
    )
    ->setParameter(0, $userId)
    ->setParameter(1, $_POST["email"])
    ->setParameter(2, $_POST["pass"]);

$queryBuilder->execute();

echo json_encode([
    "status" => true,
    "message" => $results
]);