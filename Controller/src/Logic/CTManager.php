<?php

require_once "src/Model/User.php";
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
    }

    private function InitializeGroups()
    {
        $this->groups = new ArrayCollection();
        
        $groupRepo = $this->entityManager->getRepository();
    }

    //Properties

    public function GetUser()
    {
        return $this->currentUser;
    }

}

?>