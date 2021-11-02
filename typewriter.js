const sentence = "hello there from lighthouse labs\n";
let delayChar = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delayChar);
  delayChar += 50;
}