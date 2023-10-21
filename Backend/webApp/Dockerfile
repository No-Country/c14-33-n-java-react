FROM maven:3-amazoncorretto AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests

FROM amazoncorretto
COPY --from=build /target/webApp-0.0.1-SNAPSHOT.jar task.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "task.jar"]