---
slug: public-link-cz
title: Public Link
---

import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Jak vytvořit veřejný odkaz pouze pro čtení v ThingsBoardu

Tento návod vysvětluje, jak sdílet dashboard v ThingsBoardu prostřednictvím veřejné URL adresy. To umožňuje externím uživatelům prohlížet dashboard a jeho telemetrická data, aniž by potřebovali účet v ThingsBoardu. Ve výchozím nastavení je tento veřejný přístup striktně **pouze pro čtení (read-only)**, což zajišťuje bezpečnost vašich dat.

---

:::info
#### ⚠️ Důležitá poznámka: Práce se sub-zákazníky (podzákazníky)

Pokud tento veřejný odkaz konfigurujete pro konkrétního sub-zákazníka, je možné, že jako Tenant Administrator (Správce celého prostředí) neuvidíte jeho specifické skupiny zařízení (Device groups) nebo dashboardů.

Abyste to vyřešili, musíte se přihlásit jako **Customer Administrator (Správce zákazníka)** pro daného zákazníka:
1. **Přejděte** do sekce **Zákazníci (Customers)** v levém menu.
2. **Najděte** zákazníka, klikněte na ikonu **Spravovat uživatele zákazníka (Manage customer users)** a přihlaste se jako jeden z jeho administrátorů. 
3. **Alternativní řešení:** Pokud **sub-zákazník zatím nemá žádné účty typu Customer Administrator**, můžete vytvořit dočasný testovací profil. Nemusíte používat reálnou e-mailovou adresu (např. `test@temp.local`). Vytvořte uživatele, přihlaste se za něj, abyste dokončili tento návod, a následně tento dočasný uživatelský účet smažte.

*(Případně, pokud potřebujete pouze zkopírovat veřejný odkaz bez nutnosti přihlašování za sub-zákazníka, podívejte se na [**Pro Tip níže**](#-pro-tip-jak-získat-odkaz-bez-nutnosti-přihlašování-za-sub-zákazníka)!)*
:::

---

## Krok 1: Zveřejnění skupiny zařízení (Device Group)

Aby dashboard správně zobrazoval data, veřejný uživatel potřebuje přístup ke čtení zařízení, která do dashboardu data posílají.

**(Volitelné) Jak vytvořit novou skupinu zařízení:**
Pokud ještě nemáte konkrétní skupinu, můžete ji vytvořit:
1. **Přejděte** do **Zařízení -> Skupiny (Devices -> Groups)** v levém menu.
2. **Klikněte** na ikonu **"+"** (plus) v pravém horním rohu.
3. **Zadejte** název pro vaši novou skupinu a klikněte na **Přidat (Add)**.

**Zveřejnění skupiny zařízení:**
1. **Přejděte** do **Zařízení -> Skupiny (Devices -> Groups)** v levém menu.

![](images/public-link-3.png)

2. **Najděte** skupinu zařízení obsahující zařízení, která chcete na dashboardu zobrazit.
   > **Tip:** Můžete použít vlastní skupinu, nebo můžete použít výchozí skupinu **"All"** (Vše). Pokud zveřejníte skupinu "All", jakákoliv nová zařízení přidaná tomuto zákazníkovi v budoucnu se automaticky stanou viditelnými přes veřejný odkaz, aniž by byla nutná další konfigurace.
3. **Klikněte** na **ikonu Sdílet** (ikona se třemi propojenými tečkami) na pravé straně řádku dané skupiny. **Případně** klikněte na ikonu šipky/editace v daném řádku a vyberte **"Make entity group public"** (Zveřejnit skupinu entit).
4. **Výsledek:** ThingsBoard automaticky přiřadí této skupině zařízení oprávnění pouze pro čtení pro systémového veřejného uživatele.

![](images/public-link-4.png)

---

## Krok 2: Zveřejnění skupiny dashboardů (Dashboard Group)

Dále je potřeba nasdílet samotný dashboard.

**(Volitelné) Jak vytvořit novou skupinu dashboardů:**
Pokud ještě nemáte specifickou skupinu pro vaše dashboardy:
1. **Přejděte** do **Dashboardy -> Skupiny (Dashboards -> Groups)** v levém menu.
2. **Klikněte** na ikonu **"+"** (plus) v pravém horním rohu.
3. **Zadejte** název pro vaši novou skupinu a klikněte na **Přidat (Add)**.

**Zveřejnění skupiny dashboardů:**
1. **Přejděte** do **Dashboardy -> Skupiny (Dashboards -> Groups)** v levém menu.

![](images/public-link-1.png)

2. **Najděte** skupinu dashboardů, která obsahuje dashboard, jenž chcete sdílet.
3. **Klikněte** na **ikonu Sdílet** (ikona se třemi propojenými tečkami) na pravé straně řádku dané skupiny. **Případně** klikněte na ikonu šipky/editace v daném řádku a vyberte **"Make entity group public"** (Zveřejnit skupinu entit).

![](images/public-link-2.png)

---

## Krok 3: Získání veřejného odkazu (Public Link)

Nyní, když jsou jak zařízení, tak i dashboard zveřejněné, můžete vygenerovat a sdílet funkční URL adresu.

1. **Zůstaňte** v sekci **Dashboardy -> Skupiny (Dashboards -> Groups)**.
2. **Klikněte** přímo na **název** skupiny dashboardů, kterou jste právě zveřejnili. Tím se skupina otevře a zobrazí se seznam všech dashboardů uvnitř.
3. **Najděte** konkrétní dashboard, který chcete sdílet.
4. **Klikněte** na úplně první ikonu na pravé straně řádku dashboardu – **ikonu řetězu (🔗)** s názvem "Public dashboard link".
5. **Výsledek:** URL adresa je nyní zkopírována do vaší schránky. 

Nyní můžete tento odkaz poslat svým klientům nebo uživatelům. Kdokoliv s tímto odkazem si může prohlédnout dashboard a jeho data v reálném čase přímo ve svém prohlížeči, aniž by se musel přihlašovat.

![](images/public-link-5.png)

## 💡 Pro Tip: Jak získat odkaz bez nutnosti přihlašování za sub-zákazníka

Pokud pracujete na úrovni hlavního zákazníka (Tenant Administrator) a chcete zkopírovat veřejný odkaz bez zdlouhavého přehlašování na profil administrátora podzákazníka, můžete využít tuto zkratku:

1. **Přejděte** do hlavního seznamu **Dashboardy** (případně Zařízení), kde vidíte všechny dashboardy/zařízení v celém systému, včetně těch od vašich podzákazníků.
2. **Najděte** konkrétní dashboard, který chcete sdílet.
3. **Podívejte se** do sloupečku **Groups (Skupiny)** v řádku u tohoto dashboardu.
4. **Klikněte** přímo na název skupiny v tomto sloupečku.

![](images/public-link-6.png)

5. **Výsledek:** Systém vás přesměruje přímo na stránku s obsahem dané skupiny. Zde už stačí jen kliknout na **ikonu řetězu (🔗)** a zkopírovat veřejný odkaz přesně tak, jak je popsáno v [**Kroku 3**](#krok-3-získání-veřejného-odkazu-public-link) výše.

![](images/public-link-5.png)