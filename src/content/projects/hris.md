---
title: "HRIS"
summary: "Sistem informasi SDM — kelola karyawan, gaji, cuti, dan penilaian dengan autentikasi JWT multi-login."
category: "saas"
role: "Fullstack Developer"
timeframe: "2022"
stack: ["Laravel", "PHP", "JavaScript", "jQuery", "HTML", "CSS", "Blade", "MySQL", "JWT"]
github: "https://github.com/vonsogt/laravel-hris-ydb"
featured: false
publishedAt: 2022-04-01
tags: ["HRIS", "SaaS", "HR", "JWT"]
---

## Tentang Proyek

HRIS (Human Resource Information System) adalah sistem informasi SDM berbasis web. Mengelola data karyawan dengan relasi data seperti gaji, cuti, dan penilaian.

### Fitur Utama

- **Manajemen karyawan** — Data karyawan dengan relasi gaji, cuti, dan assessment
- **Multi-login JWT** — Autentikasi menggunakan JSON Web Token
- **Cuti & absensi** — Kelola pengajuan dan approval cuti
- **Penggajian** — Perhitungan dan distribusi gaji
- **Assessment** — Penilaian kinerja karyawan

### Arsitektur

Dibangun dengan Laravel menggunakan JWT untuk autentikasi stateless. Data karyawan terelasi dengan modul gaji, cuti, dan penilaian dalam arsitektur modular.
