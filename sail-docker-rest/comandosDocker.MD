# Comandos Docker
## docker ps
Este comando lista los contenedores que estan corriendo
```
>>docker ps
```
## docker ps -a
este comando lista **todos**los contenedores que estan instalados
```
>>docker ps -a
```
## docker stop 'id' o 'nombres'
este comando detiene los contenedores que se encuentran corriendo
```
>>docker stop 12sdf micontenedor
>>docker stop 12
>>docker stop m
>>docker stop 12 mi
```
## docker start 'id' o 'nombres'
este comando detiene los contenedores que se encuentran corriendo
```
>>docker start 12sdf micontenedor
>>docker start 12
>>docker start m
>>docker start 12 mi
```
## docker rm 'id' o 'nombres'
este comando **elimina** el o los contendores que estan **detenidos**
```
>>docker rm 12sdf micontenedor
>>docker rm 12
>>docker rm m
>>docker rm 12 mi
```

## MySql
para utilizar docker con mySql vamos a utilizar el siguiente comando
```
>>docker run --name dario -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=dario -e MYSQL_USER=dario -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```
## Postgresql
```
>>docker run --name dario -e POSTGRES_PASSWORD=123456 -e 
POSTGRES_USER=dario -e POSTGRES_DB=Politecnica -p 
5432:5432 -d postgres
```
## MongoDB
```
>>docker run --name darioMongo -p 27017:27017 -d mongo
```
