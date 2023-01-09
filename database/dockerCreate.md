# Creacion de la imagen para  levantar la base de datos en Docker

- Primero debemos hacer un pull de mysql para traer la ultima version de mysql a Docker utilizando el comando  $ docker pull mysql

- Luego debemos ejecutar el siguiente comando: $  docker run --name mysql-ghemma-db -p 3306:3306 -v /my/custom:/etc/mysql/conf.d -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql

![dockerCommandExplanation](/assets/docker_command_explanation.png "docker command explanation")

### La db en docker (para este proyecto) es solo lectura.