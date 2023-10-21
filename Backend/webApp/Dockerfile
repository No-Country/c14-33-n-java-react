FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package

FROM openjdk:17.0.1-jdk
COPY --from=build /target/webApp-0.0.1-SNAPSHOT.jar task.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "task.jar"]