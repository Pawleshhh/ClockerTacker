<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$project = $em->getRepository(Project::class)->find($_POST["projectid"]);
$start = $_POST["start"];

$project->set_start($start);

$em->persist($project);
$em->flush();

$result = array("id" => $project->id, "start" => $project->start);

echo json_encode($result);

?>