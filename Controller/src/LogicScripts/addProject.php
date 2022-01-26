<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$group = $em->getRepository(Group::class)->find($_POST["groupid"]);
$name = $_POST["name"];
$desc = $_POST["desc"];
$client = $em->getRepository(Client::class)->find($_POST["clientid"]);
$start = $_POST["start"];
$stop = $_POST["stop"];

$project = new Project();
$project->set_group($group);
$project->set_name($name);
$project->set_decription($desc);
$project->set_client($client);
$project->set_start($start);
$project->set_stop($stop);

$em->persist($project);
$em->flush();

$result = array("id" => $project->id, "name" => $project->name);

echo json_encode($result);

?>