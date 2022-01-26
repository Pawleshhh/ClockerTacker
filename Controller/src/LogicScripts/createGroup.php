<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$user = $em->getRepository(User::class)->find($_REQUEST["id"]);
$name = $_REQUEST["name"];

$grp = new Group();
$grp->set_name($name);
$grp->set_admin($user);
$grpInfo = new UserGroupInfo();
$grpInfo->set_user($user);
$grpInfo->set_group($grp);

$em->persist($grpInfo);
$em->flush();

echo $grp->id;

?>