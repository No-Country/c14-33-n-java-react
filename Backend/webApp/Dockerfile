FROM maven:3.8-openjdk-17 AS build
COPY . .
RUN mvn clean package

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/webApp-0.0.1-SNAPSHOT.jar task.jar
WORKDIR /usr/src/app
EXPOSE 8080
ENTRYPOINT ["/bin/bash", "-c", "mvn ... # your command in terminal"]