<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$id = $_POST["id"];

$user = $em->getRepository(User::class)->find($id);

$infos = $em->getRepository(UserGroupInfo::class)->findby([
    "user" => $user
]);

$groups = array();

foreach ($infos as $info)
{
    array_push($groups, $info->group);
}

$projects = array();

foreach ($groups as $grp)
{
    $tempProjs = $em->getRepository(Project::class)->findby([
        "group" => $grp
    ]);
    
    foreach ($tempProjs as $t)
    {
        array_push($projects, $t);
    }
}

$clients = array();

foreach ($projects as $proj)
{
    $client = $em->getRepository(Client::class)->find($proj->client);
    array_push($clients, $client->name);
}

echo json_encode(array_unique($clients));

?>