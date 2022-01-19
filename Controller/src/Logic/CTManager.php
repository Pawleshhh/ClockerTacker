<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;

class CTManager
{

    private $entityManager;

    private $currentUser;
    private $groups;

    public function __construct(EntityManager $em, User $user)
    {
        $this->currentUser = $user;
        $this->entityManager = $em;

        $this->InitializeGroups();
    }

    private function InitializeGroups()
    {
        $this->groups = new ArrayCollection();
        $infos = $this->entityManager->getRepository(UserGroupInfo::class)->findby([
            "user" => $this->currentUser->id
        ]);

        foreach ($infos as $info)
        {
            $this->groups->add($info->group);
        }
    }

    //Properties

    public function GetUser()
    {
        return $this->currentUser;
    }

    public function GetGroups()
    {
        return $this->groups;
    }

}

?>