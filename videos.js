// videos.js
const movieVideos = {
    "1272149": {
        "title": "Bridget Jones: Loca Por Él",
        "360p": "https://v2.fiestareel.com/mov/2025/1272149-156564/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1272149-156564/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/1272149-156564/720/720p.m3u8"
    },        
    "933260": {
        "title": "La sustancia",
        "360p": "https://v2.fiestareel.com/mov/2024/933260-156010/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/933260-156010/720/720p.m3u8",
        "1080p": "https://xyve3dzn2w.guardstorage.net/hls_3/7pvQIdsxe6FabtJ2nwp5Ou_fnvf2zyBlv-EAkd1AdqKDVg3KutMW5bUKACBU6TOBffNnDAcmwbiQmlnyrCfWQuXLMdw8oXe9b6c-9qcm9dxen3g9lVg3L829S98JfuxrDrDyl1jLssUpb5zIWAzxd3mV17WOMypZ7dFcHhXlEWBDolJuPTsF-DsvlTpBLDHr6Gdma3JnkJYi8LuJzV5ofA/index-f3-v1-a1.m3u8?sig=fyxlCU31aBHUd2CWgLZDig&expires=1741169323"
    },
    "823219": {
        "title": "Flow",
        "360p": "https://akm-cdn-play-web.onfilom.com/70d62c448d1a71efbfc987c7371d0102/de9e99578e8448dc96428924ffd150dd-31f43b7a1cd6b8c49b9e46905d4d8866-sd.m3u8?hdnts=exp=1741754593_acl=/70d62c448d1a71efbfc987c7371d0102/*_hmac=72c15b6a768e408e7539ed2e49a40e8cf9774dcbdf369dea6659d7508b0ca62a",
        "720p": "https://akm-cdn-play-web.onfilom.com/70d62c448d1a71efbfc987c7371d0102/de9e99578e8448dc96428924ffd150dd-31f43b7a1cd6b8c49b9e46905d4d8866-sd.m3u8?hdnts=exp=1741754593_acl=/70d62c448d1a71efbfc987c7371d0102/*_hmac=72c15b6a768e408e7539ed2e49a40e8cf9774dcbdf369dea6659d7508b0ca62a",
        "1080p": "https://akm-cdn-play-web.onfilom.com/70d62c448d1a71efbfc987c7371d0102/de9e99578e8448dc96428924ffd150dd-31f43b7a1cd6b8c49b9e46905d4d8866-sd.m3u8?hdnts=exp=1741754593_acl=/70d62c448d1a71efbfc987c7371d0102/*_hmac=72c15b6a768e408e7539ed2e49a40e8cf9774dcbdf369dea6659d7508b0ca62a"
    },
    "1064213": {
        "title": "Anora",
        "360p": "https://v2.fiestareel.com/mov/2024/1064213-156537/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/1064213-156537/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/1064213-156537/720/720p.m3u8"
    },
    "549509": {
        "title": "El brutalista",
        "360p": "https://hfs296.serversicuro.cc/hls/dnzpemdh5pg4a3gyvakh5klvtwdikblg2flfctdiobfv5qqv4xfy4btjxqwq/index-v1-a1.m3u8",
        "720p": "https://hfs296.serversicuro.cc/hls/dnzpemdh5pg4a3gyvakh5klvtwdikblg2flfctdiobfv5qqv4xfy4btjxqwq/index-v1-a1.m3u8",
        "1080p": "https://hfs296.serversicuro.cc/hls/dnzpemdh5pg4a3gyvakh5klvtwdikblg2flfctdiobfv5qqv4xfy4btjxqwq/index-v1-a1.m3u8"
    },
    "974576": {
        "title": "Cónclave",
        "360p": "https://v2.fiestareel.com/mov/2024/974576-156443/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/974576-156443/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/974576-156443/720/720p.m3u8"
    },
    "1035048": {
        "title": "Criaturas: Línea de extinción",
        "360p": "https://xyve3dzn2w.guardstorage.net/hls_3/rvKR0KuSGK4fNvld6RyAkKjTaOJBFmApFSQPqBs7v7Hi4UzcPEkt7NkgvLfUvUHV6byN1wy4yWm0i0bil7Me81d5bJISS43G7GafqZAu2tz2mxuXLjbkNW9emShtKQfrHSJkeFiuFEvrmGqspKw8eKCHCZ0ObdLzcGPeZaq2w_7sQt2xJm5ZgcrZG3LrehsNvFow9ElLrfguwQySTEA2aA/index-f1-v1-a1.m3u8?sig=XlocMAyVv52_L0Tf3jl_iQ&expires=1741140715",
        "720p": "https://xyve3dzn2w.guardstorage.net/hls_3/rvKR0KuSGK4fNvld6RyAkKjTaOJBFmApFSQPqBs7v7Hi4UzcPEkt7NkgvLfUvUHV6byN1wy4yWm0i0bil7Me81d5bJISS43G7GafqZAu2tz2mxuXLjbkNW9emShtKQfrHSJkeFiuFEvrmGqspKw8eKCHCZ0ObdLzcGPeZaq2w_7sQt2xJm5ZgcrZG3LrehsNvFow9ElLrfguwQySTEA2aA/index-f2-v1-a1.m3u8?sig=XlocMAyVv52_L0Tf3jl_iQ&expires=1741140715",
        "1080p": "https://xyve3dzn2w.guardstorage.net/hls_3/rvKR0KuSGK4fNvld6RyAkKjTaOJBFmApFSQPqBs7v7Hi4UzcPEkt7NkgvLfUvUHV6byN1wy4yWm0i0bil7Me81d5bJISS43G7GafqZAu2tz2mxuXLjbkNW9emShtKQfrHSJkeFiuFEvrmGqspKw8eKCHCZ0ObdLzcGPeZaq2w_7sQt2xJm5ZgcrZG3LrehsNvFow9ElLrfguwQySTEA2aA/index-f3-v1-a1.m3u8?sig=XlocMAyVv52_L0Tf3jl_iQ&expires=1741140715"
    },
"1201012": {
        "title": "Dhoom Dhaam",
        "360p": "https://2ith458pz9.guardstorage.net/hls_3/WCLQBwv1BwJ_Yl5vbEvOpKBOUvAZVNsCcNDX4zOV8HEop37q7f5I05abPvGq29FMA5TS8-AsczwZA95GiJq9RxaZolyyt_8n82pQNsK-PntJ2JfEtafsiLS_ufuc06yjtaXWqk-G1150caCl9gXc5UihSN5imR4qmOHBijpRVVjh5s42Mv8YtBUS1sRw8fRxoksxuKMBWNOrL2MIkNe2ZA/index-f1-v1-a1.m3u8?sig=NWFurm5ep8shHM80W7Jb6Q&expires=1740781392",
        "720p": "https://2ith458pz9.guardstorage.net/hls_3/WCLQBwv1BwJ_Yl5vbEvOpKBOUvAZVNsCcNDX4zOV8HEop37q7f5I05abPvGq29FMA5TS8-AsczwZA95GiJq9RxaZolyyt_8n82pQNsK-PntJ2JfEtafsiLS_ufuc06yjtaXWqk-G1150caCl9gXc5UihSN5imR4qmOHBijpRVVjh5s42Mv8YtBUS1sRw8fRxoksxuKMBWNOrL2MIkNe2ZA/index-f2-v1-a1.m3u8?sig=NWFurm5ep8shHM80W7Jb6Q&expires=1740781392",
        "1080p": "https://2ith458pz9.guardstorage.net/hls_3/WCLQBwv1BwJ_Yl5vbEvOpKBOUvAZVNsCcNDX4zOV8HEop37q7f5I05abPvGq29FMA5TS8-AsczwZA95GiJq9RxaZolyyt_8n82pQNsK-PntJ2JfEtafsiLS_ufuc06yjtaXWqk-G1150caCl9gXc5UihSN5imR4qmOHBijpRVVjh5s42Mv8YtBUS1sRw8fRxoksxuKMBWNOrL2MIkNe2ZA/index-f3-v1-a1.m3u8?sig=NWFurm5ep8shHM80W7Jb6Q&expires=1740781392"
    },
"558449": {
        "title": "Gladiador II",
        "360p": "https://jeaoebkhqn.guardstorage.net/hls_3/zNrYepnRm_FSBOJj0TE0uq40fQ_C-FjbVY6oNVuEYuTD4JW8SguLBlBEnSXOKE4FkWL3nLxsRCvdzr9ZofHNy2dakXgHo-nkdx1omYIuuA15w9dYyC6GzOvApWHXA5cieiCzZauuTIFgFyuLEaZ1cQ/index-v1-a1.m3u8?sig=2H4EPnHu8DYuWGOK_YI-dQ&expires=1740781133",
        "720p": "https://jeaoebkhqn.guardstorage.net/hls_3/zNrYepnRm_FSBOJj0TE0uq40fQ_C-FjbVY6oNVuEYuTD4JW8SguLBlBEnSXOKE4FkWL3nLxsRCvdzr9ZofHNy2dakXgHo-nkdx1omYIuuA15w9dYyC6GzOvApWHXA5cieiCzZauuTIFgFyuLEaZ1cQ/index-v1-a1.m3u8?sig=2H4EPnHu8DYuWGOK_YI-dQ&expires=1740781133",
        "1080p": "https://jeaoebkhqn.guardstorage.net/hls_3/zNrYepnRm_FSBOJj0TE0uq40fQ_C-FjbVY6oNVuEYuTD4JW8SguLBlBEnSXOKE4FkWL3nLxsRCvdzr9ZofHNy2dakXgHo-nkdx1omYIuuA15w9dYyC6GzOvApWHXA5cieiCzZauuTIFgFyuLEaZ1cQ/index-v1-a1.m3u8?sig=2H4EPnHu8DYuWGOK_YI-dQ&expires=1740781133"
    },
"1138749": {
        "title": "The Island",
        "360p": "https://sfjf2b79nx.guardstorage.net/hls_3/s8X8PqNwbnD7TPZOLQpe1n55d2MZfIobZh7pJ7vEqdQcuAQ4l_9d3H-a6ZlRbBfrLKOpq0quJ_fAFkAk0fwf5A/index-f1-v1-a1.m3u8?sig=_hYHad6IJR_giYwfXXjscw&expires=1740780838",
        "720p": "https://sfjf2b79nx.guardstorage.net/hls_3/s8X8PqNwbnD7TPZOLQpe1n55d2MZfIobZh7pJ7vEqdQcuAQ4l_9d3H-a6ZlRbBfrLKOpq0quJ_fAFkAk0fwf5A/index-f2-v1-a1.m3u8?sig=_hYHad6IJR_giYwfXXjscw&expires=1740780838",
        "1080p": "https://sfjf2b79nx.guardstorage.net/hls_3/s8X8PqNwbnD7TPZOLQpe1n55d2MZfIobZh7pJ7vEqdQcuAQ4l_9d3H-a6ZlRbBfrLKOpq0quJ_fAFkAk0fwf5A/index-f3-v1-a1.m3u8?sig=_hYHad6IJR_giYwfXXjscw&expires=1740780838"
    },
"1247019": {
        "title": "Thi Yot 2: Susurros Mortales",
        "360p": "https://2ith458pz9.guardstorage.net/hls_3/szl3UgYVlEJ23uHiQVcsIrSQuazMvPpQ_T6u2p0w8i927hxO42XHnqTfhYDgF0ZLhUuNmCfc7KBQoVSXFCfe-Vr_gPIjCe1tHjsFKQrtps-dOlw8G_9qs1-zGXq-yAhgUKUBnf7HtjOrZcU8vYxOq6h7PZuf1puRQhHuZEUEPpXXwcnKpL2EqzUPlYYSPSHz_sEHenkhCgUtFnc03-uUmQ/index-f2-v1-a1.m3u8?sig=BI34GusZvvMaLSW0uUJJHQ&expires=1740780399",
        "720p": "https://2ith458pz9.guardstorage.net/hls_3/szl3UgYVlEJ23uHiQVcsIrSQuazMvPpQ_T6u2p0w8i927hxO42XHnqTfhYDgF0ZLhUuNmCfc7KBQoVSXFCfe-Vr_gPIjCe1tHjsFKQrtps-dOlw8G_9qs1-zGXq-yAhgUKUBnf7HtjOrZcU8vYxOq6h7PZuf1puRQhHuZEUEPpXXwcnKpL2EqzUPlYYSPSHz_sEHenkhCgUtFnc03-uUmQ/index-f3-v1-a1.m3u8?sig=BI34GusZvvMaLSW0uUJJHQ&expires=1740780399",
        "1080p": "https://2ith458pz9.guardstorage.net/hls_3/szl3UgYVlEJ23uHiQVcsIrSQuazMvPpQ_T6u2p0w8i927hxO42XHnqTfhYDgF0ZLhUuNmCfc7KBQoVSXFCfe-Vr_gPIjCe1tHjsFKQrtps-dOlw8G_9qs1-zGXq-yAhgUKUBnf7HtjOrZcU8vYxOq6h7PZuf1puRQhHuZEUEPpXXwcnKpL2EqzUPlYYSPSHz_sEHenkhCgUtFnc03-uUmQ/index-f3-v1-a1.m3u8?sig=BI34GusZvvMaLSW0uUJJHQ&expires=1740780399"
    },
"912649": {
        "title": "Venom: El último baile",
        "360p": "https://otnfip7097.guardstorage.net/hls_3/wWuB3y6TE1omIOlMQRV6dCv1YeJhMg5BuqXgUqNXag_iL2QrbfkB81d0AjivJO8xnPXfl7_yqEnnY7WyqC3NeuZgTP5j4JVj_Zm6AKxjA7NzX3IT02SJBTCmMLBJ9lfDu934MeCxHZkRXN-218ROhQ323_gp0EDwmqeGPQ4jeCO_6FKXzvoataJUSmvOXj7JhBcGbuxVNv-l8IvwvrR4JQ/index-f1-v1-a1.m3u8?sig=Y-QSpLbaKd6eO1tzs-Tj-w&expires=1740780028",
        "720p": "https://otnfip7097.guardstorage.net/hls_3/wWuB3y6TE1omIOlMQRV6dCv1YeJhMg5BuqXgUqNXag_iL2QrbfkB81d0AjivJO8xnPXfl7_yqEnnY7WyqC3NeuZgTP5j4JVj_Zm6AKxjA7NzX3IT02SJBTCmMLBJ9lfDu934MeCxHZkRXN-218ROhQ323_gp0EDwmqeGPQ4jeCO_6FKXzvoataJUSmvOXj7JhBcGbuxVNv-l8IvwvrR4JQ/index-f2-v1-a1.m3u8?sig=Y-QSpLbaKd6eO1tzs-Tj-w&expires=1740780028",
        "1080p": "https://otnfip7097.guardstorage.net/hls_3/wWuB3y6TE1omIOlMQRV6dCv1YeJhMg5BuqXgUqNXag_iL2QrbfkB81d0AjivJO8xnPXfl7_yqEnnY7WyqC3NeuZgTP5j4JVj_Zm6AKxjA7NzX3IT02SJBTCmMLBJ9lfDu934MeCxHZkRXN-218ROhQ323_gp0EDwmqeGPQ4jeCO_6FKXzvoataJUSmvOXj7JhBcGbuxVNv-l8IvwvrR4JQ/index-f3-v1-a1.m3u8?sig=Y-QSpLbaKd6eO1tzs-Tj-w&expires=1740780028"
    },
"516729": {
        "title": "Paddington: Aventura en la selva",
        "360p": "https://m526f62dkn.guardstorage.net/hls_3/ZWDBFMos5qzGsnCKujQviMUGXZP3QUUDEd4B7n2_w-nF-N5kfd63Q-uq9H8S2fqzxxVuvVbrCEsW4B8JvtW3f48jwmUOh_JirG5C2eGqpMks1Z8eLYBPZLwjLuZbSOQnVP1GofK4bGECoEjiqBturdb3TV_STxgqdeG_M-OgTN1DNSgAFgZmslncNTkQBCqSjii0nm3WRKzl16QB6ALpRw/index-f1-v1-a1.m3u8?sig=RaoBIJpSgcrleoGboPuzoQ&expires=1740779585",
        "720p": "https://m526f62dkn.guardstorage.net/hls_3/ZWDBFMos5qzGsnCKujQviMUGXZP3QUUDEd4B7n2_w-nF-N5kfd63Q-uq9H8S2fqzxxVuvVbrCEsW4B8JvtW3f48jwmUOh_JirG5C2eGqpMks1Z8eLYBPZLwjLuZbSOQnVP1GofK4bGECoEjiqBturdb3TV_STxgqdeG_M-OgTN1DNSgAFgZmslncNTkQBCqSjii0nm3WRKzl16QB6ALpRw/index-f2-v1-a1.m3u8?sig=RaoBIJpSgcrleoGboPuzoQ&expires=1740779585",
        "1080p": "https://m526f62dkn.guardstorage.net/hls_3/ZWDBFMos5qzGsnCKujQviMUGXZP3QUUDEd4B7n2_w-nF-N5kfd63Q-uq9H8S2fqzxxVuvVbrCEsW4B8JvtW3f48jwmUOh_JirG5C2eGqpMks1Z8eLYBPZLwjLuZbSOQnVP1GofK4bGECoEjiqBturdb3TV_STxgqdeG_M-OgTN1DNSgAFgZmslncNTkQBCqSjii0nm3WRKzl16QB6ALpRw/index-f3-v1-a1.m3u8?sig=RaoBIJpSgcrleoGboPuzoQ&expires=1740779585"
    },
"774370": {
        "title": "Las aventuras de Dog Man",
        "360p": "https://zkiaa1g08m.guardstorage.net/hls_3/7yKhqOBo3ofBLFOsly1ri6SqbAv4-CcE4XrERp9LTzD7k0nWY7g4b4SFbKzjQgsNc0iC1D1OyOIgC8XVahdTCw/index-f2-v1-a1.m3u8?sig=5_QYjqpHluJfBo4ic5oYmg&expires=1740779181",
        "720p": "https://zkiaa1g08m.guardstorage.net/hls_3/7yKhqOBo3ofBLFOsly1ri6SqbAv4-CcE4XrERp9LTzD7k0nWY7g4b4SFbKzjQgsNc0iC1D1OyOIgC8XVahdTCw/index-f3-v1-a1.m3u8?sig=5_QYjqpHluJfBo4ic5oYmg&expires=1740779181",
        "1080p": "https://zkiaa1g08m.guardstorage.net/hls_3/7yKhqOBo3ofBLFOsly1ri6SqbAv4-CcE4XrERp9LTzD7k0nWY7g4b4SFbKzjQgsNc0iC1D1OyOIgC8XVahdTCw/index-f3-v1-a1.m3u8?sig=5_QYjqpHluJfBo4ic5oYmg&expires=1740779181"
    },
"1294203": {
        "title": "Culpa Mía: Londres",
        "360p": "https://v2.fiestareel.com/mov/2025/1294203-156644/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1294203-156644/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/1294203-156644/720/720p.m3u8"
    },
"539972": {
        "title": "Kraven el cazador",
        "360p": "https://jeaoebkhqn.guardstorage.net/hls_3/H-6ry62OghIqSGo6GScLSHEPSTjHkOqWH5NomP4YUatRPAbsCsH-H7MSQZvKDRReUAy3FWQrSSVt5EPMAe75DVyPLUg1Zbwubtp1wS7My7aDV_e9ovp8ba913uQ2z3pyCcNulORiMekA0oAjBlvuhPQ3nKwErq7y9bfZ-6jPuMOZjxUmIoePWEsnevKU9apTzc2dTMQYdWYSu4I6O0KzBg/index-f1-v1-a1.m3u8?sig=psPePq4yYdvfs9unsvTnlA&expires=1740777489",
        "720p": "https://jeaoebkhqn.guardstorage.net/hls_3/H-6ry62OghIqSGo6GScLSHEPSTjHkOqWH5NomP4YUatRPAbsCsH-H7MSQZvKDRReUAy3FWQrSSVt5EPMAe75DVyPLUg1Zbwubtp1wS7My7aDV_e9ovp8ba913uQ2z3pyCcNulORiMekA0oAjBlvuhPQ3nKwErq7y9bfZ-6jPuMOZjxUmIoePWEsnevKU9apTzc2dTMQYdWYSu4I6O0KzBg/index-f2-v1-a1.m3u8?sig=psPePq4yYdvfs9unsvTnlA&expires=1740777489",
        "1080p": "https://jeaoebkhqn.guardstorage.net/hls_3/H-6ry62OghIqSGo6GScLSHEPSTjHkOqWH5NomP4YUatRPAbsCsH-H7MSQZvKDRReUAy3FWQrSSVt5EPMAe75DVyPLUg1Zbwubtp1wS7My7aDV_e9ovp8ba913uQ2z3pyCcNulORiMekA0oAjBlvuhPQ3nKwErq7y9bfZ-6jPuMOZjxUmIoePWEsnevKU9apTzc2dTMQYdWYSu4I6O0KzBg/index-f2-v1-a1.m3u8?sig=psPePq4yYdvfs9unsvTnlA&expires=1740777489"
    },
"1160956": {
        "title": "Operación Panda: Misión Rescate",
        "360p": "https://xyve3dzn2w.guardstorage.net/hls_3/LVE6hxTN6Du0Vv17Ywq_ipz8moyFa42b8i0AN9w3zJPnSTsEDLnRE6U6SW8G4Hgad3MW176UMLPu61kwafWy7Q/index-f1-v1-a1.m3u8?sig=dUFag4cdvDrTMjLLykpvjw&expires=1740765843",
        "720p": "https://xyve3dzn2w.guardstorage.net/hls_3/LVE6hxTN6Du0Vv17Ywq_ipz8moyFa42b8i0AN9w3zJPnSTsEDLnRE6U6SW8G4Hgad3MW176UMLPu61kwafWy7Q/index-f2-v1-a1.m3u8?sig=dUFag4cdvDrTMjLLykpvjw&expires=1740765843",
        "1080p": "https://xyve3dzn2w.guardstorage.net/hls_3/LVE6hxTN6Du0Vv17Ywq_ipz8moyFa42b8i0AN9w3zJPnSTsEDLnRE6U6SW8G4Hgad3MW176UMLPu61kwafWy7Q/index-f3-v1-a1.m3u8?sig=dUFag4cdvDrTMjLLykpvjw&expires=1740765843"
    },
"822119": {
        "title": "Capitán América: Un nuevo mundo",
        "360p": "https://v2.fiestareel.com/mov/2025/822119-156597/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/822119-156597/480/480p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/822119-156597/720/720p.m3u8"
    },
"1084199": {
        "title": "Compañera Perfecta",
        "360p": "https://v2.fiestareel.com/mov/2025/1084199-156685/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1084199-156685/720/720p.m3u8",
        "1080p": ""
    },
"1241982": {
        "title": "Moana 2",
        "360p": "https://v2.fiestareel.com/mov/2024/1241982-156362/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/1241982-156362/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/1241982-156362/720/720p.m3u8"
    },
"1126166": {
        "title": "Amenaza En El Aire",
        "360p": "https://v2.fiestareel.com/mov/2025/1126166-156540/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1126166-156540/720/720p.m3u8",
        "1080p": ""
    },
    "762509": {
        "title": "Mufasa El Rey León",
        "360p": "https://v2.fiestareel.com/mov/2024/762509-156193/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/762509-156193/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/762509-156193/720/720p.m3u8"
    },
    "950396": {
        "title": "El Abismo Secreto",
        "360p": "https://v2.fiestareel.com/mov/2025/950396-156617/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/950396-156617/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/950396-156617/720/720p.m3u8"
    },
    "939243": {
        "title": "Sonic 3",
        "360p": "https://v2.fiestareel.com/mov/2024/939243-156549/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/939243-156549/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/939243-156549/720/720p.m3u8"
    }, 
    "710295": {
        "title": "Hombre Lobo",
        "360p": "https://b76rg533gp.guardstorage.net/hls_3/jTzVPPqPZlpq0VRAtPN9C_zCp2NBwrHrtrQaSJTEVZs07PNgzTweLcDSTnc7JYdOlTJOrzoqV66gN9KTXsN6TSDCM8aETAyOn4y-QPrPG39VfTaLy_J0YFBh6G-PJLTg8CPOGPXo-WqLUAwz8bJrAP5lzl8cF7sMB51c3saY_nOIYWO9Z6a78iFYgF6LCTpH5sB9irfa_8seZ4Qy-Ejbfg/index-f2-v1-a1.m3u8?sig=C7cin1FwlIG9_Di6NVzgHA&expires=1740735073",
        "720p": "https://b76rg533gp.guardstorage.net/hls_3/jTzVPPqPZlpq0VRAtPN9C_zCp2NBwrHrtrQaSJTEVZs07PNgzTweLcDSTnc7JYdOlTJOrzoqV66gN9KTXsN6TSDCM8aETAyOn4y-QPrPG39VfTaLy_J0YFBh6G-PJLTg8CPOGPXo-WqLUAwz8bJrAP5lzl8cF7sMB51c3saY_nOIYWO9Z6a78iFYgF6LCTpH5sB9irfa_8seZ4Qy-Ejbfg/index-f2-v1-a1.m3u8?sig=C7cin1FwlIG9_Di6NVzgHA&expires=1740735073",
        "1080p": "https://b76rg533gp.guardstorage.net/hls_3/jTzVPPqPZlpq0VRAtPN9C_zCp2NBwrHrtrQaSJTEVZs07PNgzTweLcDSTnc7JYdOlTJOrzoqV66gN9KTXsN6TSDCM8aETAyOn4y-QPrPG39VfTaLy_J0YFBh6G-PJLTg8CPOGPXo-WqLUAwz8bJrAP5lzl8cF7sMB51c3saY_nOIYWO9Z6a78iFYgF6LCTpH5sB9irfa_8seZ4Qy-Ejbfg/index-f3-v1-a1.m3u8?sig=C7cin1FwlIG9_Di6NVzgHA&expires=1740735073"
    }
    // Más películas...
};
