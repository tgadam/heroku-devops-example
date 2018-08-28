docker stop uarc-postgres
docker rm uarc-postgres
docker run --name uarc-postgres -e POSTGRES_DB=lims -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=Teselagen123 -p 5500:5432 -d postgres