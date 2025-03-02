export const drawHand = (predictions, ctx) => {
    if (!predictions || predictions.length === 0) return;
  
    predictions.forEach((prediction) => {
      const landmarks = prediction.landmarks;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
      for (let i = 0; i < landmarks.length; i++) {
        const [x, y] = landmarks[i];
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
      }
    });
  };
  