-- Create schema
CREATE DATABASE IF NOT EXISTS vehicle_rental;
USE vehicle_rental;

CREATE TABLE Customer (
  CustomerID INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Address VARCHAR(255),
  PhoneNumber VARCHAR(20),
  Email VARCHAR(100)
);

CREATE TABLE Vehicle (
  VehicleID INT AUTO_INCREMENT PRIMARY KEY,
  Model VARCHAR(50),
  Make VARCHAR(50),
  Year INT,
  LicensePlate VARCHAR(20) UNIQUE,
  RentalRate DECIMAL(10,2)
);

CREATE TABLE Rental (
  RentalID INT AUTO_INCREMENT PRIMARY KEY,
  CustomerID INT,
  VehicleID INT,
  RentalDate DATE,
  ReturnDate DATE,
  TotalAmount DECIMAL(10,2),
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
  FOREIGN KEY (VehicleID) REFERENCES Vehicle(VehicleID)
);

CREATE TABLE Payment (
  PaymentID INT AUTO_INCREMENT PRIMARY KEY,
  RentalID INT UNIQUE,
  PaymentDate DATE,
  Amount DECIMAL(10,2),
  PaymentMethod VARCHAR(50),
  FOREIGN KEY (RentalID) REFERENCES Rental(RentalID)
);

-- Seed data
INSERT INTO Customer (Name,Address,PhoneNumber,Email)
VALUES ('Alice','123 Main St','555-1234','alice@example.com');

INSERT INTO Vehicle (Model,Make,Year,LicensePlate,RentalRate)
VALUES ('Civic','Honda',2020,'ABC-123',50.00);