<script>
  import { Link } from "svelte-routing";
</script>

<header
  class="w-full h-20 flex justify-evenly items-center p-8 fixed top-0 left-0"
>
  <div class="logo">
    <img src="../backbee.png" alt="logo" class="w-44 rounded-lg" />
  </div>
  <nav class="flex justify-evenly items-center w-1/2">
    <Link to="/" class="navlink text-black hover:text-black text-lg">Home</Link>
    <Link to="/features" class="navlink text-black hover:text-black text-lg">Features</Link>
    <Link to="/services" class="navlink text-black hover:text-black text-lg">Services</Link>
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

<main>
  <section class="hero h-screen w-full p-16">
    <div class="hero-content flex flex-col h-2/3 w-1/2 justify-end mb-4">
      <h1 class="hero-title lg:text-6xl font-bold leading-snug">
        BackBee lets you focus on your <span class="highlight">APP</span>, we
        take care of the rest
      </h1>
      <p class="hero-subtitle text-2xl text-gray-800 mt-4 mb-4">
        We provide a simple and easy way to manage your app's backend whitout
        the need to write a single line of code
      </p>
      <img src="../blob.svg" alt="" class="blob absolute right-0 top-24 w-1/2" />
    </div>
    <Link
      to="/register"
      class="px-4 py-3 text-white bg-primary rounded-lg text-lg mr-2 hover:bg-accent hover:text-white transition-all"
      >Get Started</Link
    >
    <Link
      to="/features"
      class="px-4 py-3 text-black bg-white border-accent border-2 rounded-lg text-lg mx-2 hover:bg-accent hover:text-white transition-all"
      >Discorver More</Link
    >
    <div
      class="absolute w-full flex items-center justify-center bottom-10 left-0 pointer-events-none animate-bounce"
    >
      <img src="../icons/arrow-down.svg" class="w-12" alt="" />
    </div>
  </section>
  <section class="features w-full p-16">
    <h2 class="text-4xl text-black text-center">Features</h2>
    <div class="feature-list flex justify-evenly items-center mt-8">
      <div
        class="feature p-4 flex flex-col items-center text-black rounded-xl max-w-sm"
      >
        <h3 class="text-2xl font-bold mt-4">Easy to use</h3>
        <p class="text-gray-800 mt-2 text-center text-lg">
          BackBee is easy to use and requires no prior knowledge of backend
          development.
        </p>
      </div>
      <div
        class="feature p-4 flex flex-col items-center text-black rounded-xl max-w-sm"
      >
        <h3 class="text-2xl font-bold mt-4">Lightweight</h3>
        <p class="text-gray-800 mt-2 text-center text-lg">
          BackBee is lightweight and fast, making it perfect for any app.
        </p>
      </div>
      <div
        class="feature p-4 flex flex-col items-center text-black rounded-xl max-w-sm"
      >
        <h3 class="text-2xl font-bold mt-4">Secure</h3>
        <p class="text-gray-800 mt-2 text-center text-lg">
          BackBee is secure and reliable, ensuring your data is safe.
        </p>
      </div>
    </div>
  </section>
  <section class="services w-full p-16"></section>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

  header {
    z-index: 1000;
  }

  .hero-content {
    color: black;
  }

  .highlight {
    color: #ffc60a;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.15));
  }

  .blob {
    filter: blur(60px);
  }

  h1 {
    font-family: "Montserrat", sans-serif;
  }

  .features h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  .feature {
    border: 2px solid #ffcf33;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
</style>
