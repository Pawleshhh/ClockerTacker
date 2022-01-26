<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$entry = $em->getRepository(Entry::class)->find($_POST["id"]);
$start = date('Y-m-d h:i:s', time());

$entry->set_start($start);

$em->persist($entry);
$em->flush();

?>