const hiddenMovies = [
    
];
const manualMovies = [
{
          id: 777443,
          title: "Estado Eléctrico",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/nCuSMDWhWGJAPdp9rSDIogG5X82.jpg",
          link: "detalles.html?type=movie&id=777443",
          year: "2025",
          genres: ["Ciencia ficción", "Aventura", "Drama"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 426063,
          title: "Nosferatu",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/jivUhECegXI3OYtPVflWoIDtENt.jpg",
          link: "detalles.html?type=movie&id=426063",
          year: "2024",
          genres: ["Fantasía", "Terror"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 696506,
          title: "Mickey 17",
          image: "https://s.lupacine.com/image/t/p/w500/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
          link: "detalles.html?type=movie&id=696506",
          year: "2025",
          genres: ["Ciencia ficción", "Aventura", "Comedia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1357633,
          title: "Solo Leveling: Segundo Despertar",
          image: "https://s.lupacine.com/image/t/p/w500/dblIFen0bNZAq8icJXHwrjfymDW.jpg",
          link: "detalles.html?type=movie&id=1357633",
          year: "2024",
          genres: ["Acción", "Aventura", "Fantasía", "Animación"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 710295,
          title: "Hombre Lobo",
          image: "https://s.lupacine.com/image/t/p/w500/vtdEHG1j07PqLlVyhKNZRHTPKGt.jpg",
          link: "detalles.html?type=movie&id=710295",
          year: "2025",
          genres: ["Terror", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 539972,
          title: "Kraven el cazador",
          image: "https://s.lupacine.com/image/t/p/w500/1GvBhRxY6MELDfxFrete6BNhBB5.jpg",
          link: "detalles.html?type=movie&id=539972",
          year: "2024",
          genres: ["Acción", "Aventura", "Fantasía", "Suspenso", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 774370,
          title: "Las aventuras de Dog Man",
          image: "https://s.lupacine.com/image/t/p/w500/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg",
          link: "detalles.html?type=movie&id=774370",
          year: "2025",
          genres: ["Animación", "Aventura", "Acción", "Comedia", "Familia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 516729,
          title: "Paddington: Aventura en la selva",
          image: "https://s.lupacine.com/image/t/p/w500/1ffZAucqfvQu36x1C49XfOdjuOG.jpg",
          link: "detalles.html?type=movie&id=516729",
          year: "2024",
          genres: ["Aventura", "Comedia", "Familia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 912649,
          title: "Venom: El último baile",
          image: "https://s.lupacine.com/image/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
          link: "detalles.html?type=movie&id=912649",
          year: "2024",
          genres: ["Aventura", "Acción", "Suspenso", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1247019,
          title: "Thi Yot 2: Susurros Mortales",
          image: "https://s.lupacine.com/image/t/p/w500/uDW5eeFUYp1vaU2ymEdVBG6g7iq.jpg",
          link: "detalles.html?type=movie&id=1247019",
          year: "2024",
          genres: ["Terror", "Acción", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1138749,
          title: "The Island",
          image: "https://s.lupacine.com/image/t/p/w500/ajb1rMiorchfRemYHZCkbV9DBg6.jpg",
          link: "detalles.html?type=movie&id=1138749",
          year: "2023",
          genres: ["Acción", "Suspenso", "Crimen"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 558449,
          title: "Gladiador II",
          image: "https://s.lupacine.com/image/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
          link: "detalles.html?type=movie&id=558449",
          year: "2024",
          genres: ["Aventura", "Drama", "Acción", "Historia"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1201012,
          title: "Dhoom Dhaam",
          image: "https://s.lupacine.com/image/t/p/w500/2E7me3rPi8HqaeheuD86YlpNX6k.jpg",
          link: "detalles.html?type=movie&id=1201012",
          year: "2025",
          genres: ["Acción", "Comedia", "Romance"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1035048,
          title: "Criaturas: Línea de extinción",
          image: "https://s.lupacine.com/image/t/p/w500/tnfc0NJ3BzhJrGJhkkEd6MHBdq5.jpg",
          link: "detalles.html?type=movie&id=1035048",
          year: "2024",
          genres: ["Acción", "Suspenso", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1352774,
          title: "Piglet",
          image: "https://s.lupacine.com/image/t/p/w500/5wZNFUJAwyX6RCxdqrLO9lLWJ20.jpg",
          link: "detalles.html?type=movie&id=1352774",
          year: "2025",
          genres: ["Terror"] // <-- Asegúrate de que esto esté definido
      },
    {
          id: 1405338,
          title: "Oni-Goroshi: Ciudad de los demonios",
          image: "https://s.lupacine.com/image/t/p/w500/fQ9hzto0cUuxjfzqNAiAnNJo8O7.jpg",
          link: "detalles.html?type=movie&id=1405338",
          year: "2025",
          genres: ["Acción", "Crimen", "Fantasía", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
    {
        id: 950396, // ID de TMDb para "Fight Club"
        title: "El Abismo Secreto",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3s0jkMh0YUhIeIeioH3kt2X4st4.jpg",
        link: "detalles.html?type=movie&id=950396", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 822119, // ID de TMDb para "Fight Club"
        title: "Capitán América: Un Nuevo Mundo",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/xVwP4GCbEfO66JSSyonnAhU3Fad.jpg",
        link: "detalles.html?type=movie&id=822119", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1084199, // ID de TMDb para "Fight Club"
        title: "Compañera Perfecta",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/nyloao2GWttUvS7KVcEM2eSDwUn.jpg",
        link: "detalles.html?type=movie&id=1084199", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1126166, // ID de TMDb para "Fight Club"
        title: "Amenaza En El Aire",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/8T6nkYb4W8BIeafmFffyfsRciTL.jpg",
        link: "detalles.html?type=movie&id=1126166", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 823219, // ID de TMDb para "Fight Club"
        title: "Flow",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/337MqZW7xii2evUDVeaWXAtopff.jpg",
        link: "detalles.html?type=movie&id=823219", // Usamos el ID de TMDb
        year: "2024"
    }, 
    {
        id: 1064213, // ID de TMDb para "Fight Club"
        title: "Anora",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/n5wEFSLkm2fCtN0FVAuphrCAjf8.jpg",
        link: "detalles.html?type=movie&id=1064213", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 762509, // ID de TMDb para "Fight Club"
        title: "Mufasa El Rey León",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/dmw74cWIEKaEgl5Dv3kUTcCob6D.jpg",
        link: "detalles.html?type=movie&id=762509", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 1241982, // ID de TMDb para "Fight Club"
        title: "Moana 2",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/b1WsCRfomw7tRi12NuseKsAJxYK.jpg",
        link: "detalles.html?type=movie&id=1241982", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 939243, // ID de TMDb para "Fight Club"
        title: "Sonic 3: La Película",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3aDWCRXLYOCuxjrjiPfLd79tcI6.jpg",
        link: "detalles.html?type=movie&id=939243", // Usamos el ID de TMDb
        year: "2024"
    },
{
          id: 1104845,
          title: "Plankton: La Película",
          image: "https://s.lupacine.com/image/t/p/w500/hGaUNLF5VZbg9ovPTyjm9Rv5xWz.jpg",
          link: "detalles.html?type=movie&id=1104845",
          year: "2025",
          genres: ["Animación", "Comedia", "Aventura", "Familia", "Fantasía"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1356039,
          title: "Counterstrike",
          image: "https://s.lupacine.com/image/t/p/w500/lI2uFlSEkwXKljqiry7coaJ6wIS.jpg",
          link: "detalles.html?type=movie&id=1356039",
          year: "2025",
          genres: ["Acción", "Fantasía", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1124620,
          title: "El Mono",
          image: "https://s.lupacine.com/image/t/p/w500/yYa8Onk9ow7ukcnfp2QWVvjWYel.jpg",
          link: "detalles.html?type=movie&id=1124620",
          year: "2025",
          genres: ["Comedia", "Terror"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 799766,
          title: "Better Man",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/otXaS8K5coAwmUyGxBsNz9mWs8H.jpg",
          link: "detalles.html?type=movie&id=799766",
          year: "2025",
          genres: ["Música", "Drama"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1140535,
          title: "Presencia",
          image: "https://media.themoviedb.org/t/p/w220_and_h330_face/kc7YIx6KNiXm1dpqlhqdX3eTL7a.jpg",
          link: "detalles.html?type=movie&id=1140535",
          year: "2025",
          genres: ["Drama", "Terror"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1418522,
          title: "Delicia",
          image: "https://s.lupacine.com/image/t/p/w500/o1ZIvviAEuIHcH9x6sv112mSvTR.jpg",
          link: "detalles.html?type=movie&id=1418522",
          year: "2025",
          genres: ["Drama", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1276073,
          title: "Bullet Train Explosion",
          image: "https://s.lupacine.com/image/t/p/w500/jmzxlDBwgvRbpPJzNQwizyn9UEn.jpg",
          link: "detalles.html?type=movie&id=1276073",
          year: "2025",
          genres: ["Drama", "Suspenso", "Acción","Crimen"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1249213,
          title: "Drop: Amenaza anónima",
          image: "https://s.lupacine.com/image/t/p/w500/dS2S5lpfgRIRQOb7LDCjNsQqKjp.jpg",
          link: "detalles.html?type=movie&id=1249213",
          year: "2025",
          genres: ["Terror", "Suspenso", "Misterio"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1210938,
          title: "Revelación",
          image: "https://s.lupacine.com/image/t/p/w500/ak0HlRVsVzh8mvwIUZpZr0z6uqW.jpg",
          link: "detalles.html?type=movie&id=1210938",
          year: "2025",
          genres: ["Suspenso", "Crimen", "Misterio"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 1013601,
          title: "The Alto Knights",
          image: "https://s.lupacine.com/image/t/p/w500/95KmR0xNuZZ6DNESDwLKWGIBvMg.jpg",
          link: "detalles.html?type=movie&id=1013601",
          year: "2025",
          genres: ["Crimen", "Drama", "Historia"] // <-- Asegúrate de que esto esté definido
      },
{
          id: 931349,
          title: "Ash",
          image: "https://s.lupacine.com/image/t/p/w500/nRa8B3tQCUK6pVwjasIyQehbvpF.jpg",
          link: "detalles.html?type=movie&id=931349",
          year: "2025",
          genres: ["Terror", "Suspenso", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1254786,
          title: "Mi Lista De Deseos",
          image: "https://s.lupacine.com/image/t/p/w500/5fg98cVo7da7OIK45csdLSd4NaU.jpg",
          link: "detalles.html?type=movie&id=1254786",
          year: "2025",
          genres: ["Romance", "Comedia", "Drama"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1087891,
          title: "El amateur: Operación venganza",
          image: "https://s.lupacine.com/image/t/p/w500/SNEoUInCa5fAgwuEBMIMBGvkkh.jpg",
          link: "detalles.html?type=movie&id=1087891",
          year: "2025",
          genres: ["Suspenso", "Acción"] // <-- Asegúrate de que esto esté definido
      },
     {
          id: 1197306,
          title: "Rescate implacable",
          image: "https://s.lupacine.com/image/t/p/w500/6FRFIogh3zFnVWn7Z6zcYnIbRcX.jpg",
          link: "detalles.html?type=movie&id=1197306",
          year: "2025",
          genres: ["Acción", "Suspenso", "Crimen"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 974573,
          title: "Otro pequeño favor",
          image: "https://s.lupacine.com/image/t/p/w500/zboCGZ4aIqPMd7VFI4HWnmc7KYJ.jpg",
          link: "detalles.html?type=movie&id=974573",
          year: "2025",
          genres: ["Comedia", "Suspenso", "Crimen"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1244944,
          title: "La mujer de las sombras",
          image: "https://s.lupacine.com/image/t/p/w500/n0WS2TsNcS6dtaZKzxipyO7LuCJ.jpg",
          link: "detalles.html?type=movie&id=1244944",
          year: "2025",
          genres: ["Terror", "Suspenso", "Misterio"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1195506,
          title: "Novocaine",
          image: "https://s.lupacine.com/image/t/p/w500/xmMHGz9dVRaMY6rRAlEX4W0Wdhm.jpg",
          link: "detalles.html?type=movie&id=1195506",
          year: "2025",
          genres: ["Acción", "Suspenso", "Comedia"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 950387,
          title: "Una película de Minecraft",
          image: "https://s.lupacine.com/image/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
          link: "detalles.html?type=movie&id=950387",
          year: "2025",
          genres: ["Aventura", "Fantasía", "Comedia","Familia"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1233069,
          title: "Extraterritorial",
          image: "https://s.lupacine.com/image/t/p/w500/jM2uqCZNKbiyStyzXOERpMqAbdx.jpg",
          link: "detalles.html?type=movie&id=1233069",
          year: "2025",
          genres: ["Acción", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 986056,
          title: "Thunderbolts*",
          image: "https://s.lupacine.com/image/t/p/w500/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
          link: "detalles.html?type=movie&id=986056",
          year: "2025",
          genres: ["Drama","Acción", "Aventura", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 668489,
          title: "Estragos",
          image: "https://s.lupacine.com/image/t/p/w500/r46leE6PSzLR3pnVzaxx5Q30yUF.jpg",
          link: "detalles.html?type=movie&id=668489",
          year: "2025",
          genres: ["Acción", "Crimen", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1333100,
          title: "Attack on Titan: EL ATAQUE FINAL",
          image: "https://s.lupacine.com/image/t/p/w500/wgwldDDlTDDMrluOMkpSA8lyKjv.jpg",
          link: "detalles.html?type=movie&id=1333100",
          year: "2024",
          genres: ["Animación", "Aventura", "Acción","Drama","Fantasía"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1144430,
          title: "La bala perdida 3",
          image: "https://s.lupacine.com/image/t/p/w500/qycPITRqXgPai7zj1gKffjCdSB5.jpg",
          link: "detalles.html?type=movie&id=1144430",
          year: "2025",
          genres: ["Acción", "Suspenso", "Crimen","Drama"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1297763,
          title: "Batman Ninja vs La Liga Yakuza",
          image: "https://s.lupacine.com/image/t/p/w500/sVVT6GYFErVv0Lcc9NvqCu0iOxO.jpg",
          link: "detalles.html?type=movie&id=1297763",
          year: "2025",
          genres: ["Animación", "Acción"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 929204,
          title: "Wallace y Gromit: La venganza se sirve con plumas",
          image: "https://s.lupacine.com/image/t/p/w500/6BxK38ehxuX2dJmZIMpJcVNbYks.jpg",
          link: "detalles.html?type=movie&id=929204",
          year: "2024",
          genres: ["Familia", "Comedia", "Aventura","Animación"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1299652,
          title: "Watchmen: Capítulo 2",
          image: "https://s.lupacine.com/image/t/p/w500/4rBObJFpiWJOG7aIlRrOUniAkBs.jpg",
          link: "detalles.html?type=movie&id=1299652",
          year: "2024",
          genres: ["Animación", "Drama", "Acción","Ciencia ficción","Misterio"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1469239,
          title: "Karol G: Mañana fue muy bonito",
          image: "https://s.lupacine.com/image/t/p/w500/5aXoQYwaQ7JJVUWclHAEXJgiS2M.jpg",
          link: "detalles.html?type=movie&id=1469239",
          year: "2025",
          genres: ["Música", "Documetal"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1233413,
          title: "Los Pecadores",
          image: "https://s.lupacine.com/image/t/p/w500/jYfMTSiFFK7ffbY2lay4zyvTkEk.jpg",
          link: "detalles.html?type=movie&id=1233413",
          year: "2025",
          genres: ["Terror", "Suspenso","Drama","Acción","Western","Música"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1075456,
          title: "O'Dessa",
          image: "https://s.lupacine.com/image/t/p/w500/xbdRxyr1u5dbhvMm14w7J1jJWQS.jpg",
          link: "detalles.html?type=movie&id=1075456",
          year: "2025",
          genres: ["Música", "Drama", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 906126,
          title: "La sociedad de la nieve",
          image: "https://s.lupacine.com/image/t/p/w500/2e853FDVSIso600RqAMunPxiZjq.jpg",
          link: "detalles.html?type=movie&id=906126",
          year: "2023",
          genres: ["Historia", "Drama",] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 1061699,
          title: "Seis Triple Ocho",
          image: "https://s.lupacine.com/image/t/p/w500/7tvAnzZj9e9AjdoHaN9jshm2Cjw.jpg",
          link: "detalles.html?type=movie&id=1061699",
          year: "2024",
          genres: ["Drama", "Historia", "Bélica"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 661539,
          title: "Un completo desconocido",
          image: "https://s.lupacine.com/image/t/p/w500/llWl3GtNoXosbvYboelmoT459NM.jpg",
          link: "detalles.html?type=movie&id=661539",
          year: "2024",
          genres: ["Drama", "Música", "Historia"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 650033,
          title: "Gravedad cero",
          image: "https://s.lupacine.com/image/t/p/w500/tB66c6dnu9dG60mta8TF8zmeGJn.jpg",
          link: "detalles.html?type=movie&id=650033",
          year: "2025",
          genres: ["Ciencia ficción}", "Suspenso"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 896536,
          title: "La Leyenda de Ochi",
          image: "https://s.lupacine.com/image/t/p/w500/wVujUVvY4qvKARAslItQ4ARKqtz.jpg",
          link: "detalles.html?type=movie&id=896536",
          year: "2025",
          genres: ["Fantasía", "Aventura", "Familia"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 574475,
          title: "Destino final lazos de sangre",
          image: "https://s.lupacine.com/image/t/p/w500/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
          link: "detalles.html?type=movie&id=574475",
          year: "2025",
          genres: ["Terror", "Misterio"] // <-- Asegúrate de que esto esté definido
      },
      {
          id: 552524,
          title: "Lilo y Stitch",
          image: "https://s.lupacine.com/image/t/p/w500/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg",
          link: "detalles.html?type=movie&id=552524",
          year: "2025",
          genres: ["Familia", "Comedia", "Ciencia ficción"] // <-- Asegúrate de que esto esté definido
      },
];

// Películas de acción (vacío)
const accionMovies = [
    {
        id: 822119, // ID de TMDb para "Fight Club"
        title: "Capitán América: Un Nuevo Mundo",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/xVwP4GCbEfO66JSSyonnAhU3Fad.jpg",
        link: "detalles.html?type=movie&id=822119", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1126166, // ID de TMDb para "Fight Club"
        title: "Amenaza En El Aire",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/8T6nkYb4W8BIeafmFffyfsRciTL.jpg",
        link: "detalles.html?type=movie&id=1126166", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 950396, // ID de TMDb para "Fight Club"
        title: "El Abismo Secreto",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3s0jkMh0YUhIeIeioH3kt2X4st4.jpg",
        link: "detalles.html?type=movie&id=950396", // Usamos el ID de TMDb
        year: "2025"
    },
   
];

// Películas de drama (vacío)
const dramaMovies = [
    {
        id: 974576, // ID de TMDb para "Fight Club"
        title: "Cónclave",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/jkOgeASTlWwyKLBNblHVwWmAKhD.jpg",
        link: "detalles.html?type=movie&id=974576", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 933260, // ID de TMDb para "Fight Club"
        title: "The substance",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/w1PiIqM89r4AM7CiMEP4VLCEFUn.jpg",
        link: "detalles.html?type=movie&id=933260", // Usamos el ID de TMDb
        year: "2024"
    },
    {
        id: 1272149, // ID de TMDb para "Fight Club"
        title: "Bridget Jones: Loca Por Él",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/9K4xBef7N7YZTnke23FiNTHBGNU.jpg",
        link: "detalles.html?type=movie&id=1272149", // Usamos el ID de TMDb
        year: "2025"
    },
    {
        id: 1294203, // ID de TMDb para "Fight Club"
        title: "Culpa Mía: Londres",
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/q0HxfkF9eoa6wSVnzwMhuDSK7ba.jpg",
        link: "detalles.html?type=movie&id=1294203", // Usamos el ID de TMDb
        year: "2025"
    },
];
// Exportar los arrays para que puedan ser usados en otros archivos
export { hiddenMovies, manualMovies, accionMovies, dramaMovies };