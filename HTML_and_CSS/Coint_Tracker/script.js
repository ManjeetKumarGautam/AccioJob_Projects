const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const mktCapBtn = document.getElementById("mkt-cap-btn");
const percentageBtn = document.getElementById("percentage-btn");
const tableBody = document.getElementById("table-body");


let coins = [];

// let coins = [
//     {
//         "id": "bitcoin",
//         "symbol": "btc",
//         "name": "Bitcoin",
//         "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//         "current_price": 96967,
//         "market_cap": 1921870964677,
//         "market_cap_rank": 1,
//         "fully_diluted_valuation": 1921870964677,
//         "total_volume": 49206494706,
//         "high_24h": 97706,
//         "low_24h": 95324,
//         "price_change_24h": 1008.15,
//         "price_change_percentage_24h": 1.05061,
//         "market_cap_change_24h": 18812219064,
//         "market_cap_change_percentage_24h": 0.98853,
//         "circulating_supply": 19810493,
//         "total_supply": 19810493,
//         "max_supply": 21000000,
//         "ath": 108135,
//         "ath_change_percentage": -10.4162,
//         "ath_date": "2024-12-17T15:02:41.429Z",
//         "atl": 67.81,
//         "atl_change_percentage": 142758.87906,
//         "atl_date": "2013-07-06T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:44.786Z"
//     },
//     {
//         "id": "ethereum",
//         "symbol": "eth",
//         "name": "Ethereum",
//         "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
//         "current_price": 3204.84,
//         "market_cap": 386298223296,
//         "market_cap_rank": 2,
//         "fully_diluted_valuation": 386298223296,
//         "total_volume": 19666543336,
//         "high_24h": 3249.96,
//         "low_24h": 3174.95,
//         "price_change_24h": 20.09,
//         "price_change_percentage_24h": 0.63076,
//         "market_cap_change_24h": 2135372714,
//         "market_cap_change_percentage_24h": 0.55585,
//         "circulating_supply": 120496852.32283,
//         "total_supply": 120496852.32283,
//         "max_supply": null,
//         "ath": 4878.26,
//         "ath_change_percentage": -34.39138,
//         "ath_date": "2021-11-10T14:24:19.604Z",
//         "atl": 0.432979,
//         "atl_change_percentage": 739095.26471,
//         "atl_date": "2015-10-20T00:00:00.000Z",
//         "roi": {
//             "times": 43.1897941347094,
//             "currency": "btc",
//             "percentage": 4318.97941347094
//         },
//         "last_updated": "2025-01-15T13:06:44.413Z"
//     },
//     {
//         "id": "ripple",
//         "symbol": "xrp",
//         "name": "XRP",
//         "image": "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
//         "current_price": 2.78,
//         "market_cap": 159595731664,
//         "market_cap_rank": 3,
//         "fully_diluted_valuation": 277554012931,
//         "total_volume": 12386324673,
//         "high_24h": 2.88,
//         "low_24h": 2.55,
//         "price_change_24h": 0.22646,
//         "price_change_percentage_24h": 8.88249,
//         "market_cap_change_24h": 12704609069,
//         "market_cap_change_percentage_24h": 8.649,
//         "circulating_supply": 57493120449,
//         "total_supply": 99986673391,
//         "max_supply": 100000000000,
//         "ath": 3.4,
//         "ath_change_percentage": -18.68319,
//         "ath_date": "2018-01-07T00:00:00.000Z",
//         "atl": 0.00268621,
//         "atl_change_percentage": 102777.82541,
//         "atl_date": "2014-05-22T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:34.556Z"
//     },
//     {
//         "id": "tether",
//         "symbol": "usdt",
//         "name": "Tether",
//         "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
//         "current_price": 0.999484,
//         "market_cap": 137176950324,
//         "market_cap_rank": 4,
//         "fully_diluted_valuation": 137176950324,
//         "total_volume": 44378965868,
//         "high_24h": 0.999682,
//         "low_24h": 0.999362,
//         "price_change_24h": -0.00003706934461889,
//         "price_change_percentage_24h": -0.00371,
//         "market_cap_change_24h": 4690828,
//         "market_cap_change_percentage_24h": 0.00342,
//         "circulating_supply": 137247766010.506,
//         "total_supply": 137247766010.506,
//         "max_supply": null,
//         "ath": 1.32,
//         "ath_change_percentage": -24.45815,
//         "ath_date": "2018-07-24T00:00:00.000Z",
//         "atl": 0.572521,
//         "atl_change_percentage": 74.57711,
//         "atl_date": "2015-03-02T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:37.328Z"
//     },
//     {
//         "id": "binancecoin",
//         "symbol": "bnb",
//         "name": "BNB",
//         "image": "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
//         "current_price": 690.47,
//         "market_cap": 100735571938,
//         "market_cap_rank": 5,
//         "fully_diluted_valuation": 100735571938,
//         "total_volume": 632394828,
//         "high_24h": 702.93,
//         "low_24h": 689.17,
//         "price_change_24h": -1.92140154254139,
//         "price_change_percentage_24h": -0.2775,
//         "market_cap_change_24h": -361229647.598709,
//         "market_cap_change_percentage_24h": -0.35731,
//         "circulating_supply": 145887575.79,
//         "total_supply": 145887575.79,
//         "max_supply": 200000000,
//         "ath": 788.84,
//         "ath_change_percentage": -12.57075,
//         "ath_date": "2024-12-04T10:35:25.220Z",
//         "atl": 0.0398177,
//         "atl_change_percentage": 1731994.28729,
//         "atl_date": "2017-10-19T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:37.091Z"
//     },
//     {
//         "id": "solana",
//         "symbol": "sol",
//         "name": "Solana",
//         "image": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
//         "current_price": 186.86,
//         "market_cap": 90406250420,
//         "market_cap_rank": 6,
//         "fully_diluted_valuation": 110512713531,
//         "total_volume": 2903657167,
//         "high_24h": 190.72,
//         "low_24h": 185.51,
//         "price_change_24h": 0.753171,
//         "price_change_percentage_24h": 0.4047,
//         "market_cap_change_24h": 273701613,
//         "market_cap_change_percentage_24h": 0.30367,
//         "circulating_supply": 484518695.692566,
//         "total_supply": 592276123.73941,
//         "max_supply": null,
//         "ath": 263.21,
//         "ath_change_percentage": -29.11577,
//         "ath_date": "2024-11-23T15:05:59.896Z",
//         "atl": 0.500801,
//         "atl_change_percentage": 37154.78408,
//         "atl_date": "2020-05-11T19:35:23.449Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:35.945Z"
//     },
//     {
//         "id": "dogecoin",
//         "symbol": "doge",
//         "name": "Dogecoin",
//         "image": "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
//         "current_price": 0.352589,
//         "market_cap": 52056732891,
//         "market_cap_rank": 7,
//         "fully_diluted_valuation": 52065443774,
//         "total_volume": 2922962692,
//         "high_24h": 0.364215,
//         "low_24h": 0.346402,
//         "price_change_24h": 0.00594381,
//         "price_change_percentage_24h": 1.71467,
//         "market_cap_change_24h": 797377850,
//         "market_cap_change_percentage_24h": 1.55558,
//         "circulating_supply": 147608616383.705,
//         "total_supply": 147633316383.705,
//         "max_supply": null,
//         "ath": 0.731578,
//         "ath_change_percentage": -51.95666,
//         "ath_date": "2021-05-08T05:08:23.458Z",
//         "atl": 0.0000869,
//         "atl_change_percentage": 404341.17858,
//         "atl_date": "2015-05-06T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:42.123Z"
//     },
//     {
//         "id": "usd-coin",
//         "symbol": "usdc",
//         "name": "USDC",
//         "image": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
//         "current_price": 0.999898,
//         "market_cap": 45763340765,
//         "market_cap_rank": 8,
//         "fully_diluted_valuation": 45763270501,
//         "total_volume": 4961607581,
//         "high_24h": 1,
//         "low_24h": 0.999854,
//         "price_change_24h": -7.76170061556e-7,
//         "price_change_percentage_24h": -0.00008,
//         "market_cap_change_24h": -10878918.1577148,
//         "market_cap_change_percentage_24h": -0.02377,
//         "circulating_supply": 45767876359.3635,
//         "total_supply": 45767806088.0922,
//         "max_supply": null,
//         "ath": 1.17,
//         "ath_change_percentage": -14.73565,
//         "ath_date": "2019-05-08T00:40:28.300Z",
//         "atl": 0.877647,
//         "atl_change_percentage": 13.92971,
//         "atl_date": "2023-03-11T08:02:13.981Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:41.096Z"
//     },
//     {
//         "id": "cardano",
//         "symbol": "ada",
//         "name": "Cardano",
//         "image": "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
//         "current_price": 1.005,
//         "market_cap": 36046898964,
//         "market_cap_rank": 9,
//         "fully_diluted_valuation": 45221253772,
//         "total_volume": 1539160018,
//         "high_24h": 1.055,
//         "low_24h": 0.956871,
//         "price_change_24h": 0.04512742,
//         "price_change_percentage_24h": 4.70303,
//         "market_cap_change_24h": 1576595792,
//         "market_cap_change_percentage_24h": 4.57378,
//         "circulating_supply": 35870532505.7426,
//         "total_supply": 45000000000,
//         "max_supply": 45000000000,
//         "ath": 3.09,
//         "ath_change_percentage": -67.63224,
//         "ath_date": "2021-09-02T06:00:10.474Z",
//         "atl": 0.01925275,
//         "atl_change_percentage": 5089.72204,
//         "atl_date": "2020-03-13T02:22:55.044Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:40.617Z"
//     },
//     {
//         "id": "staked-ether",
//         "symbol": "steth",
//         "name": "Lido Staked Ether",
//         "image": "https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
//         "current_price": 3201.8,
//         "market_cap": 30730207003,
//         "market_cap_rank": 10,
//         "fully_diluted_valuation": 30730207003,
//         "total_volume": 31425572,
//         "high_24h": 3244.04,
//         "low_24h": 3172.2,
//         "price_change_24h": 18.32,
//         "price_change_percentage_24h": 0.57537,
//         "market_cap_change_24h": 227782183,
//         "market_cap_change_percentage_24h": 0.74677,
//         "circulating_supply": 9602831.44473669,
//         "total_supply": 9602831.44473669,
//         "max_supply": null,
//         "ath": 4829.57,
//         "ath_change_percentage": -33.76269,
//         "ath_date": "2021-11-10T14:40:47.256Z",
//         "atl": 482.9,
//         "atl_change_percentage": 562.45658,
//         "atl_date": "2020-12-22T04:08:21.854Z",
//         "roi": null,
//         "last_updated": "2025-01-15T13:06:35.069Z"
//     }
// ]

async function fetchCoins() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    let data = await response.json();
    coins = data;
    render(coins);
}
fetchCoins();


function render(arr) {

    tableBody.innerHTML = '';

    arr.forEach((coin, i) => {
        tableBody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td class="name-logo"><img src="${coin.image}" alt="coin-icon" class="logo"/>${coin.name}</td>
            <td>${coin.symbol.toUpperCase()}</td>
            <td>$ ${coin.current_price}</td>
            <td>${coin.total_volume}</td>
            <td>${coin.price_change_percentage_24h.toFixed(2)} %</td>
            <td>$ ${coin.market_cap}</td>
        </tr>`
    });
}

searchInput.addEventListener("change", (event) => {
    event.preventDefault();
    let arr = coins.filter((coin) => {
        if (coin.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchInput.value.toLowerCase())) {
            return coin;
        }
    });

    render(arr);
});

mktCapBtn.addEventListener("click", () => {
    coins.sort((a, b) => {
        return b.market_cap - a.market_cap;
    });
    render(coins);
});
percentageBtn.addEventListener("click", () => {
    coins.sort((a, b) => {
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
    });
    render(coins);
});
