<?php

require_once "vendor/autoload.php";
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name = "users")
 */
class User
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

    public function __construct()
    {
        $this->groups = new ArrayCollection();
    }

    function set_name($name)
    {
        $this->name = $name;
    }

}

?>