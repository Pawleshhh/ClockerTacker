<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$group = $em->getRepository(Group::class)->find($_REQUEST["groupid"]);
$name = $_REQUEST["name"];
$desc = $_REQUEST["desc"];
$client = $em->getRepository(Client::class)->find($_REQUEST["clientid"]);
$start = $_REQUEST["start"];
$stop = $_REQUEST["stop"];

$project = new Project();
$project->set_group($group);
$project->set_name($name);
$project->set_decription($desc);
$project->set_client($client);
$project->set_start($start);
$project->set_stop($stop);

$em->persist($project);
$em->flush();

echo $project->id;

?>