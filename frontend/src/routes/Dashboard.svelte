<script>
  import { Link } from "svelte-routing";

  let collections = [
    {
      name: "Users",
      description: "Collection of all users",
      fields: [
        {
          name: "Name",
          type: "String",
          required: true,
        },
        {
          name: "Email",
          type: "String",
          required: true,
        },
        {
          name: "Password",
          type: "String",
          required: true,
        },
      ],
      data: [
        {
          name: "John Doe",
          email: "johndoe@mail.com",
          password: "password",
        },
        {
          name: "Jane Doe",
          email: "janedoe@mail.com",
          password: "password2",
        },
        {
          name: "John Smith",
          email: "john@caca.com",
          password: "password3",
        },
      ],
    },
    {
      name: "Products",
      description: "Collection of all products",
      fields: [
        {
          name: "Name",
          type: "String",
          required: true,
        },
        {
          name: "Price",
          type: "Number",
          required: true,
        },
        {
          name: "Description",
          type: "String",
          required: true,
        },
      ],
      data: [
        {
          name: "Product 1",
          price: 100,
          description: "Product 1 description",
        },
        {
          name: "Product 2",
          price: 200,
          description: "Product 2 description",
        },
        {
          name: "Product 3",
          price: 300,
          description: "Product 3 description",
        },
      ],
    },
    {
      name: "Orders",
      data: [],
    },
  ];

  let collection = collections[0];
</script>

<div class="flex">
  <aside class="h-screen w-24 border-r-2">
    <div class="flex flex-col items-center justify-between h-full mx-auto py-8">
      <Link
        to="/"
        class="flex items-center text-2xl font-semibold text-gray-900"
      >
        <h1 class="text-2xl">BB</h1>
      </Link>
      <nav class="flex flex-col items-center justify-between h-1/3 w-full">
        <Link
          to="/"
          class="navlink text-black hover:text-black text-lg border-2 p-1 rounded-lg border-black"
        >
          <img src="../icons/database.svg" alt="" class="w-8" />
        </Link>
        <Link
          to="/features"
          class="navlink text-black hover:text-black text-lg"
        >
          <img src="../icons/analytics.svg" alt="" class="w-8" />
        </Link>
        <Link
          to="/services"
          class="navlink text-black hover:text-black text-lg"
        >
          <img src="../icons/folder.svg" alt="" class="w-8" />
        </Link>
      </nav>
      <Link to="/settings" class="navlink text-black hover:text-black text-lg">
        <img src="../icons/cog.svg" alt="" class="w-8" />
      </Link>
    </div>
  </aside>
  <aside class="w-60 border-r-2 max-h-screen py-8 flex flex-col">
    <div class="w-will flex items-center justify-center flex-col">
      <h2 class="text-lg text-gray-500">Collections</h2>
      <div class="collections flex flex-col w-full">
        {#each collections as coll}
          <button
            class="w-full text-left bg-white border-b border-b-gray-200 p-4 hover:bg-primary"
            on:click={() => (collection = coll)}
          >
            <h3 class="text-gray-900">{coll.name}</h3>
          </button>
        {/each}
      </div>
    </div>
  </aside>
  <main class="w-full max-h-screen p-8 flex flex-col gap-8">
    <div class="toolbar w-full">
      <h2 class="text-lg text-gray-500">Collections / {collection.name}</h2>
      <p class="text-gray-400 text-sm">{collection.description || ""}</p>
    </div>
    <div class="w-full h-12 flex items-center">
      <input
        type="text"
        placeholder="Search Collection"
        class="w-full h-full rounded-full bg-gray-200 px-8 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-600 p-4"
      />
    </div>
    <div class="w-full relative">
      {#if collection.data.length > 0}
        <div class="max-h-[80vh] overflow-y-scroll">
          <table class="w-full table-auto">
            <thead class="">
              <tr class="border-b border-gray-200 h-16 w-full">
                <th class="text-left text-gray-500 p-4">
                  <input
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    on:click={() => {
                      document
                        .querySelectorAll('input[type="checkbox"]')
                        .forEach((checkbox) => {
                          if (checkbox !== event.target)
                            checkbox.checked = !checkbox.checked;
                        });
                    }}
                  />
                </th>
                {#each collection.fields as field}
                  <th class="text-left text-gray-500 p-4">{field.name}</th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each collection.data as item}
                <tr
                  class="border-b border-gray-200 h-16 hover:bg-gray-100 w-full"
                >
                  <td class="text-left text-gray-900 p-4">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </td>
                  {#each Object.values(item) as value}
                    <td class="text-left text-gray-900 p-4">{value}</td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {:else}
        <div class="w-full h-1/2 flex flex-col items-center justify-center">
          <h2 class="text-2xl text-gray-900">No Collection Found</h2>
          <p class="text-gray-500">Create a new collection to get started</p>
          <button class="px-4 py-2 text-white bg-primary rounded-lg mt-4"
            >Create Collection</button
          >
        </div>
      {/if}
    </div>
  </main>
</div>

<style>
  input[type="text"] {
    background-image: url("../icons/search.svg");
    background-repeat: no-repeat;
    background-position: 0.5em 50%;
    background-size: 1.2rem;
  }
</style>
