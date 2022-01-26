<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';


$user = $em->getRepository(User::class)->find($_POST["id"]);
$infos = $em->getRepository(UserGroupInfo::class)->findby([
    "user" => $user->id
]);

$result = array();
foreach ($infos as $info)
{
    array_push($result, [$info->group->name, $info->group->admin->name]);
}

echo json_encode($result);

?>