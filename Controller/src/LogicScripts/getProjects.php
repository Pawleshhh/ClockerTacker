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

$groups = array();

foreach ($infos as $info)
{
    array_push($groups, $info->group);
}

$result = array();

foreach ($groups as $grp)
{
    foreach ($grp->projects as $prj)
        array_push($result, [$prj->name, $prj->description, $prj->client->name, $prj->group->name]);
}

echo json_encode($result);

?>