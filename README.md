# symfony-5-websockets

```bash
composer create-project symfony/skeleton app
```

## Ratchet Master Branch

```bash
composer require cboden/ratchet
```

## Ratchet TEST Branch <- I use it

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

## Others

```bash
composer require twig
composer require annotations
composer require symfony/maker-bundle --dev
```

## RUN

```bash 
php bin/console run:websocket-server
```

### Documentation 
```bash
http://socketo.me/docs/hello-world
```





