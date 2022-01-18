<?php

require_once "vendor/autoload.php";
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name = "groups")
 */
class Group
{

    /**
     * @Id
     * @Column(type = "integer")
     * @GeneratedValue
     */
    public $id;

    /**
     * @Column(type = "string")
     */
    public $name;

    /**
     * @OneToOne(targetEntity="User", cascade="all")
     */
    public $admin;

    /**
     * @OneToMany(targetEntity="Project", mappedBy="group", cascade="all")
     */
    public $projects;

    public function __construct()
    {
        $this->projects = new ArrayCollection();
    }

    function set_name($name)
    {
        $this->name = $name;
    }

    function set_admin($admin)
    {
        $this->admin = $admin;
    }

    function set_projects($projects)
    {
        $this->projects = $projects;
    }

}

?>