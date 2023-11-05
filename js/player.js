class Player {
  constructor() {
    this.select = document.getElementById('difficulty-dropdown');
    this.harry = document.getElementById('harry');
    this.gameSpace = document.querySelector('.game-space');
  }

  move() {
    this.gameSpace.addEventListener('keydown', function (event) {
      event.preventDefault();
      let r;
      let c;
      switch (document.getElementById('difficulty-dropdown').value) {
        case 'easy':
          r = 3;
          c = 1;
          switch (event.key) {
            case 'ArrowUp':
              c -= 1;
              if (c >= 0 && c <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c + 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowDown':
              c += 1;
              if (c >= 0 && c <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c - 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowRight':
              r += 1;
              if (r >= 0 && r <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r - 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowLeft':
              r -= 1;
              if (r >= 0 && r <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r + 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
          }
          break;
        case 'normal':
          r = 3;
          c = 3;
          switch (event.key) {
            case 'ArrowUp':
              c -= 1;
              if (c >= 0 && c <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c + 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowDown':
              c += 1;
              if (c >= 0 && c <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c - 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowRight':
              r += 1;
              if (r >= 0 && r <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r - 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowLeft':
              r -= 1;
              if (r >= 0 && r <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r + 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
          }
          break;
        case 'hard':
          r = 12;
          c = 16;
          switch (event.key) {
            case 'ArrowUp':
              c -= 1;
              if (c >= 0 && c <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c + 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowDown':
              c += 1;
              if (c >= 0 && c <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c - 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowRight':
              r += 1;
              if (r >= 0 && r <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r - 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowLeft':
              r -= 1;
              if (r >= 0 && r <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r + 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
          }
          break;
      }
    });
  }
}
