---
title: "E-MENU"
summary: "SaaS restaurant digital menu — multi-tenant platform with session-based ordering, QR code menus, and order tracking."
category: "saas"
role: "Fullstack Developer"
timeframe: "2024"
stack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "REST API"]
featured: false
publishedAt: 2024-07-01
tags: ["Restaurant", "SaaS", "Digital Menu", "Multi-Tenant"]
---

## About the Project

E-MENU is a SaaS digital menu platform for restaurants. Multi-tenant architecture allows multiple restaurants to operate independently. Customers browse menus and place orders through session-based QR code access.

### Key Features

- **Multi-tenant SaaS** — Each restaurant gets an isolated menu and management panel
- **QR code access** — Customers scan table QR codes to view menus
- **Session tracking** — Order sessions linked to specific tables
- **Real-time orders** — Kitchen receives orders instantly
- **Menu management** — Restaurant owners manage items, categories, and pricing

### Architecture

Laravel multi-tenant system with subdomain-based restaurant isolation. QR codes generate session tokens for table-specific ordering. Real-time order updates via event broadcasting.
