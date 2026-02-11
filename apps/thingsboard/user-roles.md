---
slug: user-roles
title: User Roles
---

import Image from '@theme/IdealImage';

# User Roles

ThingsBoard uses roles to control what each user can see and do. This page explains the available roles, their permissions, and how to assign them to users.

## Available Roles

The system includes four predefined roles:

| Role | Description | Role Type |
| :--- | :--- | :--- |
| **System Administrator** | Full access to everything | Generic |
| **Customer Administrator** | User management and dashboard editing | Generic |
| **Customer Manager** | Device control and dashboard viewing | Group |
| **Customer User** | Read-only access | Group |


## Role Permissions Overview

The following table shows what each role can and cannot do:

| Action | System Administrator | Customer Administrator | Customer Manager | Customer User |
| :--- | :---: | :---: | :---: | :---: |
| View dashboards | Yes | Yes | Yes | Yes |
| Edit dashboards | Yes | Yes | No | No |
| Create dashboards | Yes | Yes | No | No |
| View devices and telemetry | Yes | Yes | Yes | Yes |
| Control devices (RPC) | Yes | Yes | Yes | No |
| Write device attributes | Yes | Yes | Yes | No |
| Create / delete devices | Yes | Yes | No | No |
| Manage users (create, edit, delete) | Yes | Yes | No | No |
| View user list | Yes | Yes | No | No |
| Create and manage roles | Yes | No | No | No |

:::tip
**Most users only need one of two roles:** **Customer Manager** for users who need to control devices, or **Customer User** for users who only need to view data.
:::

---

## Role Details

### System Administrator

Full access to all resources and operations. This role is intended for the main system owner.


- **Role Type:** Generic
- **Permissions:** All resources, all operations

### Customer Administrator

Designed for technical supervisors who need to manage users and configure dashboards, but should not have access to system-level settings.


- **Role Type:** Generic
- **Permissions:**

| Resource | Operations |
| :--- | :--- |
| **Device** | Read, Write, Create, Delete, Read Attributes, Write Attributes, Read Telemetry, RPC Call |
| **User** | Read, Write, Create, Delete, Read Attributes |
| **Dashboard** | Read, Write, Create |

### Customer Manager

Designed for users who need to operate devices and view dashboards, but should not edit dashboard layouts or manage other users.



- **Role Type:** Group
- **Permissions:** Create, Read, Read Attributes, Read Telemetry, Write, Write Attributes, RPC Call

### Customer User

Read-only access. Suitable for end users who only need to view dashboards and device data.


- **Role Type:** Group
- **Permissions:** Read, Read Telemetry, Read Attributes

---

## Assigning Roles to Users

Roles are assigned to users through **User Groups**. When you create or edit a user, you place them into a group that already has a role attached.

### Creating a New User

1. In the left menu, click **Users**.
2. Click the **+** button to add a new user.
3. Fill in the **User Details** (email, name, activation method).
4. Switch to the **Owner and Groups** tab at the top.
5. Select the **User Group** that corresponds to the role you want to assign (e.g., `Customer Managers`).
6. Click **Add**.

The new user will inherit the permissions of the selected group's role.

### Changing the Role of an Existing User

1. In the left menu, click **Users**.
2. Click on the user you want to modify.
3. Switch to the **Owner and Groups** tab.
4. Change the assigned **User Group** to move the user to a different role.
5. Click **Save**.

:::note
Changing a user's group takes effect immediately. The user will gain or lose permissions according to the new group's role.
:::

---

## Setting Up User Groups (System Administrators Only)

:::info
The sections below are only relevant for **System Administrators** (Tenant Administrators). If you are a Customer Administrator and already see user groups when creating users, you can skip this section.
:::

Before users can be assigned roles, each customer needs **User Groups** with roles attached. If you are a System Administrator and do not see any user groups available, you need to create them first.

### Step 1: Create User Groups for a Customer

1. In the left menu, navigate to **Customers** > **Hierarchy**.
2. Click on the desired customer.
3. Open the **User Groups** section.
4. Click the **+** button to create a new group (e.g., `Customer Managers`, `Customer Users`).
5. Repeat for each role level you need.

### Step 2: Assign a Role to Each User Group

1. Click on the user group you just created.
2. Click the **Edit** (pencil) icon.
3. Go to the **Roles** tab.
4. Click **Add** to assign a role.
5. Configure the following fields:
   - **Role Type** — `Group` or `Generic` (must match the role you want to assign).
   - **Role** — select the role (e.g., `Customer Manager`, `Customer User`).
   - **Group Owner** — select the customer this group belongs to.
   - **Type** — select the entity types this role applies to (Device, Asset, Dashboard, etc.).
   - **Group** — optionally select a specific entity group to further limit the scope.
6. Click **Add** to confirm.

Repeat this process for each user group, assigning the appropriate role to each one.

:::tip
A typical setup has three user groups per customer:
- **Customer Administrators** — with the `Customer Administrator` role (Generic)
- **Customer Managers** — with the `Customer Manager` role (Group), applied to device and dashboard groups
- **Customer Users** — with the `Customer User` role (Group), applied to device and dashboard groups
:::

Once the user groups have roles assigned, Customer Administrators can create new users and place them into the correct group as described above.

---

## Creating New Roles (System Administrators Only)

:::info
Only **System Administrators** (Tenant Administrators) can create or modify roles. If you need a new role, contact your system administrator.
:::

To create a new role:

1. Log in as **Tenant Administrator**.
2. Navigate to **Security** > **Roles** in the left menu.
3. Click the **+** button to add a new role.
4. Enter the role **Name** and **Description**.
5. Select the **Role Type**:
   - **Generic** — define permissions per resource (Device, User, Dashboard, etc.). Best for roles that need fine-grained control over different resource types.
   - **Group** — define permissions that apply to all entities within an assigned group. Best for simpler roles where the same operations apply across all resources.
6. Configure the **Permissions** based on the intended access level.
7. Click **Add**.

After creating the role, assign it to a customer's user group (see above) so that Customer Administrators can start placing users into it.
