

# # Step 1: Use official Java image
# FROM openjdk:17-jdk-slim

# # Step 2: Set working directory
# WORKDIR /app

# # Step 3: Copy project files
# COPY . .

# # Step 4: Build Spring Boot project
# RUN ./mvnw clean package -DskipTests

# # Step 5: Expose port
# EXPOSE 8080

# # Step 6: Run the Spring Boot application
# CMD ["java", "-jar", "target/product-management-0.0.1-SNAPSHOT.jar"]


# Step 1: Build stage - Use Maven image to build the app
FROM maven:3.9-eclipse-temurin-17 AS builder

# Step 2: Set working directory
WORKDIR /build

# Step 3: Copy pom.xml and source code
COPY pom.xml .
COPY src ./src

# Step 4: Build the project
RUN mvn clean package -DskipTests

# Step 5: Runtime stage - Use Java image to run the app
FROM openjdk:17-jdk-slim

# Step 6: Set working directory
WORKDIR /app

# Step 7: Copy the built JAR from builder stage
COPY --from=builder /build/target/*.jar app.jar

# Step 8: Expose port
EXPOSE 8080

# Step 9: Run the Spring Boot application
CMD ["java", "-jar", "app.jar"]