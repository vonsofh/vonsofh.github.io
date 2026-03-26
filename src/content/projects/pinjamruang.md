---
title: "PINJAMRUANG"
summary: "Sistem peminjaman ruangan kampus — 3 role (admin, dosen, mahasiswa), approval workflow, dan booking online."
category: "logistics"
role: "Fullstack Developer"
timeframe: "2021"
stack: ["Laravel", "PHP", "JavaScript", "jQuery", "HTML", "CSS", "Blade", "MySQL"]
featured: false
publishedAt: 2021-08-01
tags: ["Room Booking", "Campus", "Workflow", "Open Source"]
---

## Tentang Proyek

PINJAMRUANG adalah aplikasi peminjaman ruangan kampus berbasis web. Dengan 3 role (admin/TU, dosen, mahasiswa), sistem menyederhanakan alur peminjaman ruangan dengan approval bertingkat.

### Fitur Utama

- **3 role pengguna** — Admin/TU Jurusan, Dosen, dan Mahasiswa
- **Approval bertingkat** — Mahasiswa request → Dosen approve → TU konfirmasi
- **Booking online** — Mahasiswa bisa meminjam ruangan secara online
- **Cek ketersediaan** — Lihat ruangan yang tersedia dan yang sudah dibooking
- **Validasi otomatis** — Tidak bisa meminjam ruangan yang sudah terpakai atau punya pinjaman aktif
- **Flowchart tata cara** — Halaman utama menampilkan alur peminjaman

### Arsitektur

Dibangun dengan Laravel dan Blade. Sistem menggunakan approval workflow bertingkat (mahasiswa → dosen → TU) dengan validasi otomatis untuk mencegah konflik booking.
