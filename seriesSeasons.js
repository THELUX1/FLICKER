// seriesSeasons.js
const seriesSeasons = [
    {
        seriesId: 194807, // ID de la serie
        seasons: [
            {
                seasonNumber: 1, // Número de la temporada
                episodes: [
                    {
                        episodeNumber: 1, // Número del episodio
                        title: "Episodio 1",
                        description: "Descripción del episodio 1",
                        duration: "29 min",
                        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/4BOfJlIY99rCrDFI2nR0ID6Isu8.jpg",
                        qualities: {
                            "360p": "https://akm-cdn-play-web.onfilom.com/80737794b3ba71ef944b5114c1ca0102/fb3643710c7e4eeda1d2eba7f14fb7ef-4b21b362dcf11c04021f372853347eb8-fd.m3u8?hdnts=exp=1742685252_acl=/80737794b3ba71ef944b5114c1ca0102/*_hmac=5b5abdede1fc00fafeb0fd0448f7772f49e605e589964ed1e62ca83d45403d2a",
                            "480p": "https://akm-cdn-play-web.onfilom.com/80737794b3ba71ef944b5114c1ca0102/fb3643710c7e4eeda1d2eba7f14fb7ef-80f8dc9f4953d721c0a9d35ee3252bb6-sd.m3u8?hdnts=exp=1742685252_acl=/80737794b3ba71ef944b5114c1ca0102/*_hmac=5b5abdede1fc00fafeb0fd0448f7772f49e605e589964ed1e62ca83d45403d2a",
                            "720p": "https://akm-cdn-play-web.onfilom.com/80737794b3ba71ef944b5114c1ca0102/fb3643710c7e4eeda1d2eba7f14fb7ef-1f5ae40624a79001b09ff16cf4cf575c-hd.m3u8?hdnts=exp=1742685252_acl=/80737794b3ba71ef944b5114c1ca0102/*_hmac=5b5abdede1fc00fafeb0fd0448f7772f49e605e589964ed1e62ca83d45403d2a"
                        }
                    },
                    {
                        episodeNumber: 2,
                        title: "Episodio 2",
                        description: "Descripción del episodio 2",
                        duration: "45 min",
                        image: "https://via.placeholder.com/300x200?text=Episodio+2",
                        qualities: {
                            "360p": "https://example.com/episode2-360p.m3u8",
                            "480p": "https://example.com/episode2-480p.m3u8",
                            "720p": "https://example.com/episode2-720p.m3u8"
                        }
                    }
                    // Más episodios...
                ]
            },
            // Más temporadas...
        ]
    }
    // Más series...
];

export default seriesSeasons;