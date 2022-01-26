<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;


class CTGroupManager
{

    // Services and relations

    private $entityManager;

    private $currentGroup;
    private $projects;
    private $users;

    public function __construct(EntityManager $em, Group $group)
    {
        $this->currentGroup = $group;
        $this->entityManager = $em;

        $this->InitializeProjects();
        $this->InitializeUsers();
    }

    private function InitializeProjects()
    {
        $this->projects = new ArrayCollection();
        $projects = $this->entityManager->getRepository(Project::class)->findby([
            "group" => $this->currentGroup->id
        ]);

        foreach ($projects as $project)
        {
            $this->projects->add($project);
        }
    }

    private function InitializeUsers()
    {
        $this->users = new ArrayCollection();
        $infos = $this->entityManager->getRepository(UserGroupInfo::class)->findby([
            "group" => $this->currentGroup->id
        ]);

        foreach ($infos as $info)
        {
            $this->users->add($info->user);
        }
    }

    //Properties

    public function GetProjects()
    {
        return $this->projects;
    }
    
    public function GetUsers()
    {
        return $this->users;
    }

    //Logic

    public function AddUser($user)
    {
        $grpInfo = new UserGroupInfo();
        $grpInfo->set_user($user);
        $grpInfo->set_group($this->currentGroup);

        $this->entityManager->persist($grpInfo);
        $this->entityManager->flush();

        $this->InitializeUsers();
    }

}

?>