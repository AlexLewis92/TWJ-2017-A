# Comandos Docker

## docker ps

Este comando listaba los contenedores que estan **corriendo**.
```
>> docker ps
```

## docker ps -a

Este comando listaba **TODOS** los contenedores que estan **instalados**.
```
>> docker ps -a
```

## docker stop 'id' o 'nombre'

Este comando **detiene** los o el  contenedor que este **corriendo**.
```
>> docker stop 12mMC232udD micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```


## Mysql

Para utilizar docker con mysql vamos a utilizar el siguiente comando:

```
>> docker run --name carlos -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=carlos -e MYSQL_USER=carlos -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```
## Postgresql 
```
>> docker run --name postgrescarlos -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=carlos -e POSTGRES_DB=politecnica -p 5432:5432 -d postgres
```

## MongoDB
```
>> docker run --name carlosmongo -p 27017:27017 -d mongo
```
