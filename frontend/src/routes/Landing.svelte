<script>
  import { Link } from "svelte-routing";
</script>

<div class="flex flex-col min-h-[100dvh]">
  <header
  class="w-full h-20 flex justify-evenly items-center p-8 fixed top-0 left-0 bg-white"
>
  <div class="logo">
    <img src="../backbee.png" alt="logo" class="w-44 rounded-lg" />
  </div>
  <nav class="flex justify-evenly items-center w-1/2">
    <Link to="/" class="navlink text-black hover:underline hover:text-primary text-lg">Home</Link>
    <Link to="/features" class="navlink text-black hover:underline hover:text-primary text-lg">Features</Link>
    <Link to="/services" class="navlink text-black hover:underline hover:text-primary text-lg">Services</Link>
  </nav>
  <div class="auth">
    <Link
      to="/login"
      class="px-4 py-3 text-white bg-primary rounded-lg text-lg mx-2 hover:bg-accent hover:text-white transition-all"
      >Login</Link
    >
    <Link
      to="/register"
      class="px-4 py-3 text-black bg-white border-accent border-2 rounded-lg text-lg mx-2 hover:bg-accent hover:text-white transition-all"
      >Register</Link
    >
  </div>
</header>
  <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-yellow-500 flex justify-center">
      <div class="container px-4 md:px-6 flex flex-col items-center text-center text-gray-50">
        <div class="space-y-4 max-w-3xl">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock the Power of BaaS with Our Cutting-Edge Platform
          </h1>
          <p class="text-lg md:text-xl">
            Streamline your backend development with our scalable, secure, and developer-friendly BaaS platform.
            Unleash your creativity and focus on building great products.
          </p>
        </div>
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            class="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-yellow-500 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Get Started
          </a>
          <a
            class="inline-flex h-10 items-center justify-center rounded-md border border-gray-50 bg-transparent px-6 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-50/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
    <section id="features" class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
      <div class="container px-4 md:px-6">
        <div class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Key Features</div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Backend Development</h2>
              <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our BaaS platform offers a suite of powerful features to help you build and scale your applications
                with ease.
              </p>
            </div>
            <ul class="grid gap-4">
              <li class="flex items-start gap-2">
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
                  class="mt-1 h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-semibold">Scalable Infrastructure</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Our platform scales seamlessly to handle your growing backend needs, so you can focus on
                    building great products.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-2">
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
                  class="mt-1 h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-semibold">Easy Integration</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Integrate your frontend with our BaaS in minutes using our comprehensive API documentation and
                    SDKs.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-2">
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
                  class="mt-1 h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-semibold">Developer-Friendly Tools</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Leverage our suite of developer tools, including real-time analytics, debugging, and deployment
                    automation.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="BaaS Features"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
    <section id="testimonials" class="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
          <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from the developers who have transformed their businesses with our BaaS platform.
          </p>
        </div>
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <div class="flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  width="40"
                  height="40"
                  alt="Avatar"
                  class="rounded-full"
                  style="aspect-ratio: 40 / 40; object-fit: cover;"
                />
                <div>
                  <div class="font-semibold">Jane Doe</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">CTO, Acme Inc</div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-500 dark:text-gray-400">
                "The BaaS platform has been a game-changer for our development team. The scalable infrastructure and
                developer-friendly tools have allowed us to focus on building great products."
              </p>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <div class="flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  width="40"
                  height="40"
                  alt="Avatar"
                  class="rounded-full"
                  style="aspect-ratio: 40 / 40; object-fit: cover;"
                />
                <div>
                  <div class="font-semibold">John Smith</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-500 dark:text-gray-400">
                "We've been using the BaaS platform for over a year now, and it has been a game-changer for our
                business. The easy integration and scalability have allowed us to focus on building innovative
                products."
              </p>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <div class="flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  width="40"
                  height="40"
                  alt="Avatar"
                  class="rounded-full"
                  style="aspect-ratio: 40 / 40; object-fit: cover;"
                />
                <div>
                  <div class="font-semibold">Sarah Johnson</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Lead Developer, Acme Inc</div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-500 dark:text-gray-400">
                "The BaaS platform has been a game-changer for our development team. The developer-friendly tools
                and real-time analytics have allowed us to build and deploy applications faster than ever before."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing" class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
      <div class="container grid items-center gap-4 px-4 md:px-6">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing</h2>
          <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choose the plan that fits your needs and scale as your business grows.
          </p>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Starter</h3>
              <div class="text-4xl font-bold">$9</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">per month</div>
            </div>
            <div class="p-6">
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>1 GB RAM</span>
                </li>
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>1 vCPU</span>
                </li>
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>10 GB Storage</span>
                </li>
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>1 TB Bandwidth</span>
                </li>
              </ul>
            </div>
            <div class="flex items-center p-6">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Pro</h3>
              <div class="text-4xl font-bold">$49</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">per month</div>
            </div>
            <div class="p-6">
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>4 GB RAM</span>
                </li>
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>2 vCPU</span>
                </li>
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>50 GB Storage</span>
                </li>
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>5 TB Bandwidth</span>
                </li>
              </ul>
            </div>
            <div class="flex items-center p-6">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Enterprise</h3>
              <div class="text-4xl font-bold">$199</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">per month</div>
            </div>
            <div class="p-6">
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
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
                    class="h-5 w-5 text-gray-900 dark:text-gray-50"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>8 GB RAM</span>
                </li>
              </ul>
            </div>
            <div class="flex items-center p-6">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>