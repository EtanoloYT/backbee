<script>
</script>

<header
  class="w-full h-20 flex justify-evenly items-center p-8 fixed top-0 left-0"
>
  <div class="logo">
    <img src="../backbee.png" alt="logo" class="w-44 rounded-lg" />
  </div>
  <nav class="flex justify-evenly items-center w-1/2">
    <a href="/" class="navlink">Home</a>
    <a href="/about" class="navlink">About</a>
    <a href="/contact" class="navlink">Contact</a>
  </nav>
  <div class="auth">
    <a href="/login" class="button button-primary">Login</a>
    <a href="/register" class="button">Register</a>
  </div>
</header>

<main>
  <section class="hero h-screen w-full p-16">
    <div class="hero-content flex flex-col h-2/3 w-1/2 justify-end mb-4">
      <h1 class="hero-title text-6xl font-bold leading-snug">
        BackBee lets you focus on your <span class="highlight">APP</span>, we
        take care of the rest
      </h1>
      <p class="hero-subtitle text-2xl text-gray-800 mt-4 mb-4">
        We provide a simple and easy way to manage your app's backend whitout
        the need to write a single line of code
      </p>
      <img src="../blob.svg" alt="" class="blob absolute right-40 top-1/4" />
    </div>
    <a href="/register" class="button button-primary">Get Started</a>
    <a href="/login" class="button">Discover More</a>
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
    background-color: #fff1c2;
    z-index: 1000;
  }

  .navlink {
    color: black;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.3s ease;
  }

  .navlink:hover {
    text-decoration: underline;
  }

  .auth a,
  .button {
    margin-right: 1rem;
  }

  .hero-content {
    color: black;
  }

  .button-primary {
    background-color: #ffc60a;
    color: white;
  }

  .button {
    padding: 0.5rem 1rem;
    color: black;
    border-radius: 5px;
    text-decoration: none;
    border: 2px solid #ffcf33;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }

  .highlight {
    color: #ffc60a;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.15));
  }

  .hero .button {
    padding: 0.8rem 1.4rem;
    font-size: 1.2rem;
  }

  .hero .button-primary {
    background-color: #ffc60a;
    color: white;
  }

  .button:hover {
    background-color: #ffcf33;
    color: white;
  }

  .blob {
    filter: blur(60px);
    transform: scale(1.2);
  }

  h1 {
    font-family: "Montserrat", sans-serif;
  }

  .features h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  .feature {
    background-color: #fff1c2;
    border: 2px solid #ffcf33;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
</style>
