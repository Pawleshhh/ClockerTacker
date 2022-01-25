<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$project = $em->getRepository(Project::class)->find($_REQUEST["projectid"]);
$desc = $_REQUEST["desc"];
$user = $em->getRepository(User::class)->find($_REQUEST["userid"]);

$entry = new Entry();
$entry->set_description($desc);
$entry->set_user($user);

$em->persist($entry);
$em->flush();

echo $entry->id;

?>