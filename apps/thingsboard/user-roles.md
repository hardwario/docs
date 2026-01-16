---
slug: user-roles
title: User Roles
---

import Image from '@theme/IdealImage';

# Configuring User Roles & Hierarchies

This guide explains how to set up a 4-tier permission structure in ThingsBoard. We will configure roles ranging from full system administration to read-only access for end-users.

## 1. The Role Hierarchy
We will implement the following structure:

1. **Tenant Administrator:** All permissions (System Owner).
2. **Customer Administrator:** Full User management (add/delete) & Dashboard editing. **Cannot delete** Devices.
3. **Site Manager:** Device control (RPC) & Dashboard viewing. No editing permissions.
4. **Dashboard Viewer:** Read-only access.

---

## 2. How to Create a New Role
All roles below (except Tenant Admin) are created using these steps:

1. Login as **Tenant Administrator**.
2. Navigate to **Security** > **Roles** in the left menu.
3. Click the **+ (Plus)** button to add a new role.
4. Name the role (e.g., `Customer Administrator`).
5. Set **Role Type** to `Generic`.
6. In the **Permissions** section, click **Add** to define specific rules (see Section 3 below).

[ThingsBoard - User Roles](thingsboard-user-roles.png)

---

## 3. Configuration Details

### Level 1: Tenant Administrator
*Note: This is the default Super Admin role. No configuration needed.*
* **Permissions:** All Permissions.

### Level 2: Customer Administrator
*Target Audience: Technical Supervisors / School Admins.*

* **Description:** Can edit Dashboards and fully manage Users (create/delete). Cannot delete Devices.
* **Permissions Setup:**

| Resource | Operations | Notes |
| :--- | :--- | :--- |
| **User** | `All` (Read, Write, Create, Delete) | Can add/remove teachers. |
| **Device** | `Read`, `Write`, `RPC` | **NO Delete**. Safe hardware management. |
| **Dashboard** | `Read`, `Write` | Can edit layout and widgets. |
| **Asset** | `Read`, `Write` | Can edit building details. |
| **Alarm** | `Read`, `Write` | Can acknowledge alarms. |

### Level 3: Site Manager
*Target Audience: Directors / Principals.*

* **Description:** Can view Dashboards and control Devices (RPC/Attributes). No permission to edit layouts.
* **Permissions Setup:**

| Resource | Operations | Notes |
| :--- | :--- | :--- |
| **Device** | `Read`, `Write`, `RPC` | Can change temperature, switch lights. |
| **Dashboard** | `Read` | **Read Only**. Cannot break the graphs. |
| **User** | `Read` | Can see list of users, but cannot edit. |
| **Alarm** | `Read`, `Write` | Can acknowledge alarms. |

### Level 4: Dashboard Viewer
*Target Audience: Teachers / General Staff.*

* **Description:** Read-only access to Dashboards and Devices. No control permissions.
* **Permissions Setup:**

| Resource | Operations | Notes |
| :--- | :--- | :--- |
| **Device** | `Read` | View data only. |
| **Dashboard** | `Read` | View graphs only. |
| **Alarm** | `Read` | View status only. |
| **Asset** | `Read` | View buildings only. |

---

## 4. How to Assign Roles
Once the roles are created, assign them to users within a specific Customer (e.g., "School A").

1. Go to **Customers** > Click on a specific Customer (e.g., "School A").
2. Click **Manage Customer Users** (Person icon).
3. Click **+ (Add User)**.
4. Fill in the email and activation method.
5. **Crucial Step:** In the **Roles** dropdown, select the role you created (e.g., `Site Manager`).
6. Click **Add**.

**Result:** This user will now have the permissions defined in the role, but **ONLY** for the devices and dashboards belonging to "School A".