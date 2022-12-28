<script>

  let menuShow = false;
  
  function toggleNavbar() {
    menuShow = !menuShow;
  }
  
  </script>
  <div class="flex flex-wrap py-2">
    <div class="w-full px-4">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-500 rounded">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
              blueGray Starter Menu
            </a>
            <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" on:click={toggleNavbar}>
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div class="lg:flex lg:flex-grow items-center {menuShow ? 'flex':'hidden'}">
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  <i class="fas fa-globe text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  <i class="fas fa-user text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  <i class="fas fa-cog text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>