<template>
  <main class="py-8 px-12">
    <header>
      <h1 class="text-center text-6xl">Brad Bell</h1>
      <nav class="w-4/5 mx-auto mt-4">
        <ul class="flex flex-row justify-between">
          <li>
            <router-link to="/" exact-active-class="underline" class="hover:underline"
              >Me</router-link
            >
          </li>
          <li>
            <router-link to="/words" active-class="underline" class="hover:underline"
              >Words</router-link
            >
          </li>
          <li>
            <router-link to="/learn" active-class="underline" class="hover:underline"
              >Learn</router-link
            >
          </li>
          <li>
            <router-link to="/contact" active-class="underline" class="hover:underline"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
      <router-view />
    </header>
  </main>
</template>
<script></script>
