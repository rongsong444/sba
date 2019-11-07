FROM openjdk:8-jdk-alpine

MAINTAINER Rong <9372570@qq.com>

# The application's jar file
ARG JAR_FILE=target/gateway-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} app.jar

# Run the jar file
ENTRYPOINT ["java","-jar","/app.jar"]