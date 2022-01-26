<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$project = $em->getRepository(Project::class)->find($_REQUEST["projectid"]);
$stop = $_REQUEST["stop"];

$project->set_stop($stop);

$em->persist($project);
$em->flush();

echo $project->id;

?>