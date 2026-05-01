import { useEffect, useRef } from 'react'

export default function TruthMirrorMonolith() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) return;

    const vs = `
      attribute vec3 aPos;
      attribute float aAlpha;
      uniform mat4 uMVP;
      varying float vAlpha;
      void main(){
        vAlpha = aAlpha;
        gl_Position = uMVP * vec4(aPos, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying float vAlpha;
      uniform float uTime;
      void main(){
        vec3 color = vec3(0.32, 0.29, 0.72); // Branding: #534AB7
        float flicker = sin(uTime * 2.0) * 0.1 + 0.9;
        gl_FragColor = vec4(color * flicker, vAlpha);
      }
    `;

    const compile = (src, type) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(vs, gl.VERTEX_SHADER));
    gl.attachShader(prog, compile(fs, gl.FRAGMENT_SHADER));
    gl.linkProgram(prog); gl.useProgram(prog);

    // --- Hyper-Detailed Massive Geometry ---
    const S = 3; // Massive Presence
    const cubeVerts = [
      -S,-S,-S, S,-S,-S, S,-S,-S, S,S,-S, S,S,-S, -S,S,-S, -S,S,-S, -S,-S,-S,
      -S,-S, S, S,-S, S, S,-S, S, S,S, S, S,S, S, -S,S, S, -S,S, S, -S,-S, S,
      -S,-S,-S, -S,-S, S, S,-S,-S, S,-S, S, S,S,-S, S,S, S, -S,S,-S, -S,S, S
    ];
    
    // High-Density Floor Grid (Detailed)
    const gridVerts = [];
    const gridSize = 30;
    const step = 0.4; // High frequency for detail
    for(let i = -gridSize; i <= gridSize; i += step) {
        gridVerts.push(i, -S, -gridSize, i, -S, gridSize); 
        gridVerts.push(-gridSize, -S, i, gridSize, -S, i); 
    }

    const allVerts = new Float32Array([...cubeVerts, ...gridVerts]);
    const alphas = new Float32Array([...Array(24).fill(0.8), ...Array(gridVerts.length/3).fill(0.08)]);

    const posB = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posB);
    gl.bufferData(gl.ARRAY_BUFFER, allVerts, gl.STATIC_DRAW);

    const alphaB = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, alphaB);
    gl.bufferData(gl.ARRAY_BUFFER, alphas, gl.STATIC_DRAW);

    const uMVP = gl.getUniformLocation(prog, 'uMVP');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const aPos = gl.getAttribLocation(prog, 'aPos');
    const aAlpha = gl.getAttribLocation(prog, 'aAlpha');

    const multiply = (a, b) => {
      const out = new Float32Array(16);
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          let s = 0; for (let k = 0; k < 4; k++) s += a[k*4+j] * b[i*4+k];
          out[i*4+j] = s;
        }
      }
      return out;
    };

    const perspective = (f, a, n, fr) => {
      const h = 1/Math.tan(f/2), d = 1/(n-fr);
      return new Float32Array([h/a,0,0,0, 0,h,0,0, 0,0,(fr+n)*d,-1, 0,0,2*fr*n*d,0]);
    };

    const rotate = (ax, ay) => {
      const cx = Math.cos(ax), sx = Math.sin(ax), cy = Math.cos(ay), sy = Math.sin(ay);
      return new Float32Array([cy,sx*sy,cx*sy,0, 0,cx,-sx,0, -sy,sx*cy,cx*cy,0, 0,0,0,1]);
    };

    let auto = 0, frame;
    
    const resize = () => {
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width; canvas.height = height;
      }
    };

    const render = (t) => {
      resize();
      auto += 0.0015;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      const p = perspective(Math.PI/3, canvas.width/canvas.height, 0.1, 40);
      const m = rotate(0.1, auto); 
      const v = new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,3.0,-15,1]); // Pull back to fit massive model
      const mvp = multiply(p, multiply(v, m));

      gl.useProgram(prog);
      gl.uniformMatrix4fv(uMVP, false, mvp);
      gl.uniform1f(uTime, t/1000);

      gl.bindBuffer(gl.ARRAY_BUFFER, posB);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, alphaB);
      gl.enableVertexAttribArray(aAlpha);
      gl.vertexAttribPointer(aAlpha, 1, gl.FLOAT, false, 0, 0);
      
      gl.drawArrays(gl.LINES, 0, allVerts.length/3);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed',
        right: '-20%', // Bleed off the edge for scale
        width: '70vw', 
        height: '100vh', 
        zIndex: -1, // Behind the text
        pointerEvents: 'none',
        display: 'block',
        transform: 'translateY(253px)',
        
         // Allow text selection through the cube
      }} 
    />
  )
}