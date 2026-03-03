---
title: "BOOKER"
summary: "Room & vehicle reservation system — rooms, vehicles, and outgoing letters management with approval workflows."
category: "logistics"
role: "Fullstack Developer"
timeframe: "2024"
stack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"]
featured: false
publishedAt: 2024-04-01
tags: ["Reservation", "Booking", "Approval Workflow"]
---

## About the Project

BOOKER is a reservation management system for booking rooms, vehicles, and managing outgoing letters. Features multi-level approval workflows for each booking type.

### Key Features

- **Room booking** — Reserve meeting rooms with schedule conflict detection
- **Vehicle booking** — Fleet vehicle reservation with availability calendar
- **Outgoing letters** — Letter management with approval and tracking
- **Approval workflow** — Multi-level approval process for all requests
- **Calendar view** — Visual booking schedule and availability overview

### Architecture

Laravel handles the booking engine, approval workflow, and admin dashboard. Conflict detection prevents double-booking of rooms and vehicles. Notification system alerts approvers of pending requests.
