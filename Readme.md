# 🏥 Employee Management Backend - Express.js

Selamat datang di **Backend Aplikasi Manajemen Karyawan & Tenaga Kesehatan**. Proyek ini menggunakan **Node.js**, **Express.js**, dan **Sequelize ORM** dengan database **PostgreSQL**. Backend ini menyediakan RESTful API untuk mengelola data karyawan, termasuk foto, lokasi, dan peran (roles).

---

## 🚀 Teknologi

- **Node.js** & **Express.js** – Server & routing
- **Sequelize** – ORM untuk PostgreSQL
- **Multer** – Upload foto
- **Yup** – Validasi input
- **Cors & Dotenv** – Keamanan dan konfigurasi
- **PostgreSQL** – Database relasional

---

## 📦 Fitur

- ✅ CRUD Data Karyawan
- ✅ Upload & simpan foto karyawan
- ✅ Relasi **Many-to-Many**: Karyawan ↔ Role
- ✅ Validasi data menggunakan Yup
- ✅ Lokasi dinamis (provinsi → kota → kecamatan → kelurahan)
- ✅ API clean & modular (Controller, Route, Repository)

---

## 🛠️ Instalasi

1. **Clone repository:**

```bash
   git clone https://github.com/username/employee-management-backend.git
   cd employee-management-backend
2. **Install dependencies: **
    Clone repository:**
    npm install
3. **Atur file environment:**
    PORT=5000
    DB_HOST=localhost
    DB_USER=postgres
    DB_PASSWORD=yourpassword
    DB_NAME=employee_db
    DB_PORT=5432
4. **Restore database "medeva_db" ke lokal**
```
