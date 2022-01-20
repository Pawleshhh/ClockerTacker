<?php

require_once __DIR__ . '/bootstrap.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


if (empty($_POST['email']) || empty($_POST['pass'])) {
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
    if ($_POST['email'] === $account["email"] && $_POST['pass'] === $account["password"]){
        echo json_encode([
            "status" => true
        ]);
        die();
    }
}

echo json_encode([
    "status" => false,
    "message" => "niewłaściwy login lub hasło"
]);