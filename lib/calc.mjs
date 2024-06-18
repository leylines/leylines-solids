export function getPoints (latitude, longitude, bearing, type, shape) {

   if (bearing == -180) { bearing = 180; }
   bearing = -toRadians(bearing);

   var thetaX;
   var thetaY;
   var thetaZ;

   if (type == "triangle") {
      // default the vertex of a shape toward true north
      thetaY = Math.acos(Math.sqrt((3.0+Math.sqrt(5.0))/6.0))
      thetaX = toRadians(180.0);
      shape = rotateX(rotateY(shape, thetaY), thetaX);
   } else if (type == "star") {
      thetaY = toRadians(58.28);
      thetaX = toRadians(180.0);
      shape = rotateX(rotateY(shape, thetaY), thetaX);
   }

   // set rotational angles
   thetaX = bearing;
   thetaZ = toRadians(longitude);
   thetaY = -toRadians(latitude);

   var results = getCoordinates(rotateZ(rotateY(rotateX(shape, thetaX), thetaY), thetaZ));
   return results;

};

function getCoordinates(param) {

   var results = [];
   var i, tot;
   for (i=0, tot=param.length; i<tot; i++) {

      var x = param[i][0];
      var y = param[i][1];
      var z = param[i][2];

      var theta = 0.0;
      var phi = 0.0;
      if (z < 0) {
         theta = Math.PI+Math.atan(Math.sqrt(x*x+y*y)/z);
      } else if (z===0.0) {
         theta = Math.PI / 2.0;
      } else {
         theta = Math.atan(Math.sqrt(x*x+y*y)/z);
      }

      if (x < 0.0 && y !== 0.0) {
         phi = Math.PI+Math.atan(y/x);
      } else if (x === 0.0 && y > 0.0) {
         phi = Math.PI / 2.0;
      } else if (x === 0.0 && y < 0.0) {
         phi = Math.PI * 3.0 / 2.0;
      } else if (y === 0.0 && x > 0.0) {
         phi = 0.0;
      } else if (y === 0.0 && x < 0.0) {
         phi = Math.PI;
      } else if (x > 0.0 && y <= 0.0) {
         phi = 2 * Math.PI + Math.atan(y / x);
      } else if (x === 0.0 && y === 0.0)  {
         phi = 888.0;
      } else {
         phi = Math.atan(y/x);
      }

      param[i][0] = theta;
      param[i][1] = phi;
      delete param[i][2];

      theta = toDegrees(theta);
      phi = toDegrees(phi);

      var longitude;
      var latitude = 90.0 - theta;
      if (phi <= 180.0) {
         longitude = phi;
      } else {
         longitude = phi - 360.0;
      }
      if (longitude > 600.0) {
         longitude = 0.0;
      }
      results.push([i,longitude,latitude,i+1]);

   }
   return results;
};

function rotateZ(param, thetaZ) {
  var i, tot;
  for (i=0, tot=param.length; i<tot; i++) {
    var x = param[i][0];
    var y = param[i][1];
    var z = param[i][2];

    param[i][0] = x*Math.cos(thetaZ)-y*Math.sin(thetaZ);
    param[i][1] = x*Math.sin(thetaZ)+y*Math.cos(thetaZ);
    param[i][2] = z;
  }
  return param;
}

function rotateX(param, thetaX) {
   var i, tot;
   for (i=0, tot=param.length; i<tot; i++) {
      var x = param[i][0];
      var y = param[i][1];
      var z = param[i][2];

      param[i][0] = x;
      param[i][1] = y*Math.cos(thetaX)-z*Math.sin(thetaX);
      param[i][2] = y*Math.sin(thetaX)+z*Math.cos(thetaX);
   }
   return param;
}

function rotateY(param, thetaY) {
   var i, tot;
   for (i=0, tot=param.length; i<tot; i++) {
      var x = param[i][0];
      var y = param[i][1];
      var z = param[i][2];

      param[i][0] = x*Math.cos(thetaY)+z*Math.sin(thetaY);
      param[i][1] = y;
      param[i][2] = -x*Math.sin(thetaY)+z*Math.cos(thetaY);
   }
   return param;
}

function toRadians(degrees) {
   return degrees * Math.PI / 180.0;
};

function toDegrees(radians) {
   return radians * 180.0 / Math.PI;
};
