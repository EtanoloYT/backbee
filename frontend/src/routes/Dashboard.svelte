<script>

</script>
<div class="flex flex-col w-full min-h-screen">
  <header class="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
    <a class="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
      <div class="logo">
        <img src="../backbee.png" alt="logo" class="w-44 rounded-lg" />
      </div>
    </a>
    <nav class="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6 ml-auto">
      <a class="text-gray-500 dark:text-gray-400" href="#">
        Dashboard
      </a>
      <a class="text-gray-500 dark:text-gray-400" href="#">
        API
      </a>
      <a class="text-gray-500 dark:text-gray-400" href="#">
        Storage
      </a>
      <a class="text-gray-500 dark:text-gray-400" href="#">
        Billing
      </a>
      <a class="text-gray-500 dark:text-gray-400" href="#">
        Settings
      </a>
    </nav>
    <div class="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
        <img
          src="../icons/user.svg"
          width="32"
          height="32"
          class="rounded-full"
          alt="Avatar"
          style="aspect-ratio: 32 / 32; object-fit: cover;"
        />
        <span class="sr-only">Toggle user menu</span>
      </button>
    </div>
  </header>
  <div class="flex flex-1">
    <div class="hidden lg:block w-[280px] bg-gray-100 dark:bg-gray-800 border-r">
      <div class="flex flex-col h-full gap-4 p-4">
        <div class="font-semibold text-lg">Platform</div>
        <nav class="grid gap-2">
          <a
            class="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
              <path d="M3 12A9 3 0 0 0 21 12"></path>
            </svg>
            Database
          </a>
          <a
            class="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <circle cx="7.5" cy="15.5" r="5.5"></circle>
              <path d="m21 2-9.6 9.6"></path>
              <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
            </svg>
            Authentication
          </a>
          <a
            class="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
            </svg>
            Storage
          </a>
          <a
            class="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Billing
          </a>
          <a
            class="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Settings
          </a>
        </nav>
      </div>
    </div>
    <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">Total Users</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="p-6">
            <div class="text-2xl font-bold">12,345</div>
            <p class="text-xs text-gray-500 dark:text-gray-400">+5.2% from last month</p>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">Active Users</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
          </div>
          <div class="p-6">
            <div class="text-2xl font-bold">8,234</div>
            <p class="text-xs text-gray-500 dark:text-gray-400">+3.1% from last month</p>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">API Calls</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div class="p-6">
            <div class="text-2xl font-bold">1.2M</div>
            <p class="text-xs text-gray-500 dark:text-gray-400">+12% from last month</p>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">Storage Used</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
              <path d="M3 12A9 3 0 0 0 21 12"></path>
            </svg>
          </div>
          <div class="p-6">
            <div class="text-2xl font-bold">256GB</div>
            <p class="text-xs text-gray-500 dark:text-gray-400">+8% from last month</p>
          </div>
        </div>
      </div>
      <div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">Recent Activity</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div class="p-6">
            <div class="grid gap-4 text-sm">
              <div class="flex items-center gap-2">
                <div class="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 md:w-12 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <div class="font-medium">New User Registered</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">2 hours ago</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 md:w-12 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <div class="font-medium">New API Call Logged</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">30 minutes ago</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 md:w-12 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium">Storage Limit Reached</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">1 day ago</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 md:w-12 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <circle cx="12" cy="13" r="8"></circle>
                    <path d="M12 9v4l2 2"></path>
                    <path d="M5 3 2 6"></path>
                    <path d="m22 6-3-3"></path>
                    <path d="M6.38 18.7 4 21"></path>
                    <path d="M17.64 18.67 20 21"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium">Scheduled Maintenance</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>