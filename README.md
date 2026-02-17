# 🚀 Kubernetes Demo API

A production-ready Node.js + Express API containerized with Docker and deployed to Kubernetes with health checks, resource limits, and environment configuration.

---

## 📌 Project Overview

This project demonstrates:

- ✅ Node.js + Express API
- ✅ Docker multi-stage build
- ✅ Docker Compose (development setup)
- ✅ Kubernetes Deployment with:
  - Replicas
  - Resource requests & limits
  - Readiness & Liveness probes
  - Environment variables
- ✅ Service exposure (NodePort / ClusterIP)

This repository showcases practical DevOps fundamentals including containerization, orchestration, and production-ready configuration.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Docker
- Docker Compose
- Kubernetes

---

## 📂 Project Structure

```

.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── index.js
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── README.md

````

---

## 🐳 Run with Docker

### Build Image

```bash
docker build -t kubernetes-demo-api .
````

### Run Container

```bash
docker run -p 3000:3000 kubernetes-demo-api
```

Open:

```
http://localhost:3000
```

---

## 🐳 Run with Docker Compose (Development)

```bash
docker compose up --build
```

This will:

* Build image
* Start container
* Mount local code for live reload
* Expose port 3000

---

## ☸ Deploy to Kubernetes

### Apply Deployment

```bash
kubectl apply -f k8s/deployment.yaml
```

### Apply Service

```bash
kubectl apply -f k8s/service.yaml
```

### Check Pods

```bash
kubectl get pods
```

### Check Services

```bash
kubectl get svc
```

If using Minikube:

```bash
minikube service kubernetes-demo-api
```

---

## ❤️ Health Endpoints

The application includes:

```
GET /healthz   -> Liveness probe
GET /readyz    -> Readiness probe
```

These ensure:

* Kubernetes restarts unhealthy containers
* Traffic is routed only to ready pods

---

## ⚙️ Resource Configuration

Kubernetes deployment includes:

* CPU Requests: 100m
* Memory Requests: 128Mi
* CPU Limits: 500m
* Memory Limits: 512Mi

This ensures controlled resource usage in production environments.

---

## 🔐 Environment Variables

```bash
NODE_ENV=production
POD_NAME (auto-injected from Kubernetes metadata)
```

---

## 🎯 Learning Objectives

This project demonstrates:

* Containerization best practices
* Multi-stage Docker builds
* Development vs Production setups
* Kubernetes deployment configuration
* Health checks & resource management
* Infrastructure-ready application design

---

## 📈 Future Improvements

* Add Ingress Controller
* Add Horizontal Pod Autoscaler
* Add CI/CD with GitHub Actions
* Push image automatically to DockerHub
* Add Helm chart

---

## 👨‍💻 Author

Madhavan M
Cloud / DevOps Engineer

---

⭐ If you found this useful, consider starring the repo.

```
