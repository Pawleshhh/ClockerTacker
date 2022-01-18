<?php
require_once __DIR__ . '/vendor/autoload.php';
use Doctrine\ORM\ORMException;
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

$config = Setup::createAnnotationMetadataConfiguration(array(__DIR__ . '/src'));

$conn = array(
    'dbname' => 'clocker_db',
    'user' => 'root',
    'password' => '',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
);

$em = EntityManager::create($conn, $config);
?>