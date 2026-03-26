---
title: "PINJAMRUANG"
summary: "Room booking system — 3-tier approval workflow, schedule conflict detection, and departmental booking management."
category: "logistics"
role: "Fullstack Developer"
timeframe: "2021"
stack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"]
featured: false
publishedAt: 2021-08-01
tags: ["Room Booking", "Approval Workflow", "Scheduling"]
---

## About the Project

PINJAMRUANG is a room booking system featuring a 3-tier approval workflow. Manages meeting room reservations with schedule conflict detection and departmental access control.

### Key Features

- **3-tier approval** — Request → Department Head → Facility Admin approval chain
- **Conflict detection** — Prevents double-booking with real-time availability checks
- **Calendar view** — Visual schedule overview for all rooms
- **Department management** — Booking quotas and access per department
- **Notification system** — Email alerts for booking status updates

### Architecture

Laravel handles the booking engine with 3-tier approval middleware. Calendar component displays room availability in real-time. MySQL with optimistic locking prevents booking conflicts.
