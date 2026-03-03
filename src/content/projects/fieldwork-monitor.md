---
title: "FIELDWORK MONITOR"
summary: "Aplikasi pelaporan kerja lapangan multi-tenant — karyawan melaporkan situasi di lapangan, admin kelola tenant dan ekspor laporan."
category: "logistics"
role: "Fullstack Developer"
timeframe: "2025"
stack: ["Laravel", "ElectronJS", "PHP", "JavaScript", "jQuery", "HTML", "CSS"]
featured: false
publishedAt: 2025-10-01
tags: ["Field Service", "Monitoring", "SaaS", "Multi-Tenant"]
---

## Tentang Proyek

FIELDWORK MONITOR adalah aplikasi pelaporan pekerjaan lapangan berbasis web. Setiap karyawan memiliki akun masing-masing untuk melaporkan situasi di lapangan secara langsung.

### Fitur Utama

- **Akun per karyawan** — Setiap pekerja lapangan punya akun untuk submit laporan
- **Multi-tenant** — Admin dapat mengelola semua tenant, laporan, dan pengguna
- **Ekspor laporan** — Fitur export laporan dalam berbagai format
- **Laporan harian & berulang** — Mendukung pola pelaporan daily maupun recurring reports
- **Dashboard admin** — Monitoring semua aktivitas lapangan dari satu dashboard

### Arsitektur

Dibangun dengan Laravel dan ElectronJS, sistem menggunakan arsitektur multi-tenant untuk memisahkan data antar organisasi. Laporan bisa diekspor dan difilter berdasarkan periode waktu.
