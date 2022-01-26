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

$result = array(["Name", "Description", "Group", "Start", "Stop", "Client"]);

foreach ($projects as $proj)
{
    $client = $em->getRepository(Client::class)->find($proj->client);
    array_push($result, [$proj->name, $proj->description, $proj->group->name, $proj->start, $proj->stop, $client->name]);
}

$fp = fopen('projects.csv', 'w');

foreach ($result as $r)
{
    fputcsv($fp, $r);
}

fclose($fp);

echo file_get_contents('projects.csv', true);

?>