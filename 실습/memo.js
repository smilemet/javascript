function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  console.log('🍎');
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

const a = getApple()