self.onmessage = function (message) 
{
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
      sum += i;
    }
    self.postMessage(sum);
}

  