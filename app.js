const STORAGE_KEY = "fleetflow.transport.v1";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "trips", label: "Trips", icon: "trip" },
  { id: "vehicles", label: "Vehicles", icon: "vehicle" },
  { id: "staff", label: "Staff", icon: "staff" },
  { id: "routes", label: "Routes", icon: "route" },
  { id: "accounts", label: "Accounts", icon: "account" },
  { id: "reminders", label: "Reminders", icon: "bell" },
  { id: "reports", label: "Reports", icon: "report" },
  { id: "settings", label: "Settings", icon: "settings" }
];

const permissions = {
  owner: ["dashboard", "trips", "vehicles", "staff", "routes", "accounts", "reminders", "reports", "settings"],
  accountant: ["dashboard", "trips", "accounts", "reminders", "reports", "settings"],
  dispatcher: ["dashboard", "trips", "vehicles", "staff", "routes", "reminders", "settings"],
  driver: ["dashboard", "trips", "reminders", "settings"]
};

const expenseCategories = ["Fuel", "Toll", "Repair", "Challan", "Salary", "Tax", "EMI", "Permit", "Other"];

const seedData = {
  business: {
    name: "Sikarwar Transport Services",
    city: "Jaipur",
    owner: "Aryan Sikarwar"
  },
  role: "owner",
  activeView: "dashboard",
  search: "",
  vehicles: [
    {
      id: "veh-1",
      plate: "RJ14 PB 4821",
      type: "Bus",
      seats: 42,
      status: "Active",
      routeId: "route-1",
      driverId: "staff-1",
      conductorId: "staff-3",
      odometer: 218430,
      mileage: 5.2,
      insuranceExpiry: "2026-07-12",
      permitExpiry: "2026-09-20",
      fitnessExpiry: "2026-08-05",
      pollutionExpiry: "2026-06-28"
    },
    {
      id: "veh-2",
      plate: "RJ23 TA 1190",
      type: "Mini Bus",
      seats: 28,
      status: "Active",
      routeId: "route-2",
      driverId: "staff-2",
      conductorId: "staff-4",
      odometer: 143880,
      mileage: 7.1,
      insuranceExpiry: "2026-11-04",
      permitExpiry: "2026-07-08",
      fitnessExpiry: "2026-10-17",
      pollutionExpiry: "2026-07-02"
    },
    {
      id: "veh-3",
      plate: "RJ45 PA 7309",
      type: "Traveller",
      seats: 17,
      status: "Maintenance",
      routeId: "route-3",
      driverId: "staff-5",
      conductorId: "",
      odometer: 92500,
      mileage: 9.8,
      insuranceExpiry: "2026-12-14",
      permitExpiry: "2027-01-09",
      fitnessExpiry: "2026-07-21",
      pollutionExpiry: "2026-08-11"
    }
  ],
  staff: [
    {
      id: "staff-1",
      name: "Mahesh Yadav",
      role: "Driver",
      phone: "9876543210",
      salary: 28000,
      status: "Present",
      licenseNo: "RJ142011002211",
      licenseExpiry: "2026-08-25",
      assignedVehicleId: "veh-1",
      address: "Sanganer, Jaipur"
    },
    {
      id: "staff-2",
      name: "Rakesh Meena",
      role: "Driver",
      phone: "9829012345",
      salary: 26000,
      status: "Present",
      licenseNo: "RJ232015006780",
      licenseExpiry: "2026-07-18",
      assignedVehicleId: "veh-2",
      address: "Tonk Road, Jaipur"
    },
    {
      id: "staff-3",
      name: "Sunil Gurjar",
      role: "Conductor",
      phone: "9414011122",
      salary: 18000,
      status: "Present",
      licenseNo: "",
      licenseExpiry: "",
      assignedVehicleId: "veh-1",
      address: "Chomu, Jaipur"
    },
    {
      id: "staff-4",
      name: "Imran Khan",
      role: "Conductor",
      phone: "9460112367",
      salary: 17500,
      status: "Leave",
      licenseNo: "",
      licenseExpiry: "",
      assignedVehicleId: "veh-2",
      address: "Ajmer Road, Jaipur"
    },
    {
      id: "staff-5",
      name: "Kailash Jangid",
      role: "Driver",
      phone: "9829222244",
      salary: 25000,
      status: "Present",
      licenseNo: "RJ452018005612",
      licenseExpiry: "2027-02-10",
      assignedVehicleId: "veh-3",
      address: "Bagru, Jaipur"
    }
  ],
  routes: [
    {
      id: "route-1",
      name: "Jaipur - Sikar",
      start: "Jaipur",
      end: "Sikar",
      stops: "Chomu, Ringas, Palsana",
      distance: 116,
      fare: 160,
      shift: "Morning",
      status: "Active"
    },
    {
      id: "route-2",
      name: "Jaipur - Ajmer",
      start: "Jaipur",
      end: "Ajmer",
      stops: "Kishangarh, Dudu",
      distance: 135,
      fare: 190,
      shift: "Evening",
      status: "Active"
    },
    {
      id: "route-3",
      name: "Jaipur Local School",
      start: "Mansarovar",
      end: "Vaishali Nagar",
      stops: "Gopalpura, Sodala, Queens Road",
      distance: 42,
      fare: 80,
      shift: "School",
      status: "Paused"
    }
  ],
  trips: [
    {
      id: "trip-1",
      date: "2026-06-20",
      vehicleId: "veh-1",
      routeId: "route-1",
      driverId: "staff-1",
      conductorId: "staff-3",
      status: "Completed",
      passengers: 39,
      collection: 6240,
      fuel: 2300,
      toll: 360,
      repair: 0,
      challan: 0,
      salaryAdvance: 500,
      notes: "Regular morning trip"
    },
    {
      id: "trip-2",
      date: "2026-06-20",
      vehicleId: "veh-2",
      routeId: "route-2",
      driverId: "staff-2",
      conductorId: "staff-4",
      status: "Running",
      passengers: 24,
      collection: 4560,
      fuel: 2100,
      toll: 420,
      repair: 0,
      challan: 0,
      salaryAdvance: 0,
      notes: "Conductor on leave, helper arranged"
    },
    {
      id: "trip-3",
      date: "2026-06-19",
      vehicleId: "veh-1",
      routeId: "route-1",
      driverId: "staff-1",
      conductorId: "staff-3",
      status: "Completed",
      passengers: 41,
      collection: 6560,
      fuel: 2400,
      toll: 360,
      repair: 700,
      challan: 0,
      salaryAdvance: 0,
      notes: "Minor headlight repair"
    },
    {
      id: "trip-4",
      date: "2026-06-18",
      vehicleId: "veh-2",
      routeId: "route-2",
      driverId: "staff-2",
      conductorId: "staff-4",
      status: "Completed",
      passengers: 26,
      collection: 4940,
      fuel: 2200,
      toll: 420,
      repair: 0,
      challan: 1000,
      salaryAdvance: 0,
      notes: "Traffic fine near Kishangarh"
    },
    {
      id: "trip-5",
      date: "2026-05-15",
      vehicleId: "veh-1",
      routeId: "route-1",
      driverId: "staff-1",
      conductorId: "staff-3",
      status: "Completed",
      passengers: 38,
      collection: 6080,
      fuel: 2250,
      toll: 360,
      repair: 0,
      challan: 0,
      salaryAdvance: 0,
      notes: "May mid-month run"
    },
    {
      id: "trip-6",
      date: "2026-04-22",
      vehicleId: "veh-2",
      routeId: "route-2",
      driverId: "staff-2",
      conductorId: "staff-4",
      status: "Completed",
      passengers: 27,
      collection: 5130,
      fuel: 2150,
      toll: 420,
      repair: 450,
      challan: 0,
      salaryAdvance: 0,
      notes: "Brake pad replacement"
    },
    {
      id: "trip-7",
      date: "2026-03-10",
      vehicleId: "veh-1",
      routeId: "route-1",
      driverId: "staff-1",
      conductorId: "staff-3",
      status: "Completed",
      passengers: 40,
      collection: 6400,
      fuel: 2380,
      toll: 360,
      repair: 0,
      challan: 0,
      salaryAdvance: 300,
      notes: "Holi season rush"
    },
    {
      id: "trip-8",
      date: "2026-02-08",
      vehicleId: "veh-2",
      routeId: "route-2",
      driverId: "staff-2",
      conductorId: "staff-4",
      status: "Completed",
      passengers: 22,
      collection: 4180,
      fuel: 2000,
      toll: 420,
      repair: 0,
      challan: 0,
      salaryAdvance: 0,
      notes: "Winter schedule"
    },
    {
      id: "trip-9",
      date: "2026-01-18",
      vehicleId: "veh-1",
      routeId: "route-1",
      driverId: "staff-1",
      conductorId: "staff-3",
      status: "Completed",
      passengers: 35,
      collection: 5600,
      fuel: 2200,
      toll: 360,
      repair: 0,
      challan: 500,
      salaryAdvance: 0,
      notes: "New year week"
    }
  ],
  expenses: [
    {
      id: "exp-1",
      date: "2026-06-20",
      vehicleId: "veh-3",
      category: "Repair",
      amount: 8400,
      paidTo: "Shree Balaji Workshop",
      note: "Clutch plate and labour"
    },
    {
      id: "exp-2",
      date: "2026-06-19",
      vehicleId: "veh-1",
      category: "Tax",
      amount: 3200,
      paidTo: "RTO",
      note: "Quarterly road tax"
    },
    {
      id: "exp-3",
      date: "2026-05-12",
      vehicleId: "veh-2",
      category: "Fuel",
      amount: 4500,
      paidTo: "Indian Oil Pump",
      note: "Bulk diesel purchase"
    },
    {
      id: "exp-4",
      date: "2026-04-05",
      vehicleId: "",
      category: "Salary",
      amount: 12000,
      paidTo: "Staff payroll",
      note: "April advance salaries"
    },
    {
      id: "exp-5",
      date: "2026-03-20",
      vehicleId: "veh-1",
      category: "Permit",
      amount: 5600,
      paidTo: "RTO Jaipur",
      note: "Route permit renewal"
    },
    {
      id: "exp-6",
      date: "2026-02-14",
      vehicleId: "veh-3",
      category: "EMI",
      amount: 18500,
      paidTo: "HDFC Bank",
      note: "Vehicle loan EMI"
    }
  ],
  filters: {
    dashboard: { months: "6" },
    trips: { status: "", vehicleId: "", sortBy: "date", sortDir: "desc" },
    vehicles: { status: "", type: "", sortBy: "plate", sortDir: "asc" },
    staff: { role: "", status: "", sortBy: "name", sortDir: "asc" },
    routes: { status: "", shift: "", sortBy: "name", sortDir: "asc" },
    expenses: { category: "", vehicleId: "", sortBy: "date", sortDir: "desc" }
  }
};

