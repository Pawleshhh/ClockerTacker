<?php

use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name = "clients")
 */
class Client
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

    function set_name($name)
    {
        $this->name = $name;
    }

}

?>