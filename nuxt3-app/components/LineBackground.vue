<template>
  <div class="svg-bg">
    <svg class="animated-lines" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120">

    <defs>


      <linearGradient class="forNow" id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop  style="stop-color:rgb(58, 205, 45);stop-opacity:0.4">
          <animate attributeName="offset" values="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1;1.1;1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0" dur="10s" repeatCount="indefinite" />
        </stop>
        <stop  style="stop-color:rgb(32, 113, 206);stop-opacity:0.4">
          <animate attributeName="offset" values="0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1;1.1;1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2" dur="10s" repeatCount="indefinite" />
        </stop>
        <stop  style="stop-color:rgb(213, 193, 11);stop-opacity:0.4">
          <animate attributeName="offset" values="0.4;0.5;0.6;0.7;0.8;0.9;1;1.1;1;0.9;0.8;0.7;0.6;0.5;0.4" dur="10s" repeatCount="indefinite" />
        </stop>
        <stop  style="stop-color:rgb(231, 25, 250);stop-opacity:0.4">
          <animate attributeName="offset" values="0.6;0.7;0.8;0.9;1;1.1;1;0.9;0.8;0.7;0.6" dur="10s" repeatCount="indefinite" />
        </stop>
        <stop  style="stop-color:rgb(208, 15, 15);stop-opacity:0.4">
          <animate attributeName="offset" values="0.8;0.9;1;1.1;1;0.9;0.8" dur="10s"  repeatCount="indefinite" />
        </stop>
      </linearGradient>


    </defs>
    <rect x="0" y="0" width="100%" height="100%"/>

  </svg>
  </div>
</template>

<script type="ts">
export default {
  name: "TheHeader",
  mounted () {
    var svgEl = document.querySelector('.animated-lines');

    var randomRange = function(min, max) {
      return ~~(Math.random() * (max - min + 1)) + min
    };

    var numberOfLines = 15,
        lineDataArr = [];

    var createPathString = function() {

      var completedPath = '',
          comma = ',',
          ampl = 40; // pixel range from 0, aka how deeply they bend

      for (var i = 0; i < numberOfLines; i++) {

        var path = lineDataArr[i];

        var current = {
          x: ampl * Math.sin(path.counter / path.sin),
          y: ampl * Math.cos(path.counter / path.cos)
        };

        var newPathSection = 'M' +
            // starting point
            path.startX +
            comma +
            path.startY +
            // quadratic control point
            ' Q' +
            path.pointX +
            comma +
            (current.y * 1.5).toFixed(3) + // 1.5 to amp up the bend a little
            // center point intersection
            ' ' +
            ((current.x) / 10 + path.centerX).toFixed(3) +
            comma +
            ((current.y) / 5 + path.centerY).toFixed(3) +
            // end point with quadratic reflection (T) (so the bottom right mirrors the top left)
            ' T' +
            path.endX +
            comma +
            path.endY;
        path.counter++;

        completedPath += newPathSection;

      };

      return completedPath;

    };

    var createLines = function() {

      var newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
          // higher is slower
          minSpeed = 85,
          maxSpeed = 150;

      // create an arr which contains objects for all lines
      // createPathString() will use this array
      for (var i = 0; i < numberOfLines; i++) {

        var lineDataObj = {
          counter: randomRange(1, 500), // a broad counter range ensures lines start at different cycles (will look more random)
          startX: randomRange(-5, -40),
          startY: randomRange(-5, -30),
          endX: randomRange(200, 220), // viewbox = 200
          endY: randomRange(120, 140), // viewbox = 120
          sin: randomRange(minSpeed, maxSpeed),
          cos: randomRange(minSpeed, maxSpeed),
          pointX: randomRange(20, 55),
          centerX: randomRange(90, 120),
          centerY: randomRange(120, 0)
        }

        lineDataArr.push(lineDataObj)

      }

      var animLoop = function() {
        newPathEl.setAttribute('d', createPathString());
        requestAnimationFrame(animLoop);
      }

      // once the path elements are created, start the animation loop
      svgEl.appendChild(newPathEl);
      animLoop();

    };

    createLines();
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/lineSvg.scss';
</style>
