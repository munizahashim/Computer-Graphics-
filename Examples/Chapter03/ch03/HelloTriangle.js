// HelloTriangle.js (c) 2012 matsuda
let use_constant = 1;
let program_constant, a_Position_constant, u_Color_constant;
// Vertex shader program
var VSHADER_SOURCE_constant =
  'attribute vec4 a_Position;\n' +
  'uniform mat4 u_MvpMatrix;\n' +
  'void main() {\n' +
  '  gl_Position = u_MvpMatrix * a_Position;\n' +
  '}\n';

// Constant color fragment shader program
var FSHADER_SOURCE_constant =
  '#ifdef GL_ES\n' +
  'precision mediump float;\n' +
  '#endif\n' +
  'uniform vec4 u_Color;\n' +
  'void main() {\n' +
  '//  gl_FragColor = u_Color;\n' +
  '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
  '}\n';

function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // Initialize shaders
  program_constant = createProgram(gl, VSHADER_SOURCE_constant, FSHADER_SOURCE_constant);

  // Write the positions of vertices to a vertex shader
  var n = initVertexBuffers(gl);

  // Specify the color for clearing <canvas>
  gl.clearColor(0, 0, 0.8, 1);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw the rectangle
  gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
  var vertices = new Float32Array([
    0, 0.5,   -0.5, -0.5,   0.5, -0.5
  ]);
  var n = 3; // The number of vertices

  // Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  if (use_constant)
	 gl.useProgram(program_constant);
  u_Color_constant = gl.getUniformLocation(program_constant, 'u_Color');
  a_Position_constant = gl.getAttribLocation(program_constant, 'a_Position');
  
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position_constant, 2, gl.FLOAT, false, 0, 0);
  gl.uniform4f(u_Color_constant, 1., .9, 0., 1.);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position_constant);

  return n;
}
