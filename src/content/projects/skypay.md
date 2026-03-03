---
title: "SKYPAY"
summary: "Sistem pembayaran digital — kontrol perangkat jaringan (router, ONT, OLT), manajemen pelanggan, dan integrasi Tripay."
category: "saas"
role: "Lead Developer"
timeframe: "2021–Sekarang"
stack: ["Laravel", "PHP", "JavaScript", "jQuery", "HTML", "CSS", "Blade", "MySQL", "Tripay API"]
github: "https://github.com/skynetwork-id/skypay.id"
featured: true
publishedAt: 2021-12-01
tags: ["Payment Gateway", "SaaS", "Fintech", "ISP"]
---

## Tentang Proyek

SKYPAY adalah sistem pembayaran digital terintegrasi untuk ISP Skynet. Selain sebagai payment gateway, sistem juga bisa mengontrol perangkat jaringan seperti router, ONT, dan OLT.

### Fitur Utama

- **Kontrol perangkat jaringan** — Kelola router, Optical Network Terminal (ONT), dan Optical Line Terminal (OLT)
- **Manajemen pelanggan** — Kelola data pelanggan yang terhubung dengan paket internet
- **Payment gateway Tripay** — Integrasi pembayaran dengan Tripay
- **Dashboard admin** — Monitoring transaksi dan perangkat dari satu dashboard
- **Billing otomatis** — Penagihan otomatis berdasarkan paket langganan

### Arsitektur

Dibangun dengan Laravel dan terintegrasi dengan Tripay sebagai payment gateway. Sistem berkomunikasi dengan perangkat jaringan (router, ONT, OLT) melalui API untuk monitoring dan kontrol remote.
