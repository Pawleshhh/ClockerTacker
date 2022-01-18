<?php

require_once __DIR__ . '/bootstrap.php';
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

$groupsCollection = new ArrayCollection([$group1]);

$user1 = new User();
$user1->set_name("Piotr Buczynski");
$user1->set_groups($groupsCollection);
$group1->set_admin($user1);
$entry1->set_user($user1);

$em->persist($user1);
$em->flush();

?>