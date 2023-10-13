import React from 'react'

const CanvasHw1 = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = (canvas as HTMLCanvasElement)?.getContext('2d') as CanvasRenderingContext2D;

      ctx.fillStyle = "#000";
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 4;

      ctx.beginPath();
      ctx.arc(50, 50, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 50);
      ctx.lineTo(150, 100);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(250, 100, 50, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(350, 50, 100, 50);
      ctx.stroke();
    }

  }, []);

  return (<>
    <span>The code is accessible through this <a className="text-blue-700 font-bold" href='https://gitlab.com/homeworks2282541/homework-1/js' target='_blank' rel="noreferrer">link</a>.</span>
    <canvas ref={canvasRef} height={200} width={500} />
  </>)
}

export default CanvasHw1