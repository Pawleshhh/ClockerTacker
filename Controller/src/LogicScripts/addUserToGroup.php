<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
require_once __DIR__ . '/../Model/Entry.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/Project.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Client.php';

$user = $em->getRepository(User::class)->find($_POST["userid"]);
$group = $em->getRepository(Group::class)->find($_POST["groupid"]);

$grpInfo = new UserGroupInfo();
$grpInfo->set_user($user);
$grpInfo->set_group($group);

$em->persist($grpInfo);
$em->flush();

$result = array("user" => $grpInfo->user->id, "group" => $grpInfo->group->id);

echo json_encode($result);

?>