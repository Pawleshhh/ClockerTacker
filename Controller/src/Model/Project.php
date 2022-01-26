<?php

use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name = "projects")
 */
class Project
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
     * @Column(type = "string")
     */
    public $description;

    /**
     * @OneToOne(targetEntity="Group", cascade="all")
     */
    public $group;

    /**
     * @OneToMany(targetEntity="Entry", mappedBy="project", cascade="all")
     */
    public $entries;

    /**
     * @OneToOne(targetEntity="Client", cascade="all")
     */
    public $client;

    /**
     * @Column(type="string")
     */
    public $start;

    /**
     * @Column(type="string")
     */
    public $stop;

    public function __construct()
    {
        $this->entries = new ArrayCollection();
    }

    function set_name($name)
    {
        $this->name = $name;
    }

    function set_decription($description)
    {
        $this->description = $description;
    }

    function set_group($group)
    {
        $this->group = $group;
    }

    function set_entries($entries)
    {
        $this->entries = $entries;
    }

    function set_client($client)
    {
        $this->client = $client;
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