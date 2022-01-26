<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$user = $em->getRepository(User::class)->find($_POST["id"]);

$entries = $em->getRepository(Entry::class)->findBy([
    "user" => $user
]);

$result = array();

foreach ($entries as $entry)
{
//    array_push($result, [$entry->id, $entry->description, $entry->user->name, $entry->start, $entry->stop]);
    array_push($result, [$entry->id, $entry->description, $entry->start, $entry->stop]);
}

echo json_encode($result);

?>