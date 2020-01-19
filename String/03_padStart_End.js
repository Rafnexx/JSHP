const data = {
    Portland: '78/50',
    Dublin: '88/52',
    Lima: '58/40'
}

// 1 bez padEnd
Object.entries(data).map(([city, temp]) => {
    console.log(`City: ${city} Weather: ${temp}`)
});

// 2 z padEnd
Object.entries(data).map(([city, temp]) => {
    console.log(`City: ${city.padEnd(16)} Weather: ${temp}`)
});