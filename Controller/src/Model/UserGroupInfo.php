<?php

require_once "vendor/autoload.php";
require_once __DIR__ . "/User.php";
require_once __DIR__ . "/Group.php";
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name = "users_groups")
 */
class UserGroupInfo
{

    /**
     * @Id
     * @Column(type = "integer")
     * @GeneratedValue
     */
    public $id;

    /**
     * @OneToOne(targetEntity="User", cascade="all")
     */
    public $user;

    /**
     * @OneToOne(targetEntity="Group", cascade="all")
     */
    public $group;

    public function __construct()
    {
        $this->groups = new ArrayCollection();
    }

    function set_user($user)
    {
        $this->user = $user;
    }

    function set_group($group)
    {
        $this->group = $group;
    }

    function set_up($usr, $grp)
    {
        $this->set_user($usr);
        $this->set_group($grp);
    }

}

?>