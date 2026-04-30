---
slug: users-managing-cz
title: Managing Users
---

import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Návod na správu viditelnosti a oprávnění v ThingsBoard

ThingsBoard je mimořádně silný nástroj v tom, že nám umožňuje **kompletně určit, co zákazník vidí a nevidí**, a přesně definovat, co v systému může a nemůže dělat. Díky tomu můžete vytvořit čisté a bezpečné prostředí pro různé typy uživatelů.

---

## 1. Vytvoření uživatelských rolí

Prvním krokem je definice rolí, které určují úroveň oprávnění.

1.  V levém menu přejděte do sekce **Security** (poslední položka).
2.  Rozklikněte ji a vyberte položku **Roles**.
3.  Pro vytvoření nové role klikněte na tlačítko **plus (+)** vpravo nahoře.
4.  Zadejte **Název**, **Popis** a zvolte **Typ role (Role type)**.

![](images/roles-2.png)

### Rozdíl mezi typy rolí:
* **Group (Skupinová):** U tohoto typu se zadávají pouze operace (např. čtení, zápis), které může uživatel provádět. Tato role se následně propojuje s konkrétní entitou (zařízením, dashboardem) až při tvorbě uživatelských skupin.
* **Generic (Generická):** Zde se rovnou určuje, co uživatel může a nemůže. Pozor – pokud zde udělíte přístup k zařízením (Devices), uživatel uvidí **všechna zařízení** daného zákazníka, nikoliv jen vybranou skupinu.

<Tabs>
  <TabItem value="lte" label="Group">
![](images/roles-3.png)
  </TabItem>
  <TabItem value="lora" label="Generic">
![](images/roles-4.png)
  </TabItem>
</Tabs>

**DŮLEŽITÉ (Změna údajů uživatele):**
Pro uživatele, kteří mají omezený přístup, je dobré vytvořit jednu **Generic** roli, kde v sekci permissions povolíte u resource **Profile** operaci **All**. Tuto roli pak přidáte uživateli, aby si mohl sám měnit heslo a své údaje.

![](images/roles-6.png)

---

## 2. Tvorba uživatelských skupin

Nyní je potřeba vytvořit skupiny, kterým budeme přiřazovat dříve vytvořené role.

1.  Přejděte do sekce **Users** a záložky **Groups**.
2.  Uvidíte zde výchozí skupiny: *Customer Administrators* (můžou vše) a *Customer Users* (vidí vše, ale nemůžou editovat).
3.  Klikněte na **plus (+)** vpravo nahoře, zadejte název a popis skupiny.

![](images/groups-2.png)

4.  Po vytvoření klikněte na šipku vlevo vedle názvu vaší skupiny. Tím se dostanete do detailů.
5.  Přejděte na záložku **Roles**.

![](images/groups-4.png)

### Přidání oprávnění skupině:
1.  Klikněte na tlačítko **plus (+)** vlevo od vyhledávání.
2.  Vyberte váš **Role type** a konkrétní roli.
3.  Pokud jste zvolili **Group role type**, musíte vyplnit:
    * **Group owner:** Většinou váš profil nebo daný zákazník.
    * **Type:** Zde určíte, k čemu se pravidla vážou (např. *Device* nebo *Dashboard*).
    * **Entity group:** Konkrétní skupina zařízení/dashboardů, kterou má uživatel vidět.

![](images/groups-6.png)

:::info
**Entity group** je potřeba mít připravené předem. To znamená mít zařízení nebo dashboardy rozdělené do skupin. Tyto skupiny pak v tomto kroku párujete s uživatelskou skupinou. Skupiny pro zařízení/dashboardy se tvoří podobně jako ty uživatelské.
:::

Pokud přidáváte **Generic** roli (např. tu pro editaci profilu), bude systém chtít pouze výběr dané role a bude se vztahovat na všeobecná práva uživatele.

![](images/groups-7.png)

---

## 3. Přidávání uživatelů do skupiny

Uživatele můžete do připravené skupiny přidat dvěma způsoby:

1.  **Nový uživatel:** Přímo ve vaší skupině (v záložce Users) klikněte na tlačítko **plus (+)**.
  
![](images/groups-3.png)

2.  **Existující uživatel:** * Přejděte do hlavní sekce **Users** -> **Users**.
    * Klikněte na konkrétního uživatele.
    * V záložce **Details** klikněte na tlačítko **Manage owner and groups**.
    * Vyberte požadovanou skupinu a potvrďte tlačítkem **Update**.

![](images/user-2.png)