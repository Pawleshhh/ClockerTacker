<?php

require_once __DIR__ . '/../../bootstrap.php';
require_once __DIR__ . '/../Model/User.php';
require_once __DIR__ . '/../Model/Group.php';
require_once __DIR__ . '/../Model/UserGroupInfo.php';
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;

class CTUserManager
{

    // Services and relations

    private $entityManager;
    private $groupManager;

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

    public function GetGroupManager()
    {
        return $this->gropuManager;
    }

    public function GetUser()
    {
        return $this->currentUser;
    }

    public function GetGroups()
    {
        return $this->groups;
    }

    //Logic

    public function CreateGroup($name)
    {
        $grp = new Group();
        $grp->set_name($name);
        $grp->set_admin($this);
        $grpInfo = new UserGroupInfo();
        $grpInfo->set_user($this->currentUser);
        $grpInfo->set_group($grp);

        $this->entityManager->persist($grpInfo);
        $this->entityManager->flush();

        $this->InitializeGroups();
    }

}

?>