FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /webApp
COPY . /webApp/
RUN mvn clean package

FROM openjdk:17-alpine
WORKDIR /app
COPY --from=build /webApp/target/*.jar /webApp/webApp.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "webApp.jar"]