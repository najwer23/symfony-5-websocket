# symfony-5-websockets 26.01.2020

## Prerequisites

- Composer
- PHP 7.2.5 or higher
- Symfony 5.1
- Ratchet

## Installing & Setting up the Symfony Framework

```bash
composer create-project symfony/skeleton app
```

## Ratchet Master Branch

```bash
composer require cboden/ratchet
```

## Ratchet TEST Branch <- I used it (26.01.2020)

Add in composer.json

```json
"repositories": [{
	"type": "vcs",
	"url": "https://github.com/simPod/Ratchet.git"
}],
```

```bash
composer require cboden/ratchet:dev-allow-symfony-5
```

## Install libraries

```bash
composer require twig
composer require annotations
composer require symfony/maker-bundle --dev
composer require symfony/asset
```

## XAMPP. Win 10

### In file "F:\Xampp\apache\conf\extra\httpd-vhosts.conf" must add:

```bash
<VirtualHost *:80>
	DocumentRoot "F:/xampp/htdocs/symfony-5-websocket/public"
	ServerName symfony-5-websocket
</VirtualHost>
```

### In file (open with admin rights) "C:\Windows\System32\drivers\etc\hosts" must add: 

```bash 
127.0.0.1	symfony-5-websocket
```	

## RUN 

### Server

```bash 
php bin/console run:symfony-5-websocket-server
```

### Client (in browser: Chrome, MZ, Edge, IE)

```bash
symfony-5-websocket/
```

#### Documentation 
```bash
https://symfony.com/doc/current/console.html
http://socketo.me/docs/hello-world
```





