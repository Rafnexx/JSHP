const data = {
  Portland: "78/50",
  Dublin: "88/52",
  Lima: "58/40"
};

// 1 bez padEnd
console.log("%c bez padEnd", "color: red");
Object.entries(data).map(([city, temp]) =>
  console.log(`City: ${city} Weather: ${temp}`)
);

// 2 z padEnd
console.log("%c z padEnd", "color: green");
Object.entries(data).map(([city, temp]) =>
  console.log(`City: ${city.padEnd(16)} Weather: ${temp}`)
);
