<?php

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

    /**
     * @Column(type="string")
     */
    public $start;

    /**
     * @Column(type="string")
     */
    public $stop;

    function set_description($description)
    {
        $this->description = $description;
    }

    function set_user($user)
    {
        $this->user = $user;
    }

    function set_start($start)
    {
        $this->start = $start;
    }

    function set_stop($stop)
    {
        $this->stop = $stop;
    }

}

?>