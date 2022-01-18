<?php

require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/src/Model/UserGroupInfo.php';
require_once __DIR__ . '/src/Model/Entry.php';
require_once __DIR__ . '/src/Model/Group.php';
require_once __DIR__ . '/src/Model/Project.php';
require_once __DIR__ . '/src/Model/User.php';
require_once __DIR__ . '/src/Model/Client.php';

use Doctrine\Common\Collections\ArrayCollection;

$client = new Client();
$client->set_name("Kramarczyk");

$entry1 = new Entry();
$entry1->set_description("Done");

$entriesCollection = new ArrayCollection([$entry1]);

$project1 = new Project();
$project1->set_name("Clocker");
$project1->set_decription("Nie chce tego robic");
$project1->set_entries($entriesCollection);
$project1->set_client($client);

$projectsCollection = new ArrayCollection([$project1]);

$group1 = new Group();
$group1->set_name("Aplikacje Internetowe");
$group1->set_projects($projectsCollection);
$project1->set_group($group1);

$group2 = new Group();
$group2->set_name("Ap2");
$group2->set_projects($projectsCollection);

$groupsCollection = new ArrayCollection([$group1]);

$user1 = new User();
$user1->set_name("Piotr Buczynski");
// $group1->set_admin($user1);
$entry1->set_user($user1);
$user2 = new User();
$user2->set_name("Piotr Buczynski22222222");
$user3 = new User();
$user3->set_name("Piotr Buczynski3333333");
$usersColl = new ArrayCollection([$user1, $user2]);

$usrgrp1_1 = new UserGroupInfo();
$usrgrp1_1->set_up($user1, $group1);
$usrgrp2_2 = new UserGroupInfo();
$usrgrp2_2->set_up($user2, $group2);
$usrgrp2_1 = new UserGroupInfo();
$usrgrp2_1->set_up($user2, $group1);

$usrgrp3_0 = new UserGroupInfo();
$usrgrp3_0->set_up($user3, null);

$em->persist($usrgrp1_1);
$em->persist($usrgrp2_2);
$em->persist($usrgrp2_1);
$em->persist($usrgrp3_0);
$em->flush();

?>