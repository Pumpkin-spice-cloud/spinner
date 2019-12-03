process.stdout.write('hello from spinner1.js... \rheyyy\n');
const loading = ['|', '/', '-', '\\', '|'];
for (let i = 0; i < loading.length * 2; i++) {
  setTimeout(() => {
    let index = i % 5 
    process.stdout.write(`\r${loading[i]}   `);
  }, 100 + i * 200);
}