let state = loadState();
let toastTimer = null;
let chartInstances = [];

const defaultFilters = structuredClone(seedData.filters);

const ACTIVE_TRIP_STATUSES = ["Running", "Scheduled", "In Transit", "Pending"];
const COMPLETED_TRIP_STATUSES = ["Completed"];

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seedData);

  try {
    return normalizeState(JSON.parse(saved));
  } catch {
    return structuredClone(seedData);
  }
}

function normalizeState(source) {
  const merged = {
    ...structuredClone(seedData),
    ...source,
    business: { ...seedData.business, ...(source.business || {}) },
    filters: {
      ...defaultFilters,
      ...(source.filters || {}),
      dashboard: { ...defaultFilters.dashboard, ...(source.filters?.dashboard || {}) },
      trips: { ...defaultFilters.trips, ...(source.filters?.trips || {}) },
      vehicles: { ...defaultFilters.vehicles, ...(source.filters?.vehicles || {}) },
      staff: { ...defaultFilters.staff, ...(source.filters?.staff || {}) },
      routes: { ...defaultFilters.routes, ...(source.filters?.routes || {}) },
      expenses: { ...defaultFilters.expenses, ...(source.filters?.expenses || {}) }
    }
  };

  return sanitizeState(merged);
}

function sanitizeState(source) {
  return {
    ...source,
    business: sanitizeRecord(source.business || {}),
    vehicles: (source.vehicles || []).map(sanitizeRecord),
    staff: (source.staff || []).map(sanitizeRecord),
    routes: (source.routes || []).map(sanitizeRecord),
    trips: (source.trips || []).map(sanitizeRecord),
    expenses: (source.expenses || []).map(sanitizeRecord)
  };
}

function sanitizeRecord(record) {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, typeof value === "string" ? cleanText(value) : value])
  );
}

