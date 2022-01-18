<?php

require_once "vendor/autoload.php";
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name = "entries")
 */
class Entry
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
    public $description;

    /**
     * @OneToOne(targetEntity="User", cascade="all")
     */
    public $user;

    function set_description($description)
    {
        $this->description = $description;
    }

    function set_user($user)
    {
        $this->user = $user;
    }

}

?>