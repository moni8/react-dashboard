# React Dashboard — Number Utilities

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A **React dashboard** application for number utilities with a clean, responsive UI built using **React Bootstrap**, Dockerized for containerization, and ready for deployment on Kubernetes.

---

## Table of Contents

- [Features](#features)  
- [Project Structure](#project-structure)  
- [Prerequisites](#prerequisites)  
- [Getting Started](#getting-started)  
- [Docker Usage](#docker-usage)  
- [Kubernetes Deployment](#kubernetes-deployment)  
- [Screenshots](#screenshots)  
- [License](#license)  
- [Author](#author)

---

## Features

- **Fibonacci Series Generator**  
  - Enter a number `n` to generate the first `n` Fibonacci numbers.  

- **Armstrong Number Checker / Generator**  
  - Check if a number is an Armstrong number.  
  - Generate all Armstrong numbers up to a given limit.  

- **Dashboard Layout**  
  - Vertical navigation menu for Fibonacci and Armstrong pages.  
  - Toggle button for Armstrong number modes (Check / Generate).  
  - Visually appealing UI with **React Bootstrap components**.  

- **Modern React Features**  
  - Functional components with hooks (`useState`, `useContext`).  
  - Context API for state management.  
  - React Router v6 for navigation.  

- **Containerized**  
  - Multi-stage Dockerfile for production-ready image.  
  - Can be deployed to Kubernetes clusters.