function cleanText(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };

  return String(value ?? "")
    .trim()
    .replace(/[&<>"']/g, (char) => entities[char]);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function money(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

function shortDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function daysLeft(value) {
  if (!value) return 9999;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${value}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function getById(collection, id) {
  return state[collection].find((item) => item.id === id);
}

function vehicleName(id) {
  return getById("vehicles", id)?.plate || "Unassigned";
}

function staffName(id) {
  return getById("staff", id)?.name || "Unassigned";
}

function routeName(id) {
  return getById("routes", id)?.name || "Unassigned";
}

function tripExpense(trip) {
  return Number(trip.fuel || 0) + Number(trip.toll || 0) + Number(trip.repair || 0) + Number(trip.challan || 0) + Number(trip.salaryAdvance || 0);
}

function tripProfit(trip) {
  return Number(trip.collection || 0) - tripExpense(trip);
}

function totalTripCollection(trips = state.trips) {
  return trips.reduce((sum, trip) => sum + Number(trip.collection || 0), 0);
}

function totalTripExpenses(trips = state.trips) {
  return trips.reduce((sum, trip) => sum + tripExpense(trip), 0);
}

function totalExtraExpenses(expenses = state.expenses) {
  return expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function netProfit(trips = state.trips, expenses = state.expenses) {
  return totalTripCollection(trips) - totalTripExpenses(trips) - totalExtraExpenses(expenses);
}

function totalRevenue(trips = state.trips) {
  return totalTripCollection(trips);
}

function totalExpensesAll(trips = state.trips, expenses = state.expenses) {
  return totalTripExpenses(trips) + totalExtraExpenses(expenses);
}

function countActiveTrips(trips = state.trips) {
  return trips.filter((trip) => ACTIVE_TRIP_STATUSES.includes(trip.status)).length;
}

function countCompletedTrips(trips = state.trips) {
  return trips.filter((trip) => COMPLETED_TRIP_STATUSES.includes(trip.status)).length;
}

function getFilterConfig(view = state.activeView) {
  return state.filters[view] || {};
}

function setFilterValue(view, key, value) {
  if (!state.filters[view]) state.filters[view] = { ...defaultFilters[view] };
  state.filters[view][key] = value;
}

function sortItems(items, sortBy, sortDir, getters) {
  const direction = sortDir === "asc" ? 1 : -1;
  const getter = getters[sortBy] || getters.default;

  return [...items].sort((left, right) => {
    const a = getter(left);
    const b = getter(right);

    if (typeof a === "number" && typeof b === "number") return (a - b) * direction;
    return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" }) * direction;
  });
}

function applyTripFilters(trips) {
  const filters = getFilterConfig("trips");
  return trips.filter((trip) => {
    if (filters.status && trip.status !== filters.status) return false;
    if (filters.vehicleId && trip.vehicleId !== filters.vehicleId) return false;
    return true;
  });
}

function applyVehicleFilters(vehicles) {
  const filters = getFilterConfig("vehicles");
  return vehicles.filter((vehicle) => {
    if (filters.status && vehicle.status !== filters.status) return false;
    if (filters.type && vehicle.type !== filters.type) return false;
    return true;
  });
}

function applyStaffFilters(people) {
  const filters = getFilterConfig("staff");
  return people.filter((person) => {
    if (filters.role && person.role !== filters.role) return false;
    if (filters.status && person.status !== filters.status) return false;
    return true;
  });
}

function applyRouteFilters(routes) {
  const filters = getFilterConfig("routes");
  return routes.filter((route) => {
    if (filters.status && route.status !== filters.status) return false;
    if (filters.shift && route.shift !== filters.shift) return false;
    return true;
  });
}

function applyExpenseFilters(expenses) {
  const filters = getFilterConfig("expenses");
  return expenses.filter((expense) => {
    if (filters.category && expense.category !== filters.category) return false;
    if (filters.vehicleId && expense.vehicleId !== filters.vehicleId) return false;
    return true;
  });
}

function getFilteredTrips() {
  const searched = state.trips.filter((trip) =>
    matchesSearch(trip.date, vehicleName(trip.vehicleId), routeName(trip.routeId), staffName(trip.driverId), trip.status, trip.notes)
  );
  const filters = getFilterConfig("trips");
  return sortItems(applyTripFilters(searched), filters.sortBy, filters.sortDir, {
    date: (trip) => trip.date,
    collection: (trip) => Number(trip.collection || 0),
    profit: (trip) => tripProfit(trip),
    status: (trip) => trip.status,
    default: (trip) => trip.date
  });
}

function getFilteredVehicles() {
  const searched = state.vehicles.filter((vehicle) =>
    matchesSearch(vehicle.plate, vehicle.type, vehicle.status, routeName(vehicle.routeId), staffName(vehicle.driverId), staffName(vehicle.conductorId))
  );
  const filters = getFilterConfig("vehicles");
  return sortItems(applyVehicleFilters(searched), filters.sortBy, filters.sortDir, {
    plate: (vehicle) => vehicle.plate,
    type: (vehicle) => vehicle.type,
    status: (vehicle) => vehicle.status,
    default: (vehicle) => vehicle.plate
  });
}

function getFilteredStaff() {
  const searched = state.staff.filter((person) =>
    matchesSearch(person.name, person.role, person.phone, person.status, person.licenseNo, person.address, vehicleName(person.assignedVehicleId))
  );
  const filters = getFilterConfig("staff");
  return sortItems(applyStaffFilters(searched), filters.sortBy, filters.sortDir, {
    name: (person) => person.name,
    role: (person) => person.role,
    salary: (person) => Number(person.salary || 0),
    status: (person) => person.status,
    default: (person) => person.name
  });
}

function getFilteredRoutes() {
  const searched = state.routes.filter((route) => matchesSearch(route.name, route.start, route.end, route.stops, route.shift, route.status));
  const filters = getFilterConfig("routes");
  return sortItems(applyRouteFilters(searched), filters.sortBy, filters.sortDir, {
    name: (route) => route.name,
    distance: (route) => Number(route.distance || 0),
    fare: (route) => Number(route.fare || 0),
    status: (route) => route.status,
    default: (route) => route.name
  });
}

function getFilteredExpenses() {
  const searched = state.expenses.filter((expense) =>
    matchesSearch(expense.date, vehicleName(expense.vehicleId), expense.category, expense.paidTo, expense.note)
  );
  const filters = getFilterConfig("expenses");
  return sortItems(applyExpenseFilters(searched), filters.sortBy, filters.sortDir, {
    date: (expense) => expense.date,
    amount: (expense) => Number(expense.amount || 0),
    category: (expense) => expense.category,
    default: (expense) => expense.date
  });
}

function getMonthKey(dateValue) {
  if (!dateValue) return "";
  return dateValue.slice(0, 7);
}

function formatMonthLabel(monthKey) {
  if (!monthKey) return "";
  const [year, month] = monthKey.split("-");
  return new Intl.DateTimeFormat("en-IN", { month: "short", year: "2-digit" }).format(new Date(Number(year), Number(month) - 1, 1));
}

function getMonthlyAnalyticsData(trips = state.trips, expenses = state.expenses) {
  const monthCount = Number(getFilterConfig("dashboard").months || 6);
  const monthKeys = [];

  for (let index = monthCount - 1; index >= 0; index -= 1) {
    const date = new Date();
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    date.setMonth(date.getMonth() - index);
    monthKeys.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`);
  }

  const revenueByMonth = Object.fromEntries(monthKeys.map((key) => [key, 0]));
  const expenseByMonth = Object.fromEntries(monthKeys.map((key) => [key, 0]));
  const tripsByMonth = Object.fromEntries(monthKeys.map((key) => [key, 0]));

  trips.forEach((trip) => {
    const key = getMonthKey(trip.date);
    if (!Object.hasOwn(revenueByMonth, key)) return;
    revenueByMonth[key] += Number(trip.collection || 0);
    expenseByMonth[key] += tripExpense(trip);
    tripsByMonth[key] += 1;
  });

  expenses.forEach((expense) => {
    const key = getMonthKey(expense.date);
    if (!Object.hasOwn(expenseByMonth, key)) return;
    expenseByMonth[key] += Number(expense.amount || 0);
  });

  return {
    labels: monthKeys.map(formatMonthLabel),
    revenue: monthKeys.map((key) => revenueByMonth[key]),
    expenses: monthKeys.map((key) => expenseByMonth[key]),
    trips: monthKeys.map((key) => tripsByMonth[key])
  };
}

function destroyCharts() {
  chartInstances.forEach((chart) => chart.destroy());
  chartInstances = [];
}

function chartColors() {
  return {
    green: "#0f7a54",
    greenSoft: "rgba(15, 122, 84, 0.14)",
    amber: "#b16b18",
    amberSoft: "rgba(177, 107, 24, 0.14)",
    blue: "#245f94",
    blueSoft: "rgba(36, 95, 148, 0.14)"
  };
}

function initDashboardCharts() {
  destroyCharts();
  if (state.activeView !== "dashboard" || typeof Chart === "undefined") return;

  const analytics = getMonthlyAnalyticsData(state.trips, state.expenses);
  const colors = chartColors();
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111917",
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64716d", font: { weight: "600" } }
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(220, 229, 225, 0.8)" },
        ticks: { color: "#64716d" }
      }
    }
  };

  const revenueCanvas = document.getElementById("revenueTrendChart");
  if (revenueCanvas) {
    chartInstances.push(
      new Chart(revenueCanvas, {
        type: "line",
        data: {
          labels: analytics.labels,
          datasets: [
            {
              label: "Revenue",
              data: analytics.revenue,
              borderColor: colors.green,
              backgroundColor: colors.greenSoft,
              fill: true,
              tension: 0.35,
              pointRadius: 4,
              pointHoverRadius: 6
            }
          ]
        },
        options: {
          ...baseOptions,
          plugins: {
            ...baseOptions.plugins,
            tooltip: {
              ...baseOptions.plugins.tooltip,
              callbacks: {
                label: (context) => `Revenue: ${money(context.parsed.y)}`
              }
            }
          },
          scales: {
            ...baseOptions.scales,
            y: {
              ...baseOptions.scales.y,
              ticks: {
                ...baseOptions.scales.y.ticks,
                callback: (value) => money(value)
              }
            }
          }
        }
      })
    );
  }

  const expenseCanvas = document.getElementById("expenseTrendChart");
  if (expenseCanvas) {
    chartInstances.push(
      new Chart(expenseCanvas, {
        type: "bar",
        data: {
          labels: analytics.labels,
          datasets: [
            {
              label: "Expenses",
              data: analytics.expenses,
              backgroundColor: colors.amber,
              borderRadius: 8,
              maxBarThickness: 42
            }
          ]
        },
        options: {
          ...baseOptions,
          plugins: {
            ...baseOptions.plugins,
            tooltip: {
              ...baseOptions.plugins.tooltip,
              callbacks: {
                label: (context) => `Expenses: ${money(context.parsed.y)}`
              }
            }
          },
          scales: {
            ...baseOptions.scales,
            y: {
              ...baseOptions.scales.y,
              ticks: {
                ...baseOptions.scales.y.ticks,
                callback: (value) => money(value)
              }
            }
          }
        }
      })
    );
  }

  const tripsCanvas = document.getElementById("tripsPerMonthChart");
  if (tripsCanvas) {
    chartInstances.push(
      new Chart(tripsCanvas, {
        type: "bar",
        data: {
          labels: analytics.labels,
          datasets: [
            {
              label: "Trips",
              data: analytics.trips,
              backgroundColor: colors.blue,
              borderRadius: 8,
              maxBarThickness: 42
            }
          ]
        },
        options: {
          ...baseOptions,
          plugins: {
            ...baseOptions.plugins,
            tooltip: {
              ...baseOptions.plugins.tooltip,
              callbacks: {
                label: (context) => `Trips: ${context.parsed.y}`
              }
            }
          },
          scales: {
            ...baseOptions.scales,
            y: {
              ...baseOptions.scales.y,
              ticks: {
                ...baseOptions.scales.y.ticks,
                stepSize: 1,
                precision: 0
              }
            }
          }
        }
      })
    );
  }
}

function currentAllowedViews() {
  return permissions[state.role] || permissions.owner;
}

function canView(view) {
  return currentAllowedViews().includes(view);
}

function ensureAllowedView() {
  if (!canView(state.activeView)) state.activeView = currentAllowedViews()[0];
}

function searchText(...parts) {
  return parts.filter(Boolean).join(" ").toLowerCase();
}

function matchesSearch(...parts) {
  const query = state.search.trim().toLowerCase();
  if (!query) return true;
  return searchText(...parts).includes(query);
}

function icon(name) {
  const icons = {
    dashboard: '<path d="M4 13h7V4H4v9Z"></path><path d="M13 20h7V4h-7v16Z"></path><path d="M4 20h7v-5H4v5Z"></path>',
    trip: '<path d="M4 17h16"></path><path d="M6 17V7h9l3 4v6"></path><circle cx="8" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle>',
    vehicle: '<path d="M5 11h14l-2-5H7l-2 5Z"></path><path d="M5 11v6"></path><path d="M19 11v6"></path><circle cx="8" cy="17" r="2"></circle><circle cx="16" cy="17" r="2"></circle>',
    staff: '<circle cx="9" cy="8" r="3"></circle><path d="M3 20c.8-4 3-6 6-6s5.2 2 6 6"></path><circle cx="17" cy="9" r="2"></circle><path d="M15 15c2.8.2 4.6 1.8 5 5"></path>',
    route: '<circle cx="6" cy="6" r="2"></circle><circle cx="18" cy="18" r="2"></circle><path d="M8 6h5a3 3 0 0 1 0 6h-2a3 3 0 0 0 0 6h5"></path>',
    account: '<path d="M4 7h16"></path><path d="M6 7V5h12v2"></path><path d="M6 10h12v9H6z"></path><path d="M9 14h6"></path>',
    bell: '<path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"></path><path d="M10 20a2 2 0 0 0 4 0"></path>',
    report: '<path d="M5 3h14v18H5z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h3"></path>',
    settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2 3.4-.1-.1a1.8 1.8 0 0 0-2.1-.2 7 7 0 0 1-1.2.5 1.8 1.8 0 0 0-1.3 1.7V22H9v-.2a1.8 1.8 0 0 0-1.3-1.7 7 7 0 0 1-1.2-.5 1.8 1.8 0 0 0-2.1.2l-.1.1-2-3.4.1-.1a1.8 1.8 0 0 0 .4-2 7 7 0 0 1 0-1.4 1.8 1.8 0 0 0-.4-2l-.1-.1 2-3.4.1.1a1.8 1.8 0 0 0 2.1.2c.4-.2.8-.4 1.2-.5A1.8 1.8 0 0 0 9 5.6V5h4v.6a1.8 1.8 0 0 0 1.3 1.7c.4.1.8.3 1.2.5a1.8 1.8 0 0 0 2.1-.2l.1-.1 2 3.4-.1.1a1.8 1.8 0 0 0-.4 2c.1.5.1 1 0 1.4Z"></path>'
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.dashboard}</svg>`;
}

function badge(text, type = "") {
  return `<span class="badge ${type}">${text}</span>`;
}

function statusBadge(value) {
  const normalized = String(value || "").toLowerCase();
  if (["active", "completed", "present", "paid"].includes(normalized)) return badge(value, "good");
  if (["running", "scheduled"].includes(normalized)) return badge(value, "info");
  if (["maintenance", "leave", "paused", "pending"].includes(normalized)) return badge(value, "warn");
  if (["cancelled", "expired"].includes(normalized)) return badge(value, "bad");
  return badge(value || "-");
}

function documentBadge(dateValue) {
  const left = daysLeft(dateValue);
  if (left < 0) return badge(`Expired ${Math.abs(left)}d`, "bad");
  if (left <= 15) return badge(`${left}d left`, "bad");
  if (left <= 45) return badge(`${left}d left`, "warn");
  return badge(`${left}d left`, "good");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function render() {
  ensureAllowedView();
  renderNav();
  renderQuickStats();
  renderViewFilters();
  document.getElementById("roleSelect").value = state.role;
  document.getElementById("globalSearch").value = state.search;
  const activeItem = navItems.find((item) => item.id === state.activeView);
  document.getElementById("pageTitle").textContent = activeItem?.label || "Dashboard";

  const view = document.getElementById("appView");
  if (!canView(state.activeView)) {
    destroyCharts();
    view.innerHTML = renderAccessDenied();
    return;
  }

  const renderers = {
    dashboard: renderDashboard,
    trips: renderTrips,
    vehicles: renderVehicles,
    staff: renderStaff,
    routes: renderRoutes,
    accounts: renderAccounts,
    reminders: renderReminders,
    reports: renderReports,
    settings: renderSettings
  };

  view.innerHTML = renderers[state.activeView]();
  initDashboardCharts();
}

function renderNav() {
  const nav = document.getElementById("navList");
  const counts = {
    dashboard: "",
    trips: state.trips.length,
    vehicles: state.vehicles.length,
    staff: state.staff.length,
    routes: state.routes.length,
    accounts: state.expenses.length,
    reminders: getReminders().length,
    reports: "",
    settings: ""
  };

  nav.innerHTML = navItems
    .filter((item) => canView(item.id))
    .map(
      (item) => `
        <button class="nav-button ${state.activeView === item.id ? "active" : ""}" data-view="${item.id}">
          <span class="nav-icon">${icon(item.icon)}</span>
          <span>${item.label}</span>
          ${counts[item.id] ? `<span class="nav-count">${counts[item.id]}</span>` : ""}
        </button>
      `
    )
    .join("");
}

function renderQuickStats() {
  const today = new Date().toISOString().slice(0, 10);
  const todayTrips = state.trips.filter((trip) => trip.date === today);
  const activeVehicles = state.vehicles.filter((vehicle) => vehicle.status === "Active").length;
  const reminders = getReminders().filter((item) => item.days <= 30).length;
  const filteredTrips = getFilteredTrips();

  document.getElementById("quickStats").innerHTML = `
    <span class="stat-pill">${todayTrips.length} trips today</span>
    <span class="stat-pill">${activeVehicles} active vehicles</span>
    <span class="stat-pill">${money(netProfit(filteredTrips, state.expenses))} net profit</span>
    <span class="stat-pill">${countActiveTrips(filteredTrips)} active trips</span>
    <span class="stat-pill">${reminders} urgent reminders</span>
  `;
}

function filterSelect(view, key, label, options, allLabel = "All") {
  const value = getFilterConfig(view)[key] || "";
  const normalized = options.map((option) => (Array.isArray(option) ? option : [option, option]));

  return `
    <label class="field compact filter-field">
      <span>${label}</span>
      <select data-filter-view="${view}" data-filter-key="${key}">
        <option value="" ${value === "" ? "selected" : ""}>${allLabel}</option>
        ${normalized.map(([optionValue, optionLabel]) => `<option value="${optionValue}" ${String(optionValue) === String(value) ? "selected" : ""}>${optionLabel}</option>`).join("")}
      </select>
    </label>
  `;
}

function filterSort(view, sortOptions) {
  const filters = getFilterConfig(view);
  const options = sortOptions.map((option) => (Array.isArray(option) ? option : [option, option]));

  return `
    <label class="field compact filter-field">
      <span>Sort By</span>
      <select data-filter-view="${view}" data-filter-key="sortBy">
        ${options.map(([optionValue, optionLabel]) => `<option value="${optionValue}" ${filters.sortBy === optionValue ? "selected" : ""}>${optionLabel}</option>`).join("")}
      </select>
    </label>
    <label class="field compact filter-field">
      <span>Order</span>
      <select data-filter-view="${view}" data-filter-key="sortDir">
        <option value="asc" ${filters.sortDir === "asc" ? "selected" : ""}>Ascending</option>
        <option value="desc" ${filters.sortDir === "desc" ? "selected" : ""}>Descending</option>
      </select>
    </label>
  `;
}

function renderViewFilters() {
  const container = document.getElementById("viewFilters");
  const view = state.activeView;
  const filterViews = ["dashboard", "trips", "vehicles", "staff", "routes", "accounts"];

  if (!filterViews.includes(view)) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }

  container.hidden = false;

  if (view === "dashboard") {
    const months = getFilterConfig("dashboard").months || "6";
    container.innerHTML = `
      <div class="filter-bar-inner">
        <span class="filter-bar-label">Analytics Range</span>
        ${filterSelect("dashboard", "months", "Months", [["3", "Last 3 months"], ["6", "Last 6 months"], ["12", "Last 12 months"]], "Last 6 months")}
        <button class="ghost-button" type="button" data-action="clear-filters" data-filter-view="dashboard">Reset</button>
      </div>
    `;
    return;
  }

  if (view === "trips") {
    container.innerHTML = `
      <div class="filter-bar-inner">
        <span class="filter-bar-label">Trip Filters</span>
        ${filterSelect("trips", "status", "Status", ["Scheduled", "Running", "Completed", "Cancelled", "Pending", "In Transit"])}
        ${filterSelect("trips", "vehicleId", "Vehicle", state.vehicles.map((vehicle) => [vehicle.id, vehicle.plate]))}
        ${filterSort("trips", [["date", "Date"], ["collection", "Collection"], ["profit", "Profit"], ["status", "Status"]])}
        <button class="ghost-button" type="button" data-action="clear-filters" data-filter-view="trips">Clear Filters</button>
      </div>
    `;
    return;
  }

  if (view === "vehicles") {
    container.innerHTML = `
      <div class="filter-bar-inner">
        <span class="filter-bar-label">Vehicle Filters</span>
        ${filterSelect("vehicles", "status", "Status", ["Active", "Maintenance", "Paused"])}
        ${filterSelect("vehicles", "type", "Type", ["Bus", "Mini Bus", "Traveller", "Truck", "Tempo", "Car"])}
        ${filterSort("vehicles", [["plate", "Plate"], ["type", "Type"], ["status", "Status"]])}
        <button class="ghost-button" type="button" data-action="clear-filters" data-filter-view="vehicles">Clear Filters</button>
      </div>
    `;
    return;
  }

  if (view === "staff") {
    container.innerHTML = `
      <div class="filter-bar-inner">
        <span class="filter-bar-label">Staff Filters</span>
        ${filterSelect("staff", "role", "Role", ["Driver", "Conductor", "Accountant", "Dispatcher", "Mechanic"])}
        ${filterSelect("staff", "status", "Attendance", ["Present", "Leave", "Absent"])}
        ${filterSort("staff", [["name", "Name"], ["role", "Role"], ["salary", "Salary"], ["status", "Attendance"]])}
        <button class="ghost-button" type="button" data-action="clear-filters" data-filter-view="staff">Clear Filters</button>
      </div>
    `;
    return;
  }

  if (view === "routes") {
    container.innerHTML = `
      <div class="filter-bar-inner">
        <span class="filter-bar-label">Route Filters</span>
        ${filterSelect("routes", "status", "Status", ["Active", "Paused"])}
        ${filterSelect("routes", "shift", "Shift", ["Morning", "Afternoon", "Evening", "Night", "School", "Goods"])}
        ${filterSort("routes", [["name", "Route"], ["distance", "Distance"], ["fare", "Fare"], ["status", "Status"]])}
        <button class="ghost-button" type="button" data-action="clear-filters" data-filter-view="routes">Clear Filters</button>
      </div>
    `;
    return;
  }

  if (view === "accounts") {
    container.innerHTML = `
      <div class="filter-bar-inner">
        <span class="filter-bar-label">Expense Filters</span>
        ${filterSelect("expenses", "category", "Category", expenseCategories)}
        ${filterSelect("expenses", "vehicleId", "Vehicle", state.vehicles.map((vehicle) => [vehicle.id, vehicle.plate]))}
        ${filterSort("expenses", [["date", "Date"], ["amount", "Amount"], ["category", "Category"]])}
        <button class="ghost-button" type="button" data-action="clear-filters" data-filter-view="expenses">Clear Filters</button>
      </div>
    `;
  }
}

function renderAccessDenied() {
  return `
    <div class="access-note">
      This role does not have permission for this section. Switch role from the top bar to view it.
    </div>
  `;
}

function renderDashboard() {
  const filteredTrips = getFilteredTrips();
  const urgentReminders = getReminders().slice(0, 5);
  const today = new Date().toISOString().slice(0, 10);
  const todayTrips = state.trips.filter((trip) => trip.date === today).length;
  const activeVehicles = state.vehicles.filter((vehicle) => vehicle.status === "Active").length;
  const revenue = totalRevenue(filteredTrips);
  const expenses = totalExpensesAll(filteredTrips, state.expenses);
  const profit = netProfit(filteredTrips, state.expenses);

  return `
    <section class="premium-hero">
      <div class="hero-copy">
        <span class="hero-kicker">Premium fleet command center</span>
        <h2 class="hero-title">${state.business.name}</h2>
        <p>
          Vehicles, drivers, conductors, routes, daily trips, expenses, reminders, and profit reports in one
          owner-ready dashboard. Made by Aryan Singh Sikarwar.
        </p>
      </div>
      <div class="hero-board" aria-label="Business summary">
        <div class="hero-board-row"><span>Active Vehicles</span><strong>${activeVehicles}</strong></div>
        <div class="hero-board-row"><span>Trips Today</span><strong>${todayTrips}</strong></div>
        <div class="hero-board-row"><span>Total Routes</span><strong>${state.routes.length}</strong></div>
        <div class="hero-board-row"><span>Current Profit</span><strong>${money(profit)}</strong></div>
      </div>
    </section>

    <section class="kpi-section" aria-label="Key performance indicators">
      <div class="panel-header">
        <div>
          <h2>Business KPIs</h2>
          <p>Revenue, expenses, profit, and trip activity at a glance.</p>
        </div>
      </div>
      <div class="grid kpi-grid">
        ${metricCard("Total Revenue", money(revenue), `${filteredTrips.length} trips in scope`, "green")}
        ${metricCard("Total Expenses", money(expenses), "Trip costs plus ledger entries", "amber")}
        ${metricCard("Net Profit", money(profit), profit >= 0 ? "Healthy margin" : "Review costs", profit >= 0 ? "blue" : "red")}
        ${metricCard("Active Trips", countActiveTrips(filteredTrips), "Running or scheduled", "blue")}
        ${metricCard("Completed Trips", countCompletedTrips(filteredTrips), "Successfully closed", "green")}
      </div>
    </section>

    <section class="panel analytics-panel">
      <div class="panel-header">
        <div>
          <h2>Analytics Overview</h2>
          <p>Monthly revenue, expense, and trip trends powered by Chart.js.</p>
        </div>
      </div>
      <div class="chart-grid">
        <article class="chart-card">
          <div class="chart-card-header">
            <h3>Revenue Trend</h3>
            <p>Monthly passenger and freight collection</p>
          </div>
          <div class="chart-wrap">
            <canvas id="revenueTrendChart" aria-label="Revenue trend chart"></canvas>
          </div>
        </article>
        <article class="chart-card">
          <div class="chart-card-header">
            <h3>Expense Trend</h3>
            <p>Trip costs and ledger expenses combined</p>
          </div>
          <div class="chart-wrap">
            <canvas id="expenseTrendChart" aria-label="Expense trend chart"></canvas>
          </div>
        </article>
        <article class="chart-card">
          <div class="chart-card-header">
            <h3>Trips Per Month</h3>
            <p>Operational volume across the selected range</p>
          </div>
          <div class="chart-wrap">
            <canvas id="tripsPerMonthChart" aria-label="Trips per month chart"></canvas>
          </div>
        </article>
      </div>
    </section>

    <div class="grid two">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Operations Snapshot</h2>
            <p>Route movement, vehicle status, and latest daily entries.</p>
          </div>
          <button class="secondary-button" data-view="trips">Open Trips</button>
        </div>
        ${renderMiniChart()}
      </section>

      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Urgent Reminders</h2>
            <p>Documents and licenses needing attention.</p>
          </div>
          <button class="secondary-button" data-view="reminders">View All</button>
        </div>
        ${renderReminderTimeline(urgentReminders)}
      </section>
    </div>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Recent Trips</h2>
          <p>Collection, expenses, and trip profit are calculated automatically.</p>
        </div>
      </div>
      ${renderTripsTable(filteredTrips.slice(0, 6))}
    </section>
  `;
}

function metricCard(label, value, note, color) {
  return `
    <article class="metric-card ${color || ""}">
      <div class="metric-label">${label}</div>
      <div class="metric-value">${value}</div>
      <div class="metric-note">${note}</div>
    </article>
  `;
}

function renderMiniChart() {
  const grouped = state.trips.reduce((acc, trip) => {
    acc[trip.date] = (acc[trip.date] || 0) + tripProfit(trip);
    return acc;
  }, {});
  const dates = Object.keys(grouped).sort().slice(-7);
  const values = dates.map((date) => Math.max(grouped[date], 0));
  const max = Math.max(...values, 1);

  return `
    <div class="mini-chart" aria-label="Profit by day chart">
      ${dates
        .map((date) => {
          const height = Math.max(12, Math.round((Math.max(grouped[date], 0) / max) * 100));
          return `<div class="bar" style="height:${height}%"><span>${shortDate(date).slice(0, 6)}</span></div>`;
        })
        .join("")}
    </div>
  `;
}

function renderTrips() {
  const trips = getFilteredTrips();

  return `
    <div class="grid two">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Trip Register</h2>
            <p>Daily collection and running cost entry. Showing ${trips.length} of ${state.trips.length} trips.</p>
          </div>
          <div class="toolbar">
            <button class="secondary-button" data-action="export-csv" data-type="trips">Export CSV</button>
          </div>
        </div>
        ${renderTripsTable(trips)}
      </section>

      <section class="panel" id="tripForm">
        <h2>Add Daily Trip</h2>
        <form data-form="trip">
          <div class="form-grid">
            ${field("Date", "date", "date", new Date().toISOString().slice(0, 10), true)}
            ${selectField("Vehicle", "vehicleId", state.vehicles.map((vehicle) => [vehicle.id, `${vehicle.plate} - ${vehicle.type}`]), "", true)}
            ${selectField("Route", "routeId", state.routes.map((route) => [route.id, route.name]), "", true)}
            ${selectField("Status", "status", ["Scheduled", "Running", "Completed", "Cancelled"], "Completed", true)}
            ${selectField("Driver", "driverId", state.staff.filter((person) => person.role === "Driver").map((person) => [person.id, person.name]), "", true)}
            ${selectField("Conductor", "conductorId", [["", "No conductor"], ...state.staff.filter((person) => person.role === "Conductor").map((person) => [person.id, person.name])], "")}
            ${field("Passengers", "passengers", "number", "0")}
            ${field("Collection", "collection", "number", "0")}
            ${field("Fuel", "fuel", "number", "0")}
            ${field("Toll", "toll", "number", "0")}
            ${field("Repair", "repair", "number", "0")}
            ${field("Challan", "challan", "number", "0")}
            ${field("Salary Advance", "salaryAdvance", "number", "0")}
          </div>
          <label class="field">
            <span>Notes</span>
            <textarea name="notes" placeholder="Example: tyre puncture, extra helper, route delay"></textarea>
          </label>
          <div class="form-actions">
            <button class="primary-button" type="submit">Save Trip</button>
            <button class="secondary-button" type="reset">Clear</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderTripsTable(trips) {
  if (!trips.length) return emptyState("No trips match your search or filters.");

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Vehicle</th>
            <th>Route</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Collection</th>
            <th>Expense</th>
            <th>Profit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${trips
            .map(
              (trip) => `
                <tr>
                  <td>${shortDate(trip.date)}</td>
                  <td>${vehicleName(trip.vehicleId)}</td>
                  <td>${routeName(trip.routeId)}</td>
                  <td>${staffName(trip.driverId)}</td>
                  <td>${statusBadge(trip.status)}</td>
                  <td>${money(trip.collection)}</td>
                  <td>${money(tripExpense(trip))}</td>
                  <td>${money(tripProfit(trip))}</td>
                  <td>
                    <div class="row-actions">
                      <button class="ghost-button" data-action="duplicate-trip" data-id="${trip.id}">Copy</button>
                      <button class="danger-button" data-action="delete-trip" data-id="${trip.id}">Delete</button>
                    </div>
                  </td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderVehicles() {
  const vehicles = getFilteredVehicles();

  return `
    <div class="grid two">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Vehicle Register</h2>
            <p>Vehicle, document, route, driver, and conductor details. Showing ${vehicles.length} of ${state.vehicles.length} vehicles.</p>
          </div>
        </div>
        ${renderVehiclesTable(vehicles)}
      </section>

      <section class="panel">
        <h2>Add Vehicle</h2>
        <form data-form="vehicle">
          <div class="form-grid">
            ${field("Vehicle Number", "plate", "text", "", true, "RJ14 PB 4821")}
            ${selectField("Type", "type", ["Bus", "Mini Bus", "Traveller", "Truck", "Tempo", "Car"], "Bus", true)}
            ${field("Seats/Capacity", "seats", "number", "0")}
            ${selectField("Status", "status", ["Active", "Maintenance", "Paused"], "Active", true)}
            ${selectField("Route", "routeId", [["", "No route"], ...state.routes.map((route) => [route.id, route.name])], "")}
            ${selectField("Driver", "driverId", [["", "No driver"], ...state.staff.filter((person) => person.role === "Driver").map((person) => [person.id, person.name])], "")}
            ${selectField("Conductor", "conductorId", [["", "No conductor"], ...state.staff.filter((person) => person.role === "Conductor").map((person) => [person.id, person.name])], "")}
            ${field("Odometer KM", "odometer", "number", "0")}
            ${field("Mileage KM/L", "mileage", "number", "0", false, "", "0.1")}
            ${field("Insurance Expiry", "insuranceExpiry", "date")}
            ${field("Permit Expiry", "permitExpiry", "date")}
            ${field("Fitness Expiry", "fitnessExpiry", "date")}
            ${field("Pollution Expiry", "pollutionExpiry", "date")}
          </div>
          <div class="form-actions">
            <button class="primary-button" type="submit">Save Vehicle</button>
            <button class="secondary-button" type="reset">Clear</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderVehiclesTable(vehicles) {
  if (!vehicles.length) return emptyState("No vehicles match your search or filters.");

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Route</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Insurance</th>
            <th>Permit</th>
            <th>Fitness</th>
            <th>Pollution</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${vehicles
            .map(
              (vehicle) => `
                <tr>
                  <td><strong>${vehicle.plate}</strong><br><span class="metric-note">${vehicle.type}, ${vehicle.seats || 0} seats</span></td>
                  <td>${routeName(vehicle.routeId)}</td>
                  <td>${staffName(vehicle.driverId)}</td>
                  <td>${statusBadge(vehicle.status)}</td>
                  <td>${documentBadge(vehicle.insuranceExpiry)}<br><span class="metric-note">${shortDate(vehicle.insuranceExpiry)}</span></td>
                  <td>${documentBadge(vehicle.permitExpiry)}<br><span class="metric-note">${shortDate(vehicle.permitExpiry)}</span></td>
                  <td>${documentBadge(vehicle.fitnessExpiry)}<br><span class="metric-note">${shortDate(vehicle.fitnessExpiry)}</span></td>
                  <td>${documentBadge(vehicle.pollutionExpiry)}<br><span class="metric-note">${shortDate(vehicle.pollutionExpiry)}</span></td>
                  <td><button class="danger-button" data-action="delete-vehicle" data-id="${vehicle.id}">Delete</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderStaff() {
  const people = getFilteredStaff();

  return `
    <div class="grid two">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Driver & Conductor Register</h2>
            <p>Staff salary, attendance, license, and assigned vehicle. Showing ${people.length} of ${state.staff.length} staff.</p>
          </div>
        </div>
        ${renderStaffTable(people)}
      </section>

      <section class="panel">
        <h2>Add Staff</h2>
        <form data-form="staff">
          <div class="form-grid">
            ${field("Full Name", "name", "text", "", true)}
            ${selectField("Role", "role", ["Driver", "Conductor", "Accountant", "Dispatcher", "Mechanic"], "Driver", true)}
            ${field("Phone", "phone", "tel", "", true)}
            ${field("Monthly Salary", "salary", "number", "0")}
            ${selectField("Attendance", "status", ["Present", "Leave", "Absent"], "Present", true)}
            ${field("License No.", "licenseNo", "text")}
            ${field("License Expiry", "licenseExpiry", "date")}
            ${selectField("Assigned Vehicle", "assignedVehicleId", [["", "No vehicle"], ...state.vehicles.map((vehicle) => [vehicle.id, vehicle.plate])], "")}
          </div>
          <label class="field">
            <span>Address</span>
            <textarea name="address"></textarea>
          </label>
          <div class="form-actions">
            <button class="primary-button" type="submit">Save Staff</button>
            <button class="secondary-button" type="reset">Clear</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderStaffTable(people) {
  if (!people.length) return emptyState("No staff match your search or filters.");

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Vehicle</th>
            <th>Salary</th>
            <th>Attendance</th>
            <th>License</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${people
            .map(
              (person) => `
                <tr>
                  <td><strong>${person.name}</strong><br><span class="metric-note">${person.address || "-"}</span></td>
                  <td>${badge(person.role, person.role === "Driver" ? "info" : "good")}</td>
                  <td>${person.phone}</td>
                  <td>${vehicleName(person.assignedVehicleId)}</td>
                  <td>${money(person.salary)}</td>
                  <td>${statusBadge(person.status)}</td>
                  <td>${person.licenseNo || "-"}<br>${person.licenseExpiry ? documentBadge(person.licenseExpiry) : ""}</td>
                  <td><button class="danger-button" data-action="delete-staff" data-id="${person.id}">Delete</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderRoutes() {
  const routes = getFilteredRoutes();

  return `
    <div class="grid two">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Route Planning</h2>
            <p>Route distance, stops, fare, and assigned shift. Showing ${routes.length} of ${state.routes.length} routes.</p>
          </div>
        </div>
        ${renderRouteMap(routes)}
        ${renderRoutesTable(routes)}
      </section>

      <section class="panel">
        <h2>Add Route</h2>
        <form data-form="route">
          <div class="form-grid">
            ${field("Route Name", "name", "text", "", true, "Jaipur - Delhi")}
            ${field("Start", "start", "text", "", true)}
            ${field("End", "end", "text", "", true)}
            ${field("Distance KM", "distance", "number", "0")}
            ${field("Fare", "fare", "number", "0")}
            ${selectField("Shift", "shift", ["Morning", "Afternoon", "Evening", "Night", "School", "Goods"], "Morning", true)}
            ${selectField("Status", "status", ["Active", "Paused"], "Active", true)}
          </div>
          <label class="field">
            <span>Stops</span>
            <textarea name="stops" placeholder="Stop names separated by comma"></textarea>
          </label>
          <div class="form-actions">
            <button class="primary-button" type="submit">Save Route</button>
            <button class="secondary-button" type="reset">Clear</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderRouteMap(routes) {
  const visible = routes.slice(0, 4);
  if (!visible.length) return "";

  return `
    <div class="route-map" aria-label="Route visual map">
      ${visible
        .map((route, index) => {
          const top = 46 + index * 52;
          return `
            <div class="route-line" style="top:${top + 17}px"></div>
            <div class="route-point" style="left:26px;top:${top}px">${index + 1}</div>
            <div class="route-point" style="right:26px;top:${top}px">E</div>
            <div class="route-label" style="left:76px;top:${top - 6}px">
              <strong>${route.name}</strong><br>
              <span class="metric-note">${route.distance || 0} km, ${money(route.fare)}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRoutesTable(routes) {
  if (!routes.length) return emptyState("No routes match your search or filters.");

  return `
    <div class="table-wrap" style="margin-top:14px">
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Stops</th>
            <th>Distance</th>
            <th>Fare</th>
            <th>Shift</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${routes
            .map(
              (route) => `
                <tr>
                  <td><strong>${route.name}</strong><br><span class="metric-note">${route.start} to ${route.end}</span></td>
                  <td>${route.stops || "-"}</td>
                  <td>${route.distance || 0} km</td>
                  <td>${money(route.fare)}</td>
                  <td>${badge(route.shift, "info")}</td>
                  <td>${statusBadge(route.status)}</td>
                  <td><button class="danger-button" data-action="delete-route" data-id="${route.id}">Delete</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderAccounts() {
  const expenses = getFilteredExpenses();
  const filteredTrips = getFilteredTrips();

  return `
    <div class="grid four">
      ${metricCard("Collection", money(totalTripCollection(filteredTrips)), "Filtered trip entries", "green")}
      ${metricCard("Trip Cost", money(totalTripExpenses(filteredTrips)), "Fuel, toll, repair, challan", "amber")}
      ${metricCard("Other Expense", money(totalExtraExpenses(expenses)), "Office, tax, EMI, workshop", "red")}
      ${metricCard("Net Profit", money(netProfit(filteredTrips, expenses)), "Final business result", netProfit(filteredTrips, expenses) >= 0 ? "blue" : "red")}
    </div>

    <div class="grid two">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Expense Ledger</h2>
            <p>Entries outside trip cost, such as tax, EMI, salary, and workshop bills. Showing ${expenses.length} of ${state.expenses.length} expenses.</p>
          </div>
          <button class="secondary-button" data-action="export-csv" data-type="expenses">Export CSV</button>
        </div>
        ${renderExpensesTable(expenses)}
      </section>

      <section class="panel">
        <h2>Add Expense</h2>
        <form data-form="expense">
          <div class="form-grid">
            ${field("Date", "date", "date", new Date().toISOString().slice(0, 10), true)}
            ${selectField("Category", "category", expenseCategories, "Fuel", true)}
            ${field("Amount", "amount", "number", "0", true)}
            ${field("Paid To", "paidTo", "text", "", true)}
            ${selectField("Vehicle", "vehicleId", [["", "General expense"], ...state.vehicles.map((vehicle) => [vehicle.id, vehicle.plate])], "")}
          </div>
          <label class="field">
            <span>Note</span>
            <textarea name="note"></textarea>
          </label>
          <div class="form-actions">
            <button class="primary-button" type="submit">Save Expense</button>
            <button class="secondary-button" type="reset">Clear</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderExpensesTable(expenses) {
  if (!expenses.length) return emptyState("No expenses match your search or filters.");

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Vehicle</th>
            <th>Paid To</th>
            <th>Amount</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${expenses
            .map(
              (expense) => `
                <tr>
                  <td>${shortDate(expense.date)}</td>
                  <td>${badge(expense.category, "warn")}</td>
                  <td>${vehicleName(expense.vehicleId)}</td>
                  <td>${expense.paidTo}</td>
                  <td>${money(expense.amount)}</td>
                  <td>${expense.note || "-"}</td>
                  <td><button class="danger-button" data-action="delete-expense" data-id="${expense.id}">Delete</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderReminders() {
  const reminders = getReminders().filter((item) =>
    matchesSearch(item.title, item.type, item.owner, item.date, item.message)
  );

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Document & License Reminders</h2>
          <p>Insurance, permit, fitness, pollution, and license alerts are generated automatically.</p>
        </div>
      </div>
      ${renderReminderTimeline(reminders)}
    </section>
  `;
}

function getReminders() {
  const vehicleReminders = state.vehicles.flatMap((vehicle) => [
    reminder("Insurance", vehicle.plate, vehicle.insuranceExpiry, `${vehicle.plate} insurance renewal`),
    reminder("Permit", vehicle.plate, vehicle.permitExpiry, `${vehicle.plate} permit renewal`),
    reminder("Fitness", vehicle.plate, vehicle.fitnessExpiry, `${vehicle.plate} fitness certificate`),
    reminder("Pollution", vehicle.plate, vehicle.pollutionExpiry, `${vehicle.plate} pollution certificate`)
  ]);

  const staffReminders = state.staff
    .filter((person) => person.licenseExpiry)
    .map((person) => reminder("License", person.name, person.licenseExpiry, `${person.name} driving license`));

  return [...vehicleReminders, ...staffReminders]
    .filter((item) => item.days <= 60)
    .sort((a, b) => a.days - b.days);
}

function reminder(type, owner, date, title) {
  const days = daysLeft(date);
  return {
    type,
    owner,
    date,
    days,
    title,
    message: days < 0 ? `Expired ${Math.abs(days)} days ago` : `${days} days left`
  };
}

function renderReminderTimeline(reminders) {
  if (!reminders.length) return emptyState("No urgent reminders in the next 60 days.");

  return `
    <div class="timeline">
      ${reminders
        .map((item) => {
          const tone = item.days < 0 || item.days <= 15 ? "bad" : item.days <= 45 ? "warn" : "";
          return `
            <div class="timeline-item ${tone}">
              <div>
                <strong>${item.title}</strong>
                <p>${item.type} for ${item.owner} - ${shortDate(item.date)}</p>
                ${documentBadge(item.date)}
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderReports() {
  const trips = getFilteredTrips();
  const vehicleRanking = getVehicleProfitRanking();
  const routeRanking = getRouteProfitRanking();

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Business Report</h2>
          <p>Use this view for owner review, monthly hisaab, and placement demo.</p>
        </div>
        <div class="toolbar">
          <button class="secondary-button" data-action="export-csv" data-type="summary">Export CSV</button>
          <button class="primary-button" data-action="print-report">Print Report</button>
        </div>
      </div>

      <div class="report-summary">
        ${metricCard("Trips", trips.length, "Filtered entries", "blue")}
        ${metricCard("Collection", money(totalTripCollection(trips)), "Passenger/freight income", "green")}
        ${metricCard("Expenses", money(totalTripExpenses(trips) + totalExtraExpenses()), "Trip plus ledger cost", "amber")}
        ${metricCard("Profit", money(netProfit(trips, state.expenses)), "Final business result", netProfit(trips, state.expenses) >= 0 ? "green" : "red")}
      </div>
    </section>

    <div class="grid two">
      <section class="panel">
        <h2>Vehicle Profit Ranking</h2>
        ${renderRankingTable(vehicleRanking, "vehicle")}
      </section>
      <section class="panel">
        <h2>Route Profit Ranking</h2>
        ${renderRankingTable(routeRanking, "route")}
      </section>
    </div>
  `;
}

function getVehicleProfitRanking() {
  return state.vehicles
    .map((vehicle) => {
      const trips = state.trips.filter((trip) => trip.vehicleId === vehicle.id);
      const expenses = state.expenses.filter((expense) => expense.vehicleId === vehicle.id);
      return {
        vehicleId: vehicle.id,
        label: vehicle.plate,
        trips: trips.length,
        collection: totalTripCollection(trips),
        expense: totalTripExpenses(trips) + totalExtraExpenses(expenses),
        profit: netProfit(trips, expenses)
      };
    })
    .sort((a, b) => b.profit - a.profit);
}

function getRouteProfitRanking() {
  return state.routes
    .map((route) => {
      const trips = state.trips.filter((trip) => trip.routeId === route.id);
      return {
        routeId: route.id,
        label: route.name,
        trips: trips.length,
        collection: totalTripCollection(trips),
        expense: totalTripExpenses(trips),
        profit: totalTripCollection(trips) - totalTripExpenses(trips)
      };
    })
    .sort((a, b) => b.profit - a.profit);
}

function renderRankingTable(items, type) {
  if (!items.length) return emptyState("No report data available.");

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${type === "vehicle" ? "Vehicle" : "Route"}</th>
            <th>Trips</th>
            <th>Collection</th>
            <th>Expense</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item) => `
                <tr>
                  <td><strong>${item.label}</strong></td>
                  <td>${item.trips}</td>
                  <td>${money(item.collection)}</td>
                  <td>${money(item.expense)}</td>
                  <td>${money(item.profit)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderSettings() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Business Settings</h2>
          <p>Change transport company name and manage local backup data.</p>
        </div>
      </div>

      <form data-form="business">
        <div class="form-grid">
          ${field("Business Name", "name", "text", state.business.name, true)}
          ${field("City", "city", "text", state.business.city, true)}
          ${field("Owner Name", "owner", "text", state.business.owner, true)}
        </div>
        <div class="form-actions">
          <button class="primary-button" type="submit">Save Business</button>
          <button class="secondary-button" type="button" data-action="export-json">Export Backup</button>
          <label class="secondary-button">
            Import Backup
            <input type="file" accept="application/json" data-action="import-json" hidden />
          </label>
          <button class="danger-button" type="button" data-action="reset-demo">Reset Demo Data</button>
        </div>
      </form>
    </section>

    <section class="panel">
      <h2>Role Permissions</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Allowed Sections</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Owner</strong></td>
              <td>All modules</td>
              <td>Business monitoring and final hisaab</td>
            </tr>
            <tr>
              <td><strong>Accountant</strong></td>
              <td>Trips, accounts, reports, reminders</td>
              <td>Daily entries, expenses, profit/loss</td>
            </tr>
            <tr>
              <td><strong>Dispatcher</strong></td>
              <td>Trips, vehicles, staff, routes, reminders</td>
              <td>Vehicle assignment and route planning</td>
            </tr>
            <tr>
              <td><strong>Driver</strong></td>
              <td>Dashboard, trips, reminders</td>
              <td>Own trip and document visibility</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function field(label, name, type = "text", value = "", required = false, placeholder = "", step = "1") {
  return `
    <label class="field">
      <span>${label}</span>
      <input name="${name}" type="${type}" value="${value || ""}" ${type === "number" ? `step="${step}" min="0"` : ""} ${required ? "required" : ""} placeholder="${placeholder}" />
    </label>
  `;
}

function selectField(label, name, options, value = "", required = false) {
  const normalized = options.map((option) => (Array.isArray(option) ? option : [option, option]));
  return `
    <label class="field">
      <span>${label}</span>
      <select name="${name}" ${required ? "required" : ""}>
        ${normalized.map(([optionValue, optionLabel]) => `<option value="${optionValue}" ${String(optionValue) === String(value) ? "selected" : ""}>${optionLabel}</option>`).join("")}
      </select>
    </label>
  `;
}

function emptyState(message) {
  return `<div class="empty-state"><p>${message}</p></div>`;
}

function formObject(form) {
  return Object.fromEntries([...new FormData(form).entries()].map(([key, value]) => [key, cleanText(value)]));
}

function toNumberFields(item, fields) {
  fields.forEach((fieldName) => {
    item[fieldName] = Number(item[fieldName] || 0);
  });
  return item;
}

function handleSubmit(event) {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();

  const type = form.dataset.form;
  const data = formObject(form);

  if (type === "trip") {
    state.trips.unshift(toNumberFields({ id: uid("trip"), ...data }, ["passengers", "collection", "fuel", "toll", "repair", "challan", "salaryAdvance"]));
    showToast("Trip saved and profit updated.");
  }

  if (type === "vehicle") {
    state.vehicles.unshift(toNumberFields({ id: uid("veh"), ...data }, ["seats", "odometer", "mileage"]));
    showToast("Vehicle added.");
  }

  if (type === "staff") {
    state.staff.unshift(toNumberFields({ id: uid("staff"), ...data }, ["salary"]));
    showToast("Staff member added.");
  }

  if (type === "route") {
    state.routes.unshift(toNumberFields({ id: uid("route"), ...data }, ["distance", "fare"]));
    showToast("Route added.");
  }

  if (type === "expense") {
    state.expenses.unshift(toNumberFields({ id: uid("exp"), ...data }, ["amount"]));
    showToast("Expense saved.");
  }

  if (type === "business") {
    state.business = { ...state.business, ...data };
    showToast("Business settings saved.");
  }

  form.reset();
  saveState();
  render();
}

function handleClick(event) {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    state.activeView = viewButton.dataset.view;
    saveState();
    render();
    const focusTarget = viewButton.dataset.focusForm;
    if (focusTarget) {
      requestAnimationFrame(() => document.getElementById(focusTarget)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const { action, id, type } = actionTarget.dataset;

  if (action === "delete-trip") deleteItem("trips", id, "Trip deleted.");
  if (action === "delete-vehicle") deleteItem("vehicles", id, "Vehicle deleted.");
  if (action === "delete-staff") deleteItem("staff", id, "Staff member deleted.");
  if (action === "delete-route") deleteItem("routes", id, "Route deleted.");
  if (action === "delete-expense") deleteItem("expenses", id, "Expense deleted.");
  if (action === "duplicate-trip") duplicateTrip(id);
  if (action === "export-csv") exportCsv(type);
  if (action === "export-json") exportJson();
  if (action === "print-report") window.print();
  if (action === "reset-demo") resetDemo();
  if (action === "clear-filters") clearFilters(actionTarget.dataset.filterView);
}

function clearFilters(view) {
  if (!view || !defaultFilters[view]) return;
  state.filters[view] = structuredClone(defaultFilters[view]);
  saveState();
  render();
  showToast("Filters reset.");
}

function handleFilterChange(event) {
  const select = event.target.closest("[data-filter-view][data-filter-key]");
  if (!select) return;

  const { filterView, filterKey } = select.dataset;
  setFilterValue(filterView, filterKey, select.value);
  saveState();
  render();
}

function deleteItem(collection, id, message) {
  const confirmed = window.confirm("Delete this entry?");
  if (!confirmed) return;
  state[collection] = state[collection].filter((item) => item.id !== id);
  saveState();
  render();
  showToast(message);
}

function duplicateTrip(id) {
  const trip = state.trips.find((item) => item.id === id);
  if (!trip) return;
  state.trips.unshift({
    ...trip,
    id: uid("trip"),
    date: new Date().toISOString().slice(0, 10),
    status: "Scheduled",
    notes: `Copied from ${shortDate(trip.date)}`
  });
  saveState();
  render();
  showToast("Trip copied for today.");
}

function resetDemo() {
  const confirmed = window.confirm("Reset all data to demo records?");
  if (!confirmed) return;
  state = structuredClone(seedData);
  saveState();
  render();
  showToast("Demo data restored.");
}

function exportJson() {
  downloadFile(
    `fleetflow-backup-${new Date().toISOString().slice(0, 10)}.json`,
    JSON.stringify(state, null, 2),
    "application/json"
  );
  showToast("Backup exported.");
}

function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state = normalizeState(parsed);
      saveState();
      render();
      showToast("Backup imported.");
    } catch {
      showToast("Invalid backup file.");
    }
  };
  reader.readAsText(file);
}

function exportCsv(type) {
  const rows = getCsvRows(type);
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  downloadFile(`fleetflow-${type}-${new Date().toISOString().slice(0, 10)}.csv`, csv, "text/csv");
  showToast("CSV exported.");
}

function getCsvRows(type) {
  if (type === "trips") {
    return [
      ["Date", "Vehicle", "Route", "Driver", "Conductor", "Status", "Passengers", "Collection", "Expense", "Profit", "Notes"],
      ...state.trips.map((trip) => [
        trip.date,
        vehicleName(trip.vehicleId),
        routeName(trip.routeId),
        staffName(trip.driverId),
        staffName(trip.conductorId),
        trip.status,
        trip.passengers,
        trip.collection,
        tripExpense(trip),
        tripProfit(trip),
        trip.notes
      ])
    ];
  }

  if (type === "expenses") {
    return [
      ["Date", "Category", "Vehicle", "Paid To", "Amount", "Note"],
      ...state.expenses.map((expense) => [expense.date, expense.category, vehicleName(expense.vehicleId), expense.paidTo, expense.amount, expense.note])
    ];
  }

  return [
    ["Metric", "Value"],
    ["Vehicles", state.vehicles.length],
    ["Staff", state.staff.length],
    ["Routes", state.routes.length],
    ["Trips", state.trips.length],
    ["Collection", totalTripCollection()],
    ["Trip Expenses", totalTripExpenses()],
    ["Other Expenses", totalExtraExpenses()],
    ["Net Profit", netProfit()]
  ];
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.addEventListener("submit", handleSubmit);
document.addEventListener("click", handleClick);
document.addEventListener("change", handleFilterChange);

document.getElementById("roleSelect").addEventListener("change", (event) => {
  state.role = event.target.value;
  ensureAllowedView();
  saveState();
  render();
  showToast(`Role switched to ${event.target.options[event.target.selectedIndex].text}.`);
});

document.getElementById("globalSearch").addEventListener("input", (event) => {
  state.search = event.target.value;
  saveState();
  render();
});

document.getElementById("exportJsonBtn").addEventListener("click", exportJson);

document.addEventListener("change", (event) => {
  if (event.target.matches('[data-action="import-json"]')) {
    importJson(event.target.files[0]);
  }
});

render();
