---
title: "COMPANY APP"
summary: "Website perusahaan dengan autentikasi JWT — karyawan bisa melihat kolega dari perusahaan yang sama."
category: "saas"
role: "Fullstack Developer"
timeframe: "2021"
stack: ["Laravel", "PHP", "JavaScript", "jQuery", "HTML", "CSS", "Blade", "MySQL", "JWT"]
github: "https://github.com/vonsogt/company-app"
featured: false
publishedAt: 2021-07-01
tags: ["Company", "JWT", "API", "Laravel"]
---

## Tentang Proyek

COMPANY APP adalah website yang menampilkan data perusahaan dan karyawan, menggunakan JSON Web Token untuk autentikasi. Terintegrasi dengan Simple CRM sebagai API server.

### Fitur Utama

- **Autentikasi JWT** — Login menggunakan JSON Web Token
- **Data karyawan** — Karyawan bisa melihat kolega dari perusahaan yang sama
- **Detail perusahaan** — Tampilkan informasi singkat perusahaan
- **Integrasi API** — Terhubung dengan CRM sebagai sumber data

### Arsitektur

Dibangun dengan Laravel 8, menggunakan JWT untuk autentikasi stateless. Berkomunikasi dengan Simple CRM API server untuk sinkronisasi data perusahaan dan karyawan.
