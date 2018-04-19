precision mediump float;

attribute vec3 vertPos;
varying vec3 vClr;
varying vec3 vPos;

uniform vec3 u_vecClr;
uniform mat4 u_matModel;
uniform mat4 u_matView;
uniform mat4 u_matProj;

void main()
{
  gl_PointSize = 2.0;

  gl_Position = u_matProj * u_matView * u_matModel * vec4(vertPos, 1.0);
  vPos = vec3(vertPos.xyz);
  vClr = u_vecClr;
}