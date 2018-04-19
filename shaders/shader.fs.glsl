precision mediump float;

varying vec3 vClr;
varying vec3 vPos;

uniform sampler2D sampler;
uniform mat4 u_matModel;

uniform int u_iUseLighting;
uniform float u_fClrScalar;

void main()
{
	vec3 outClr = vClr;
  	if (u_iUseLighting == 1) {
  		vec3 worldPos = vec3(u_matModel * vec4(vPos, 1.0));
  		vec3 norm = normalize(vPos);
  		vec3 lightPos = vec3(0,80,20);
  		vec3 lightDir = normalize(lightPos - worldPos);
  		vec3 lightClr = vec3(0.7,0.6,0.5);
  		float diff = max(dot(norm, lightDir), 0.0);
		vec3 diffuse = diff * lightClr;
		vec3 ambient = vec3(0.2, 0.2, 0.2);
	  	outClr = (ambient + diffuse) * outClr * u_fClrScalar;
	}
	gl_FragColor = vec4(outClr,1);
}