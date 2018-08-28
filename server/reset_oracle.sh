docker stop oracle12c_r1
docker rm oracle12c_r1
docker run --name oracle12c_r1 -d -p 4580:8080 -p 4521:1521 -v oracle12c_r1_data:/u01/app/oracle -e DBCA_TOTAL_MEMORY=1024 sath89/oracle-12c