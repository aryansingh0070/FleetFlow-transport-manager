# FleetFlow Transport Manager

FleetFlow is a premium browser-based transport business management dashboard.

**Made by Aryan Singh Sikarwar**

It is built as a placement-ready MVP for managing vehicles, drivers, conductors, routes, daily trips, expenses, document reminders, role-based views, backup/export, and profit/loss reports.

## How to run

Open `index.html` in any modern browser.

No installation is required. Data is saved in the browser using local storage. Use **Settings > Export Backup** to download your data as JSON.

Optional local server:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## Current modules

- Dashboard: collection, expenses, net profit, top vehicle, reminders, latest trips.
- Trips: daily trip entry with vehicle, route, driver, conductor, collection, fuel, toll, repair, challan, salary advance, and auto profit.
- Vehicles: vehicle number, type, seats, assigned route, driver, conductor, odometer, mileage, and document expiry.
- Staff: driver and conductor profile, phone, salary, attendance, license, address, assigned vehicle.
- Routes: route name, start, end, stops, distance, fare, shift, and status.
- Accounts: extra expense ledger for tax, EMI, workshop bills, salary, permit, and other costs.
- Reminders: insurance, permit, fitness, pollution, and driver license expiry alerts.
- Reports: vehicle-wise and route-wise profit ranking, CSV export, and printable report.
- Settings: business profile, demo reset, JSON backup export/import, and role permission demo.

## Roles

- Owner: full access.
- Accountant: trips, accounts, reports, reminders, settings.
- Dispatcher: trips, vehicles, staff, routes, reminders, settings.
- Driver: dashboard, trips, reminders, settings.

## Data model

Main entities:

- Vehicle
- Staff
- Route
- Trip
- Expense
- Business

Important relationships:

- A vehicle can be assigned to one route.
- A vehicle can have one driver and one conductor.
- A trip connects vehicle, route, driver, and conductor.
- Reports calculate profit from trip collection minus trip expenses and extra expenses.

## Profit formula

Trip expense:

```text
fuel + toll + repair + challan + salary advance
```

Trip profit:

```text
collection - trip expense
```

Business net profit:

```text
total trip collection - total trip expenses - extra ledger expenses
```

## Placement explanation

You can explain it like this:

> I built FleetFlow, a real-world transport management system for fleet owners. It manages vehicles, drivers, conductors, routes, trips, expenses, document reminders, and profit/loss reports. The project includes CRUD operations, role-based access simulation, dashboard analytics, local persistence, CSV export, JSON backup/import, and printable reports.

## GitHub upload

Run these commands inside this folder:

```bash
git init
git add .
git commit -m "Initial commit: FleetFlow transport manager"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fleetflow-transport-manager.git
git push -u origin main
```

Before running the remote command, create an empty GitHub repository named `fleetflow-transport-manager`.

## Deploy with GitHub Pages

After pushing to GitHub:

1. Open the GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/root`.
5. Save.

Your website URL will look like:

```text
https://YOUR_USERNAME.github.io/fleetflow-transport-manager/
```

## Deploy with Vercel or Netlify

This project is static, so deploy settings are simple:

- Build command: leave empty
- Output directory: `.`
- Install command: leave empty

## Suggested next upgrade

For a full-stack version:

- Frontend: React
- Backend: Node.js and Express
- Database: PostgreSQL or MongoDB
- Auth: JWT login with role-based access
- Reports: PDF and Excel export
- Notifications: WhatsApp or email reminders
- Mobile: driver trip-entry view
