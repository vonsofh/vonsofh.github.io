---
title: "Pasar Sayur & POS"
summary: "SaaS POS multi-tenant dengan aplikasi kasir desktop ElectronJS — kelola banyak toko, multi-role per tenant."
category: "saas"
role: "Lead Developer"
timeframe: "2025"
stack: ["Laravel", "ElectronJS", "PHP", "JavaScript", "jQuery", "HTML", "CSS", "MySQL"]
featured: true
publishedAt: 2025-04-01
tags: ["SaaS", "POS", "Electron", "Multi-Tenant"]
---

## Tentang Proyek

Pasar Sayur & POS adalah Software as a Service untuk manajemen toko dan kasir. Sistem mendukung pengelolaan banyak toko/kelontong dengan aplikasi kasir desktop terpisah yang terhubung ke SaaS.

### Fitur Utama

- **Software as a Service** — Platform cloud yang bisa digunakan banyak toko
- **Multi-store management** — Kelola banyak toko atau kelontong dari satu dashboard
- **Aplikasi kasir desktop** — App kasir standalone (ElectronJS) yang terhubung ke SaaS
- **User-friendly** — Mudah diakses untuk pengguna yang baru pertama kali menggunakan kasir
- **Multi-role per tenant** — Setiap tenant memiliki role dan hak akses berbeda

### Arsitektur

Backend SaaS dibangun dengan Laravel menggunakan arsitektur multi-tenant. Aplikasi kasir desktop dibuat dengan ElectronJS yang berkomunikasi dengan server Laravel via API. Setiap tenant terisolasi dengan role-based access control.
